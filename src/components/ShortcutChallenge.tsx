import { useState, useEffect, useRef } from 'react';
import { shortcutCategories } from '../data/shortcuts';
import type { ShortcutQuestion } from '../data/shortcuts';
import { RefreshCw, Zap, ArrowLeft, Trophy, Keyboard, Play, Heart } from 'lucide-react';

interface ShortcutChallengeProps {
  onBack: () => void;
}

type GameMode = 'SELECT' | 'PREPARE' | 'PLAYING' | 'SUMMARY';

export function ShortcutChallenge({ onBack }: ShortcutChallengeProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const [gameState, setGameState] = useState<GameMode>('SELECT');
  
  // Game states
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [feedback, setFeedback] = useState<'NONE' | 'SUCCESS' | 'ERROR' | 'OUT_OF_ATTEMPTS'>('NONE');
  const [attemptsLeft, setAttemptsLeft] = useState(3);
  
  const [elapsedTime, setElapsedTime] = useState(0); // in seconds
  const timerRef = useRef<any>(null);

  // Active category data
  const activeCategory = shortcutCategories.find(c => c.id === selectedCategoryId);
  const currentQuestion: ShortcutQuestion | undefined = activeCategory?.questions[currentQuestionIndex];

  // Start the timer when quiz starts
  useEffect(() => {
    if (gameState === 'PLAYING') {
      setElapsedTime(0);
      timerRef.current = setInterval(() => {
        setElapsedTime(prev => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameState]);

  // Keyboard Event Handlers
  useEffect(() => {
    if (gameState !== 'PLAYING' || !currentQuestion) return;

    const mapKey = (key: string): string => {
      const lower = key.toLowerCase();
      if (lower === 'control') return 'control';
      if (lower === 'shift') return 'shift';
      if (lower === 'alt') return 'alt';
      if (lower === 'meta') return 'meta'; // Windows command key
      if (lower === 'delete' || lower === 'del') return 'delete';
      if (lower === 'escape' || lower === 'esc') return 'escape';
      if (lower === ' ') return ' ';
      return lower;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (feedback !== 'NONE') return;
      const key = mapKey(e.key);
      
      // Prevent browser default actions (Ctrl+S, Ctrl+P, F5, F11, etc.)
      if (
        e.ctrlKey || 
        e.metaKey || 
        ['f5', 'f11', 'tab', 'escape', 'delete', 'backspace'].includes(key)
      ) {
        e.preventDefault();
      }

      setPressedKeys(prev => {
        const next = new Set(prev);
        next.add(key);
        return next;
      });
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (feedback !== 'NONE') return;
      const key = mapKey(e.key);
      setPressedKeys(prev => {
        const next = new Set(prev);
        next.delete(key);
        return next;
      });
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameState, currentQuestionIndex, currentQuestion, feedback]);

  // Check matching keys
  useEffect(() => {
    if (gameState !== 'PLAYING' || !currentQuestion || feedback !== 'NONE') return;

    const requiredKeys = currentQuestion.keys;
    // Check exact match
    const match = requiredKeys.every(k => pressedKeys.has(k)) && pressedKeys.size === requiredKeys.length;

    if (match) {
      setFeedback('SUCCESS');
      setCorrectCount(prev => prev + 1);
      
      setTimeout(() => {
        setPressedKeys(new Set());
        setFeedback('NONE');
        setAttemptsLeft(3); // Reset attempts
        if (activeCategory && currentQuestionIndex < activeCategory.questions.length - 1) {
          setCurrentQuestionIndex(prev => prev + 1);
        } else {
          setGameState('SUMMARY');
        }
      }, 1000);
    } else {
      // Check for incorrect non-modifier keys pressed
      const modifiers = ['control', 'shift', 'alt', 'meta'];
      const nonModifiersPressed = Array.from(pressedKeys).filter(k => !modifiers.includes(k));
      const requiredNonModifiers = requiredKeys.filter(k => !modifiers.includes(k));

      const hasIncorrectKey = nonModifiersPressed.some(k => !requiredNonModifiers.includes(k));

      if (hasIncorrectKey) {
        const nextAttempts = attemptsLeft - 1;
        setAttemptsLeft(nextAttempts);

        if (nextAttempts <= 0) {
          setFeedback('OUT_OF_ATTEMPTS');
          setIncorrectCount(prev => prev + 1);

          setTimeout(() => {
            setPressedKeys(new Set());
            setFeedback('NONE');
            setAttemptsLeft(3); // Reset attempts for next question
            if (activeCategory && currentQuestionIndex < activeCategory.questions.length - 1) {
              setCurrentQuestionIndex(prev => prev + 1);
            } else {
              setGameState('SUMMARY');
            }
          }, 2000); // 2s delay to show the correct answer
        } else {
          setFeedback('ERROR');
          setTimeout(() => {
            setPressedKeys(new Set());
            setFeedback('NONE');
          }, 1000);
        }
      }
    }
  }, [pressedKeys, currentQuestion, feedback, gameState, attemptsLeft]);

  const handleSelectCategory = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    setGameState('PREPARE');
  };

  const handleStartChallenge = () => {
    setCurrentQuestionIndex(0);
    setCorrectCount(0);
    setIncorrectCount(0);
    setFeedback('NONE');
    setPressedKeys(new Set());
    setAttemptsLeft(3);
    setGameState('PLAYING');
  };

  const handleVirtualKeyClick = (virtualKey: string) => {
    if (gameState !== 'PLAYING' || feedback !== 'NONE') return;

    setPressedKeys(prev => {
      const next = new Set(prev);
      if (next.has(virtualKey)) {
        next.delete(virtualKey);
      } else {
        next.add(virtualKey);
      }
      return next;
    });
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  // Virtual Keyboard Layout
  const keyboardRows = [
    [
      { label: 'Esc', code: 'escape' },
      { label: 'F5', code: 'f5' },
      { label: 'F11', code: 'f11' },
      { label: 'Q', code: 'q' },
      { label: 'W', code: 'w' },
      { label: 'E', code: 'e' },
      { label: 'R', code: 'r' },
      { label: 'T', code: 't' },
      { label: 'Y', code: 'y' },
      { label: 'U', code: 'u' },
      { label: 'I', code: 'i' },
      { label: 'O', code: 'o' },
      { label: 'P', code: 'p' },
      { label: 'Apagar', code: 'backspace', class: 'keycap-backspace' }
    ],
    [
      { label: 'Tab', code: 'tab', class: 'keycap-tab' },
      { label: 'A', code: 'a' },
      { label: 'S', code: 's' },
      { label: 'D', code: 'd' },
      { label: 'F', code: 'f' },
      { label: 'G', code: 'g' },
      { label: 'H', code: 'h' },
      { label: 'J', code: 'j' },
      { label: 'K', code: 'k' },
      { label: 'L', code: 'l' },
      { label: 'Enter', code: 'enter', class: 'keycap-enter' }
    ],
    [
      { label: 'Shift', code: 'shift', class: 'keycap-shift' },
      { label: 'Z', code: 'z' },
      { label: 'X', code: 'x' },
      { label: 'C', code: 'c' },
      { label: 'V', code: 'v' },
      { label: 'B', code: 'b' },
      { label: 'N', code: 'n' },
      { label: 'M', code: 'm' },
      { label: 'Del', code: 'delete' },
      { label: 'Shift', code: 'shift', class: 'keycap-shift' }
    ],
    [
      { label: 'Ctrl', code: 'control', class: 'keycap-ctrl' },
      { label: 'Win', code: 'meta', class: 'keycap-win' },
      { label: 'Alt', code: 'alt', class: 'keycap-alt' },
      { label: 'Espaço', code: ' ', class: 'keycap-space' },
      { label: 'Alt', code: 'alt', class: 'keycap-alt' },
      { label: 'Ctrl', code: 'control', class: 'keycap-ctrl' }
    ]
  ];

  // Helper to format keys array to human readable representation
  const formatKeysList = (keysList: Set<string> | string[]) => {
    const list = Array.from(keysList);
    if (list.length === 0) return 'Nenhuma tecla pressionada';
    return list.map(k => {
      if (k === ' ') return 'Espaço';
      if (k === 'meta') return 'Win';
      if (k === 'control') return 'Ctrl';
      return k.charAt(0).toUpperCase() + k.slice(1);
    }).join(' + ');
  };

  return (
    <div className="shortcut-game-container animate-fade-in">
      
      {/* 1. CATEGORY SELECT STATE */}
      {gameState === 'SELECT' && (
        <div style={{ width: '100%' }}>
          <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
            <button onClick={onBack} className="btn btn-secondary">
              <ArrowLeft size={18} /> Voltar
            </button>
            <h2 className="heading-gradient text-3xl font-extrabold tracking-tight" style={{ margin: 0 }}>
              Desafio de Atalhos
            </h2>
            <div style={{ width: '74px' }}></div>
          </div>

          <div className="glass-card-static text-center mb-10">
            <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '50%', marginBottom: '1.5rem', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
              <Keyboard size={36} color="var(--accent-secondary)" />
            </div>
            <h1 className="text-2xl font-bold mb-3">Escolha o Programa para Treinar</h1>
            <p className="text-muted text-sm max-w-2xl mx-auto">
              Cada programa de computador possui seus próprios comandos e atalhos. Escolha o módulo correspondente às suas aulas para estudar a lista e fazer o teste de memória!
            </p>
          </div>

          <div className="activities-grid stagger-children">
            {shortcutCategories.map((category) => (
              <div 
                key={category.id} 
                className="activity-card" 
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  minHeight: '260px',
                  justifyContent: 'between'
                }}
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`icon-badge ${
                      category.id === 'word' ? 'icon-badge-blue' : category.id === 'powerpoint' ? 'icon-badge-amber' : category.id === 'chrome' ? 'icon-badge-green' : 'icon-badge-indigo'
                    }`}>
                      <Zap size={24} color={
                        category.id === 'word' ? 'var(--accent-primary)' : category.id === 'powerpoint' ? 'var(--accent-warning)' : category.id === 'chrome' ? 'var(--accent-success)' : '#6366f1'
                      } />
                    </div>
                    <h3 className="text-xl font-bold">{category.name}</h3>
                  </div>
                  <p className="text-muted text-sm mb-6">{category.description}</p>
                </div>

                <button 
                  onClick={() => handleSelectCategory(category.id)} 
                  className={`btn ${
                    category.id === 'word' ? 'btn-secondary' : category.id === 'powerpoint' ? 'btn-secondary' : category.id === 'chrome' ? 'btn-secondary' : 'btn-secondary'
                  }`}
                  style={{ 
                    marginTop: 'auto', 
                    width: '100%',
                    borderColor: 'rgba(255,255,255,0.15)',
                    background: 'rgba(30, 41, 59, 0.4)'
                  }}
                >
                  Estudar e Treinar
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. PREPARATORY STUDY STATE */}
      {gameState === 'PREPARE' && activeCategory && (
        <div style={{ width: '100%' }}>
          <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
            <button onClick={() => setGameState('SELECT')} className="btn btn-secondary">
              <ArrowLeft size={18} /> Voltar
            </button>
            <h2 className="heading-gradient text-3xl font-extrabold tracking-tight" style={{ margin: 0 }}>
              Preparação: {activeCategory.name}
            </h2>
            <div style={{ width: '74px' }}></div>
          </div>

          {/* Practice Instructions Panel */}
          <div className="glass-card-static mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--accent-hover)' }}>
              <Play size={20} /> Instruções Importantes de Treinamento
            </h3>
            <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem' }}>
              <li>
                <strong>Passo 1:</strong> Abra o programa <strong>{activeCategory.name}</strong> real no seu computador físico.
              </li>
              <li>
                <strong>Passo 2:</strong> Teste e execute fisicamente cada um dos comandos mostrados na lista abaixo dentro do programa aberto para ver como funcionam.
              </li>
              <li>
                <strong>Passo 3:</strong> Depois de memorizar, clique no botão <strong>Iniciar Desafio</strong> no final da página. As respostas serão ocultadas e você terá que pressioná-las de cabeça!
              </li>
            </ul>
          </div>

          {/* Shortcuts Table Display */}
          <div className="glass-card-static mb-8" style={{ padding: '1.5rem 0', overflow: 'hidden' }}>
            <h4 className="text-lg font-bold mb-4 px-6">Lista de Atalhos para Memorizar</h4>
            
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '400px' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--border-color)', color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                    <th style={{ padding: '0.75rem 1.5rem' }}>Ação / Função</th>
                    <th style={{ padding: '0.75rem 1.5rem' }}>Teclas do Atalho</th>
                    <th style={{ padding: '0.75rem 1.5rem' }}>Dica de Estudo</th>
                  </tr>
                </thead>
                <tbody>
                  {activeCategory.questions.map((q) => (
                    <tr key={q.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)', fontSize: '0.9rem' }}>
                      <td style={{ padding: '1rem 1.5rem', fontWeight: 600, color: 'var(--text-primary)' }}>{q.question}</td>
                      <td style={{ padding: '1rem 1.5rem' }}>
                        <span style={{ 
                          background: 'rgba(255,255,255,0.05)', 
                          border: '1px solid rgba(255,255,255,0.1)', 
                          padding: '0.25rem 0.6rem', 
                          borderRadius: '4px',
                          fontFamily: 'monospace',
                          fontWeight: 'bold',
                          color: 'var(--accent-hover)',
                          whiteSpace: 'nowrap',
                          display: 'inline-block'
                        }}>
                          {q.display}
                        </span>
                      </td>
                      <td style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>{q.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button onClick={() => setGameState('SELECT')} className="btn btn-secondary" style={{ padding: '1rem 2rem' }}>
              Cancelar
            </button>
            <button onClick={handleStartChallenge} className="btn btn-success" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
              <Zap size={18} /> Iniciar Desafio de Memória
            </button>
          </div>
        </div>
      )}

      {/* 3. PLAYING STATE (HIDDEN ANSWER CONTEXT) */}
      {gameState === 'PLAYING' && activeCategory && currentQuestion && (
        <div style={{ width: '100%' }}>
          {/* Header Progress Panel */}
          <div className="glass-card-static mb-6" style={{ padding: '1.25rem 2rem' }}>
            <div className="flex justify-between items-center flex-wrap gap-4">
              <button 
                onClick={() => setGameState('PREPARE')} 
                className="btn btn-secondary"
                style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}
              >
                <ArrowLeft size={16} /> Ver Atalhos de Novo
              </button>
              
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Progresso</p>
                  <p className="font-bold text-lg">{currentQuestionIndex + 1} / {activeCategory.questions.length}</p>
                </div>
                <div style={{ width: '1px', height: '30px', backgroundColor: 'var(--border-color)' }}></div>
                <div className="text-center">
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tempo</p>
                  <p className="font-bold text-lg monospace">{formatTime(elapsedTime)}</p>
                </div>
                <div style={{ width: '1px', height: '30px', backgroundColor: 'var(--border-color)' }}></div>
                <div className="text-center">
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Acertos</p>
                  <p className="font-bold text-lg text-success">{correctCount}</p>
                </div>
                <div style={{ width: '1px', height: '30px', backgroundColor: 'var(--border-color)' }}></div>
                <div className="text-center">
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tentativas</p>
                  <div className="flex justify-center gap-0.5 mt-1">
                    {[1, 2, 3].map(h => (
                      <Heart 
                        key={h} 
                        size={15} 
                        fill={h <= attemptsLeft ? 'var(--accent-error)' : 'transparent'} 
                        color={h <= attemptsLeft ? 'var(--accent-error)' : 'var(--text-muted)'} 
                        style={{ transition: 'all 200ms ease' }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div style={{ 
              width: '100%', 
              height: '4px', 
              backgroundColor: 'rgba(255,255,255,0.05)', 
              borderRadius: '2px', 
              marginTop: '1.25rem',
              overflow: 'hidden'
            }}>
              <div style={{ 
                width: `${((currentQuestionIndex) / activeCategory.questions.length) * 100}%`, 
                height: '100%', 
                backgroundColor: 'var(--accent-primary)',
                transition: 'width 300ms ease'
              }}></div>
            </div>
          </div>

          {/* Question Display Card (Hidden Answer) */}
          <div className="glass-card-static shortcut-card text-center mb-6">
            <h3 className="shortcut-question-text" style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
              {currentQuestion.question}
            </h3>
            
            <div className="shortcut-target-box" style={{ padding: '1.5rem' }}>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 500 }}>
                {feedback === 'SUCCESS' 
                  ? 'ACERTOU!' 
                  : feedback === 'OUT_OF_ATTEMPTS' 
                    ? 'TENTATIVAS EXCEDIDAS!' 
                    : feedback === 'ERROR' 
                      ? 'TECLA INCORRETA!' 
                      : 'INSIRA O ATALHO DE MEMÓRIA:'}
              </p>
              
              {feedback === 'OUT_OF_ATTEMPTS' ? (
                <div style={{ padding: '0.75rem', color: 'var(--accent-error)', fontWeight: 'bold', fontSize: '1.1rem' }}>
                  A resposta correta era: <span style={{ background: 'rgba(239, 68, 68, 0.15)', padding: '0.3rem 0.6rem', borderRadius: '4px', border: '1px solid rgba(239, 68, 68, 0.25)', fontFamily: 'monospace', color: 'var(--accent-error)' }}>{currentQuestion.display}</span>
                </div>
              ) : (
                <div className="shortcut-key-display-container">
                  {currentQuestion.keys.map((_, idx) => {
                    let stateClass = '';
                    if (feedback === 'SUCCESS') stateClass = 'success';
                    else if (feedback === 'ERROR') stateClass = 'error';
                    
                    // Highlight bubble if the student has pressed a key for this index position
                    const pressedList = Array.from(pressedKeys);
                    const isFilled = idx < pressedList.length;
                    if (isFilled && feedback === 'NONE') stateClass = 'pressed';

                    const displayChar = isFilled 
                      ? (pressedList[idx] === ' ' ? 'Espaço' : pressedList[idx] === 'meta' ? 'Win' : pressedList[idx] === 'control' ? 'Ctrl' : pressedList[idx].charAt(0).toUpperCase() + pressedList[idx].slice(1)) 
                      : '?';

                    return (
                      <div key={idx} className={`shortcut-key-bubble ${stateClass}`} style={{ minWidth: '70px' }}>
                        {displayChar}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Live pressed keys helper */}
              <div style={{ marginTop: '1.25rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <span>Você está segurando: </span>
                <strong style={{ 
                  color: pressedKeys.size > 0 ? 'var(--accent-hover)' : 'var(--text-muted)',
                  fontFamily: 'monospace',
                  fontSize: '0.95rem'
                }}>
                  {formatKeysList(pressedKeys)}
                </strong>
              </div>
            </div>
            
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
              💡 Se o navegador bloquear o atalho físico, clique diretamente nas teclas correspondentes do teclado virtual abaixo para responder!
            </p>
          </div>

          {/* Virtual Keyboard */}
          <div className="virtual-keyboard">
            {keyboardRows.map((row, rowIdx) => (
              <div key={rowIdx} className="keyboard-row">
                {row.map((key, keyIdx) => {
                  const isPressed = pressedKeys.has(key.code);
                  let stateClass = '';
                  if (isPressed) {
                    if (feedback === 'SUCCESS') stateClass = 'success-key';
                    else if (feedback === 'ERROR') stateClass = 'error-key';
                    else stateClass = 'active';
                  }

                  return (
                    <div
                      key={keyIdx}
                      onClick={() => handleVirtualKeyClick(key.code)}
                      className={`keycap ${key.class || ''} ${stateClass}`}
                    >
                      {key.label}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. SUMMARY / TROPHY STATE */}
      {gameState === 'SUMMARY' && activeCategory && (
        <div style={{ width: '100%', maxWidth: '600px' }}>
          <div className="glass-card-static text-center mb-8">
            <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '50%', marginBottom: '1.5rem', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
              <Trophy size={48} color="var(--accent-warning)" />
            </div>
            <h2 className="heading-gradient text-3xl font-extrabold mb-2 tracking-tight">Desafio Concluído!</h2>
            <p className="text-lg text-muted mb-8">Programa: {activeCategory.name}</p>

            <div className="flex justify-center gap-6 mb-8 flex-wrap">
              <div className="stat-card" style={{ flex: '1 1 120px' }}>
                <p className="stat-label">Precisão</p>
                <p className="stat-value text-success" style={{ fontSize: '1.75rem' }}>
                  {((correctCount / (correctCount + incorrectCount || 1)) * 100).toFixed(0)}%
                </p>
              </div>
              <div className="stat-card" style={{ flex: '1 1 120px' }}>
                <p className="stat-label">Tempo Gasto</p>
                <p className="stat-value text-success" style={{ fontSize: '1.75rem' }}>
                  {formatTime(elapsedTime)}
                </p>
              </div>
              <div className="stat-card" style={{ flex: '1 1 120px' }}>
                <p className="stat-label">Erros</p>
                <p className="stat-value text-error" style={{ fontSize: '1.75rem' }}>
                  {incorrectCount}
                </p>
              </div>
            </div>

            <p className="text-muted text-sm mb-8">
              Treinar atalhos frequentemente fixa a memória muscular! Repita o teste para baixar seu tempo e zerar os erros de teclado.
            </p>

            <div className="flex gap-4 justify-center flex-wrap">
              <button onClick={handleStartChallenge} className="btn btn-primary" style={{ padding: '0.75rem 1.5rem' }}>
                <RefreshCw size={18} /> Iniciar de Novo
              </button>
              <button onClick={() => setGameState('SELECT')} className="btn btn-secondary" style={{ padding: '0.75rem 1.5rem' }}>
                <ArrowLeft size={18} /> Mudar Programa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
