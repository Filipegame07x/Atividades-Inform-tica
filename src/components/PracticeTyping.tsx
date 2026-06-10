import React, { useState, useEffect, useRef } from 'react';
import { Keyboard, HelpCircle, RotateCcw, ArrowLeft, CheckCircle2, Award, Clock, AlertTriangle, AlertOctagon } from 'lucide-react';
import type { TypingText } from '../data/typingTexts';

interface PracticeTypingProps {
  typingText: TypingText;
  onBack: () => void;
}

export function PracticeTyping({ typingText, onBack }: PracticeTypingProps) {
  const [isStarted, setIsStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [errorsCount, setErrorsCount] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [helpMessage, setHelpMessage] = useState('');
  const [isFinished, setIsFinished] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [strictMode, setStrictMode] = useState(true);

  const getFirstErrorChar = () => {
    for (let i = 0; i < inputValue.length; i++) {
      if (inputValue[i] !== typingText.text[i]) {
        return typingText.text[i];
      }
    }
    return '';
  };
  
  // Timer States
  const [startTime, setStartTime] = useState<number | null>(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerRef = useRef<any>(null);
  
  // Ref for auto-focusing the hidden input
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const typingContainerRef = useRef<HTMLDivElement>(null);

  // Focus the input when clicking on the typing display container
  const handleContainerClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Keyboard helper dictionary
  const getHelpMessage = (char: string): string => {
    const charLower = char.toLowerCase();
    
    if (char === ' ') {
      return "Pressione a barra de espaço (a tecla longa no centro inferior do teclado).";
    }
    
    // Accents & special vowels
    if (char === 'ã') return "Para digitar ã, pressione a tecla ~ (Til) e depois a letra a.";
    if (char === 'Ã') return "Para digitar Ã, pressione a tecla ~ (Til), segure Shift e pressione a letra a.";
    if (char === 'á') return "Para digitar á, pressione a tecla ´ (Agudo) e depois a letra a.";
    if (char === 'Á') return "Para digitar Á, pressione a tecla ´ (Agudo), segure Shift e pressione a letra a.";
    if (char === 'à') return "Para digitar à (crase), segure Shift e pressione a tecla ´ (Agudo), depois pressione a letra a.";
    if (char === 'À') return "Para digitar À (crase), segure Shift e pressione a tecla ´ (Agudo), segure Shift e pressione a letra a.";
    if (char === 'â') return "Para digitar â, segure Shift e pressione a tecla ~ (Circunflexo), depois pressione a letra a.";
    if (char === 'Â') return "Para digitar Â, segure Shift e pressione a tecla ~ (Circunflexo), segure Shift e pressione a letra a.";
    
    if (char === 'é') return "Para digitar é, pressione a tecla ´ (Agudo) e depois a letra e.";
    if (char === 'É') return "Para digitar É, pressione a tecla ´ (Agudo), segure Shift e pressione a letra e.";
    if (char === 'ê') return "Para digitar ê, segure Shift e pressione a tecla ~ (Circunflexo), depois pressione a letra e.";
    if (char === 'Ê') return "Para digitar Ê, segure Shift e pressione a tecla ~ (Circunflexo), segure Shift e pressione a letra e.";
    
    if (char === 'í') return "Para digitar í, pressione a tecla ´ (Agudo) e depois a letra i.";
    if (char === 'Í') return "Para digitar Í, pressione a tecla ´ (Agudo), segure Shift e pressione a letra i.";
    
    if (char === 'ó') return "Para digitar ó, pressione a tecla ´ (Agudo) e depois a letra o.";
    if (char === 'Ó') return "Para digitar Ó, pressione a tecla ´ (Agudo), segure Shift e pressione a letra o.";
    if (char === 'ô') return "Para digitar ô, segure Shift e pressione a tecla ~ (Circunflexo), depois pressione a letra o.";
    if (char === 'Ô') return "Para digitar Ô, segure Shift e pressione a tecla ~ (Circunflexo), segure Shift e pressione a letra o.";
    if (char === 'õ') return "Para digitar õ, pressione a tecla ~ (Til) e depois a letra o.";
    if (char === 'Õ') return "Para digitar Õ, pressione a tecla ~ (Til), segure Shift e pressione a letra o.";
    
    if (char === 'ú') return "Para digitar ú, pressione a tecla ´ (Agudo) e depois a letra u.";
    if (char === 'Ú') return "Para digitar Ú, pressione a tecla ´ (Agudo), segure Shift e pressione a letra u.";
    
    if (char === 'ç') return "A letra ç fica próxima da tecla Enter na maioria dos teclados ABNT2.";
    if (char === 'Ç') return "Para digitar Ç maiúsculo, ative o Caps Lock ou segure Shift e pressione a tecla ç.";
    
    // Symbols
    if (char === '%') return "Para digitar %, segure a tecla Shift e pressione o número 5.";
    if (char === '#') return "Para digitar #, segure a tecla Shift e pressione o número 3.";
    if (char === '$') return "Para digitar $, segure a tecla Shift e pressione o número 4.";
    if (char === '&') return "Para digitar &, segure a tecla Shift e pressione o número 6.";
    if (char === '*') return "Para digitar *, segure a tecla Shift e pressione o número 8.";
    if (char === '@') return "Para digitar @, use Shift + 2 (ou AltGr + Q / Ctrl + Alt + Q, dependendo do teclado).";
    if (char === '!') return "Para digitar !, segure a tecla Shift e pressione o número 1.";
    if (char === '?') return "Para digitar ?, segure a tecla Shift e pressione a tecla ? (geralmente ao lado do Shift direito ou AltGr + W).";
    if (char === '/') return "Para digitar /, pressione a tecla / (ao lado do Shift direito ou AltGr + Q).";
    if (char === '\\') return "Para digitar \\ (barra invertida), pressione a tecla ao lado do Z ou do Shift esquerdo.";
    if (char === '+') return "Para digitar +, pressione a tecla + (geralmente ao lado da tecla Enter) ou Shift + =.";
    if (char === '=') return "Para digitar =, pressione a tecla = (geralmente à esquerda de Backspace).";
    if (char === '-') return "Para digitar - (hífen), pressione a tecla - (à esquerda da tecla = ou no teclado numérico).";
    if (char === '_') return "Para digitar _ (underline), segure a tecla Shift e pressione a tecla -.";
    if (char === '^') return "Para digitar ^ (circunflexo isolado), pressione Shift + ~ e depois a barra de espaço.";
    if (char === '~') return "Para digitar ~ (til isolado), pressione a tecla ~ e depois a barra de espaço.";
    if (char === '´') return "Para digitar ´ (acento agudo isolado), pressione a tecla ´ e depois a barra de espaço.";
    if (char === '`') return "Para digitar ` (crase/acento grave isolado), pressione Shift + tecla ´ e depois a barra de espaço.";
    
    if (char === '(') return "Para digitar (, segure a tecla Shift e pressione o número 9.";
    if (char === ')') return "Para digitar ), segure a tecla Shift e pressione o número 0.";
    if (char === '[') return "Para digitar [, pressione a tecla [ (ao lado do Enter ou da letra P).";
    if (char === ']') return "Para digitar ], pressione a tecla ] (ao lado do Enter ou da letra P).";
    if (char === '"') return "Para digitar \" (aspas duplas), segure a tecla Shift e pressione a tecla das aspas (ao lado do número 1).";
    if (char === "'") return "Para digitar ' (aspas simples), pressione a tecla das aspas (ao lado do número 1).";
    if (char === '—') return "Para digitar — (travessão), segure Alt e digite 0151 no teclado numérico lateral.";
    
    // Uppercase letters general tip
    if (char !== charLower) {
      return `A letra "${char}" está em maiúscula! Segure a tecla Shift e pressione a letra ${charLower}, ou ative Caps Lock.`;
    }
    
    // Numbers
    if (char >= '0' && char <= '9') {
      return `Para digitar o número ${char}, use a fileira numérica superior ou o teclado numérico à direita.`;
    }
    
    // Punctuation
    if (char === ',') return "Para digitar , (vírgula), pressione a tecla , (ao lado da tecla M).";
    if (char === '.') return "Para digitar . (ponto), pressione a tecla . (ao lado da tecla da vírgula).";
    if (char === ';') return "Para digitar ; (ponto e vírgula), pressione a tecla ; (geralmente ao lado do Shift direito ou AltGr + vírgula).";
    if (char === ':') return "Para digitar : (dois-pontos), segure Shift e pressione a tecla do ponto ou da vírgula.";
    
    return `Digite a tecla correspondente ao caractere "${char}".`;
  };

  // Timer Effect
  useEffect(() => {
    if (startTime !== null && !isFinished) {
      timerRef.current = setInterval(() => {
        setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTime, isFinished]);

  // Focus overlay input when activity starts
  useEffect(() => {
    if (isStarted && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isStarted]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    const targetText = typingText.text;
    
    // If we've already finished, ignore input
    if (isFinished) return;

    // Start timer on first keystroke
    if (startTime === null && value.length > 0) {
      setStartTime(Date.now());
    }

    if (strictMode) {
      // Prevent backspace from erasing correctly typed characters
      if (value.length < inputValue.length) {
        e.target.value = inputValue;
        return;
      }

      // Check if the input is a correct prefix of the target text
      if (value === targetText.slice(0, value.length)) {
        // Correct!
        setInputValue(value);
        setCurrentIndex(value.length);
        setHasError(false);
        setHelpMessage('');

        // Check if finished
        if (value.length === targetText.length) {
          setIsFinished(true);
          if (timerRef.current) clearInterval(timerRef.current);
        }
      } else {
        // Incorrect stroke!
        setErrorsCount(prev => prev + 1);
        setHasError(true);

        // Display the tutorial tip for the expected character
        const expectedChar = targetText[currentIndex];
        setHelpMessage(getHelpMessage(expectedChar));

        // Do NOT advance typing. Keep the input text locked at the correct prefix.
        // Reset the textarea value to the correct prefix immediately.
        e.target.value = targetText.slice(0, currentIndex);
      }
    } else {
      // Free Mode: allow typing anything
      if (value.length <= targetText.length) {
        // Only count error if typing a new character (length increased)
        if (value.length > inputValue.length) {
          const lastTypedChar = value[value.length - 1];
          const expectedChar = targetText[value.length - 1];
          if (lastTypedChar !== expectedChar) {
            setErrorsCount(prev => prev + 1);
          }
        }

        setInputValue(value);
        setCurrentIndex(value.length);

        // Check if there is any error in the current input
        let firstErrorIdx = -1;
        for (let i = 0; i < value.length; i++) {
          if (value[i] !== targetText[i]) {
            firstErrorIdx = i;
            break;
          }
        }

        if (firstErrorIdx !== -1) {
          setHasError(true);
          const expectedChar = targetText[firstErrorIdx];
          setHelpMessage(getHelpMessage(expectedChar));
        } else {
          setHasError(false);
          setHelpMessage('');
        }

        // Check if finished
        if (value.length === targetText.length) {
          setIsFinished(true);
          if (timerRef.current) clearInterval(timerRef.current);
        }
      }
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setErrorsCount(0);
    setHasError(false);
    setHelpMessage('');
    setIsFinished(false);
    setInputValue('');
    setStartTime(null);
    setElapsedTime(0);
    if (timerRef.current) clearInterval(timerRef.current);
    setTimeout(() => {
      if (inputRef.current) inputRef.current.focus();
    }, 100);
  };

  const getAccuracy = () => {
    const totalStrokes = typingText.text.length + errorsCount;
    if (totalStrokes === 0) return 100;
    return Math.max(0, Math.min(100, Math.round((typingText.text.length / totalStrokes) * 100)));
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Render instructions panel
  if (!isStarted) {
    return (
      <div className="animate-fade-in mt-10">
        <button onClick={onBack} className="btn btn-secondary mb-8">
          <ArrowLeft size={18} /> Voltar ao Menu
        </button>

        <div className="glass-card-static" style={{ maxWidth: '750px', margin: '0 auto' }}>
          <h2 className="heading-gradient text-3xl font-extrabold text-center mb-6 tracking-tight">
            Instruções da Atividade
          </h2>
          
          <div className="instructions-box mb-8">
            <p className="text-lg font-semibold text-accent mb-4 text-center">
              Como funciona a prática de digitação?
            </p>
            <p className="text-secondary text-base mb-6 text-center leading-relaxed">
              “Escolha um tema, leia o texto com atenção e digite exatamente como aparece. Preste atenção aos acentos, letras maiúsculas, pontuação e símbolos. Cada letra correta ficará branca. Se você errar, o sistema irá mostrar uma dica para ajudar.”
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="instructions-benefit-item">
                <span className="bullet-glow">•</span>
                <span><strong>Melhorar a Digitação:</strong> pratique a agilidade e a precisão das mãos.</span>
              </div>
              <div className="instructions-benefit-item">
                <span className="bullet-glow">•</span>
                <span><strong>Atenção aos Detalhes:</strong> identifique maiúsculas e pontos específicos.</span>
              </div>
              <div className="instructions-benefit-item">
                <span className="bullet-glow">•</span>
                <span><strong>Uso de Acentos:</strong> aprenda as combinações corretas do teclado (ã, á, à, ê).</span>
              </div>
              <div className="instructions-benefit-item">
                <span className="bullet-glow">•</span>
                <span><strong>Uso de Símbolos:</strong> domine teclas especiais como %, @, $, &, *, / e parênteses.</span>
              </div>
              <div className="instructions-benefit-item">
                <span className="bullet-glow">•</span>
                <span><strong>Escrita Correta:</strong> treine a grafia correta no computador.</span>
              </div>
              <div className="instructions-benefit-item">
                <span className="bullet-glow">•</span>
                <span><strong>Familiaridade com o Word:</strong> ganhe facilidade para escrever seus trabalhos.</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button 
              onClick={() => setIsStarted(true)} 
              className="btn btn-primary"
              style={{ padding: '1.25rem 3rem', fontSize: '1.125rem' }}
            >
              <Keyboard size={22} /> Começar Atividade
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Split text for custom character styling
  const textChars = typingText.text.split('');
  const progressPercent = Math.round((currentIndex / typingText.text.length) * 100);

  return (
    <div className="animate-fade-in mt-10">
      {/* Header bar */}
      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <div className="flex gap-3 flex-wrap">
          <button onClick={onBack} className="btn btn-secondary">
            <ArrowLeft size={18} /> Escolher Outro Texto
          </button>
          <button onClick={handleReset} className="btn btn-secondary">
            <RotateCcw size={18} /> Reiniciar Atividade
          </button>
        </div>

        {/* Toggle Mode Option */}
        <div className="flex items-center gap-3 glass-card-static" style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius-md)' }}>
          <label className="flex items-center gap-2 cursor-pointer" style={{ margin: 0, display: 'flex', alignItems: 'center', userSelect: 'none' }}>
            <input 
              type="checkbox" 
              checked={strictMode} 
              onChange={(e) => {
                setStrictMode(e.target.checked);
                // Reset clean state
                setCurrentIndex(0);
                setErrorsCount(0);
                setHasError(false);
                setHelpMessage('');
                setIsFinished(false);
                setInputValue('');
                setStartTime(null);
                setElapsedTime(0);
                if (timerRef.current) clearInterval(timerRef.current);
                setTimeout(() => {
                  if (inputRef.current) inputRef.current.focus();
                }, 100);
              }}
              style={{ width: '16px', height: '16px', cursor: 'pointer', accentColor: 'var(--accent-primary)' }}
            />
            <span className="text-sm font-semibold text-secondary">
              Bloquear Erros ao Digitar (Modo Clássico)
            </span>
          </label>
        </div>
      </div>

      <div className="typing-layout-grid">
        {/* Main Typing Area Column */}
        <div className="typing-main-column">
          {/* Dashboard Stats */}
          <div className="glass-card-static mb-6" style={{ padding: '1.25rem' }}>
            <div className="typing-stats-row">
              <div>
                <span className="text-muted text-xs block mb-1">TEMA</span>
                <span className="font-bold text-lg flex items-center gap-1">
                  <Award size={18} color="var(--accent-primary)" /> {typingText.theme}
                </span>
              </div>
              <div>
                <span className="text-muted text-xs block mb-1">NÍVEL</span>
                <span className="font-bold text-lg">
                  {typingText.level === 1 && <span className="text-success">Fácil</span>}
                  {typingText.level === 2 && <span className="text-warning">Médio</span>}
                  {typingText.level === 3 && <span className="text-error">Difícil</span>}
                </span>
              </div>
              <div>
                <span className="text-muted text-xs block mb-1">ERROS</span>
                <span className={`font-bold text-lg flex items-center gap-1 ${errorsCount > 0 ? 'text-error animate-pulse' : 'text-secondary'}`}>
                  <AlertTriangle size={18} /> {errorsCount}
                </span>
              </div>
              <div>
                <span className="text-muted text-xs block mb-1">TEMPO</span>
                <span className="font-bold text-lg flex items-center gap-1">
                  <Clock size={18} color="var(--accent-primary)" /> {formatTime(elapsedTime)}
                </span>
              </div>
              <div>
                <span className="text-muted text-xs block mb-1">PROGRESSO</span>
                <span className="font-bold text-lg text-accent">{progressPercent}%</span>
              </div>
            </div>

            {/* Gradient Progress Bar */}
            <div className="progress-bar-container mt-4">
              <div 
                className="progress-bar-fill" 
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Typing Terminal Display */}
          <div 
            className="typing-terminal-card mb-6" 
            onClick={handleContainerClick}
            ref={typingContainerRef}
          >
            <div className="typing-terminal-header">
              <span className="terminal-dot red-dot"></span>
              <span className="terminal-dot yellow-dot"></span>
              <span className="terminal-dot green-dot"></span>
              <span className="terminal-title">Exercício de Digitação - Texto #{typingText.id}</span>
            </div>
            
            <div className="typing-text-display">
              {textChars.map((char, index) => {
                let charClass = "char-pending";
                
                if (index < inputValue.length) {
                  if (strictMode || inputValue[index] === typingText.text[index]) {
                    charClass = "char-correct";
                  } else {
                    charClass = "char-incorrect";
                  }
                } else if (index === inputValue.length) {
                  charClass = (strictMode && hasError) ? "char-incorrect" : "char-current";
                }
                
                return (
                  <span key={index} className={charClass}>
                    {char === ' ' ? ' ' : char}
                  </span>
                );
              })}
            </div>

            {/* Hidden overlay textarea to capture keystrokes natively */}
            <textarea
              ref={inputRef}
              className="typing-hidden-input"
              value={inputValue}
              onChange={handleInputChange}
              onPaste={(e) => e.preventDefault()} // Disable paste to force typing
              disabled={isFinished}
              placeholder="Clique aqui e comece a digitar o texto acima..."
              autoComplete="off"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck="false"
            />
            
            <div className="text-center text-xs text-muted mt-4">
              {isFinished ? (
                <span className="text-success font-semibold flex justify-center items-center gap-1">
                  <CheckCircle2 size={14} /> Atividade concluída com sucesso!
                </span>
              ) : (
                <span>* Dica: Mantenha o cursor focado dentro deste painel para continuar digitando.</span>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar Help / Tips Column */}
        <div className="typing-sidebar-column">
          <div 
            className={`glass-card-static typing-help-card ${hasError ? 'help-card-active' : ''}`}
            style={{ 
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'between',
              minHeight: '260px',
              transition: 'all 0.3s ease'
            }}
          >
            <div>
              <div className="flex items-center gap-2 mb-4 border-bottom pb-3" style={{ borderColor: 'var(--border-color)' }}>
                {hasError ? (
                  <AlertOctagon size={24} className="text-error animate-bounce" />
                ) : (
                  <HelpCircle size={24} color="var(--accent-primary)" />
                )}
                <h3 className="font-bold text-lg tracking-tight">
                  {hasError ? "Atenção: Caractere Incorreto" : "Central de Ajuda"}
                </h3>
              </div>

              {hasError ? (
                <div className="help-message-content animate-fade-in">
                  <p className="text-base font-medium text-secondary mb-3">
                    Você digitou uma tecla incorreta para o caractere{' '}
                    <strong className="text-error font-bold text-lg bg-red-opacity px-2 py-0.5 rounded">
                      {(strictMode ? typingText.text[currentIndex] : getFirstErrorChar()) === ' ' ? 'Espaço' : (strictMode ? typingText.text[currentIndex] : getFirstErrorChar())}
                    </strong>.
                  </p>
                  <div className="tutorial-tip-box mb-4">
                    {helpMessage}
                  </div>
                  <p className="text-xs text-muted">
                    {strictMode 
                      ? "Corrija digitando a tecla indicada acima para continuar avançando no texto."
                      : "Você pode apagar (Backspace) e corrigir o erro para melhorar sua precisão!"}
                  </p>
                </div>
              ) : (
                <div className="text-muted text-sm leading-relaxed">
                  <p className="mb-4">
                    O painel de ajuda exibirá dicas automáticas de digitação sempre que você cometer um erro!
                  </p>
                  <p>
                    Pratique a acentuação correta e o uso de símbolos comuns do Microsoft Word.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 pt-4 border-top" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
              <div className="flex items-center gap-2 text-xs text-muted">
                <Keyboard size={16} />
                <span>Teclado Padrão ABNT2 (Brasil)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Finished Modal Overlay */}
      {isFinished && (
        <div className="modal-overlay animate-fade-in">
          <div className="modal-content animate-scale-in glass-card">
            <div className="text-center mb-6">
              <div className="success-icon-container mb-4">
                <CheckCircle2 size={64} className="text-success" />
              </div>
              <h2 className="heading-gradient text-3xl font-extrabold tracking-tight mb-2">
                Excelente Trabalho!
              </h2>
              <p className="text-muted text-base">
                Você digitou todo o texto corretamente e completou o exercício!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="stat-card" style={{ minWidth: 'auto', padding: '1rem' }}>
                <p className="stat-label">Tempo Total</p>
                <p className="stat-value text-accent" style={{ fontSize: '1.75rem' }}>
                  {formatTime(elapsedTime)}
                </p>
              </div>
              <div className="stat-card" style={{ minWidth: 'auto', padding: '1rem' }}>
                <p className="stat-label">Precisão</p>
                <p className="stat-value text-success" style={{ fontSize: '1.75rem' }}>
                  {getAccuracy()}%
                </p>
              </div>
              <div className="stat-card" style={{ minWidth: 'auto', padding: '1rem' }}>
                <p className="stat-label">Erros Cometidos</p>
                <p className={`stat-value ${errorsCount > 0 ? 'text-error' : 'text-success'}`} style={{ fontSize: '1.75rem' }}>
                  {errorsCount}
                </p>
              </div>
              <div className="stat-card" style={{ minWidth: 'auto', padding: '1rem' }}>
                <p className="stat-label">Tema Praticado</p>
                <p className="stat-value text-secondary" style={{ fontSize: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                  {typingText.theme}
                </p>
              </div>
            </div>

            <div className="instructions-box text-center mb-8" style={{ padding: '1rem' }}>
              <p className="text-sm text-secondary">
                💡 <strong>Dica do Professor:</strong> Praticar digitação regularmente ajuda a melhorar sua coordenação motora e velocidade no Microsoft Word! Escolha um novo tema com símbolos para aumentar o desafio.
              </p>
            </div>

            <div className="flex gap-4 justify-center">
              <button onClick={handleReset} className="btn btn-secondary flex-grow">
                <RotateCcw size={18} /> Praticar Novamente
              </button>
              <button onClick={onBack} className="btn btn-primary flex-grow">
                Escolher Outro Texto
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
