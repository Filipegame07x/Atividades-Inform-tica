import { useState, useEffect, useRef } from 'react';
import { speedQuizQuestions } from '../data/speedQuiz';
import type { SpeedQuizQuestion } from '../data/speedQuiz';
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Trophy, 
  ArrowLeft, 
  RefreshCw, 
  Zap, 
  Flame, 
  HelpCircle, 
  Play 
} from 'lucide-react';

interface SpeedQuizProps {
  onBack: () => void;
}

type QuizMode = 'SELECT' | 'PLAYING' | 'SUMMARY';
type GameType = 'TIME_ATTACK' | 'PRACTICE'; // 60s vs 15 Questions

export function SpeedQuiz({ onBack }: SpeedQuizProps) {
  const [mode, setMode] = useState<QuizMode>('SELECT');
  const [gameType, setGameType] = useState<GameType>('TIME_ATTACK');

  // Game state
  const [shuffledQuestions, setShuffledQuestions] = useState<SpeedQuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  
  // Feedback & timing
  const [feedback, setFeedback] = useState<'NONE' | 'CORRECT' | 'WRONG'>('NONE');
  const [lastExplanation, setLastExplanation] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState(60); // for 60s Time Attack
  const timerRef = useRef<any>(null);

  const currentQuestion: SpeedQuizQuestion | undefined = shuffledQuestions[currentIndex];

  // Start game timer
  useEffect(() => {
    if (mode === 'PLAYING' && gameType === 'TIME_ATTACK') {
      setTimeLeft(60);
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setMode('SUMMARY');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [mode, gameType]);

  const handleStartGame = (selectedType: GameType) => {
    // Shuffle array of questions
    const shuffled = [...speedQuizQuestions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
    setCurrentIndex(0);
    setScore(0);
    setCorrectCount(0);
    setIncorrectCount(0);
    setCombo(0);
    setMaxCombo(0);
    setFeedback('NONE');
    setLastExplanation('');
    setGameType(selectedType);
    setMode('PLAYING');
  };

  const handleAnswer = (userAnswer: boolean) => {
    if (feedback !== 'NONE' || !currentQuestion) return;

    const isRight = userAnswer === currentQuestion.isTrue;
    setLastExplanation(currentQuestion.explanation);

    if (isRight) {
      setFeedback('CORRECT');
      setCorrectCount(prev => prev + 1);
      const newCombo = combo + 1;
      setCombo(newCombo);
      if (newCombo > maxCombo) setMaxCombo(newCombo);

      // Score multiplier based on combo
      const points = 100 * Math.min(newCombo, 4);
      setScore(prev => prev + points);

      setTimeout(() => {
        advanceQuestion();
      }, 1100);
    } else {
      setFeedback('WRONG');
      setIncorrectCount(prev => prev + 1);
      setCombo(0);

      setTimeout(() => {
        advanceQuestion();
      }, 1600);
    }
  };

  const advanceQuestion = () => {
    setFeedback('NONE');
    setLastExplanation('');

    if (gameType === 'PRACTICE' && currentIndex >= 14) {
      setMode('SUMMARY');
    } else if (currentIndex + 1 < shuffledQuestions.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Loop or finish
      setMode('SUMMARY');
    }
  };

  const getRankBadge = (totalCorrect: number) => {
    if (totalCorrect >= 15) return { title: '🏆 Mestre da Informática', color: '#f59e0b', desc: 'Incrível! Sua velocidade de raciocínio tech é impressionante.' };
    if (totalCorrect >= 10) return { title: '🚀 Especialista Tech', color: '#10b981', desc: 'Muito bom! Você possui um ótimo domínio dos conceitos digitais.' };
    if (totalCorrect >= 5) return { title: '💻 Aprendiz Dedicado', color: '#3b82f6', desc: 'Bom trabalho! Continue praticando para zerar o tempo.' };
    return { title: '🌱 Iniciante Tecnológico', color: '#8b5cf6', desc: 'Excelente começo! Repita a rodada para fixar os conceitos.' };
  };

  const rank = getRankBadge(correctCount);

  return (
    <div className="shortcut-game-container animate-fade-in" style={{ width: '100%', maxWidth: '850px', margin: '0 auto' }}>
      
      {/* 1. SELECT MODE */}
      {mode === 'SELECT' && (
        <div style={{ width: '100%' }}>
          <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
            <button onClick={onBack} className="btn btn-secondary">
              <ArrowLeft size={18} /> Voltar
            </button>
            <h2 className="heading-gradient text-3xl font-extrabold tracking-tight" style={{ margin: 0 }}>
              Mini Game: Speed Quiz (V ou F)
            </h2>
            <div style={{ width: '74px' }}></div>
          </div>

          <div className="glass-card-static text-center mb-10">
            <div style={{ display: 'inline-flex', padding: '1.25rem', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '50%', marginBottom: '1.5rem', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
              <Zap size={44} color="#f59e0b" />
            </div>
            <h1 className="text-2xl font-bold mb-3">Novo Estilo de Aprendizado: Verdadeiro ou Falso!</h1>
            <p className="text-muted text-sm max-w-2xl mx-auto">
              Teste seu raciocínio rápido em informática! Analise as afirmações na tela e decida se são <strong>VERDADEIRAS</strong> ou <strong>FALSAS</strong> o mais rápido que puder.
            </p>
          </div>

          <div className="activities-grid stagger-children" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            
            {/* Mode 1: 60 Seconds Time Attack */}
            <div 
              className="activity-card" 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                borderColor: 'rgba(245, 158, 11, 0.3)',
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(30, 41, 59, 0.4) 100%)'
              }}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-badge icon-badge-amber">
                    <Clock size={24} color="#f59e0b" />
                  </div>
                  <h3 className="text-xl font-bold">⏱️ Modo 60 Segundos</h3>
                </div>
                <p className="text-muted text-sm mb-6">
                  Responda ao máximo de afirmações antes do cronômetro zerar! Faça combos para multiplicar sua pontuação final.
                </p>
              </div>
              <button 
                onClick={() => handleStartGame('TIME_ATTACK')}
                className="btn btn-warning"
                style={{ width: '100%', padding: '0.85rem' }}
              >
                <Play size={18} /> Jogar 60 Segundos
              </button>
            </div>

            {/* Mode 2: 15 Questions Practice */}
            <div 
              className="activity-card" 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'space-between',
                borderColor: 'rgba(59, 130, 246, 0.3)',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(30, 41, 59, 0.4) 100%)'
              }}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="icon-badge icon-badge-blue">
                    <HelpCircle size={24} color="#3b82f6" />
                  </div>
                  <h3 className="text-xl font-bold">📚 Modo Treino (15 Qs)</h3>
                </div>
                <p className="text-muted text-sm mb-6">
                  Responda a 15 perguntas sem relógio de tempo. Ideal para estudar cada explicação com calma e fixar o conteúdo.
                </p>
              </div>
              <button 
                onClick={() => handleStartGame('PRACTICE')}
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.85rem' }}
              >
                <Play size={18} /> Iniciar Modo Treino
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 2. PLAYING STATE */}
      {mode === 'PLAYING' && currentQuestion && (
        <div style={{ width: '100%' }}>
          
          {/* Top Bar Stats */}
          <div className="glass-card-static mb-6" style={{ padding: '1rem 1.5rem' }}>
            <div className="flex justify-between items-center flex-wrap gap-4">
              <button onClick={() => setMode('SELECT')} className="btn btn-secondary" style={{ padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}>
                <ArrowLeft size={16} /> Sair
              </button>

              <div className="flex items-center gap-6">
                {gameType === 'TIME_ATTACK' ? (
                  <div className="flex items-center gap-2" style={{ color: timeLeft <= 10 ? '#ef4444' : '#f59e0b', fontWeight: 'bold', fontSize: '1.2rem' }}>
                    <Clock size={20} />
                    <span>{timeLeft}s</span>
                  </div>
                ) : (
                  <div className="text-center font-bold text-sm text-muted">
                    Questão {currentIndex + 1} de 15
                  </div>
                )}

                <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--border-color)' }}></div>

                {combo > 1 && (
                  <div className="flex items-center gap-1 font-extrabold animate-bounce" style={{ color: '#ef4444', fontSize: '1rem' }}>
                    <Flame size={18} /> Combo x{Math.min(combo, 4)}!
                  </div>
                )}

                <div className="text-center font-extrabold text-lg" style={{ color: 'var(--accent-hover)' }}>
                  {score} pts
                </div>
              </div>
            </div>
          </div>

          {/* Statement Card */}
          <div 
            className={`glass-card-static text-center mb-8 style-transition ${
              feedback === 'CORRECT' ? 'border-success' : feedback === 'WRONG' ? 'border-error' : ''
            }`}
            style={{
              padding: '2.5rem 2rem',
              minHeight: '220px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderColor: feedback === 'CORRECT' ? '#10b981' : feedback === 'WRONG' ? '#ef4444' : 'rgba(255,255,255,0.1)',
              background: feedback === 'CORRECT' 
                ? 'rgba(16, 185, 129, 0.08)' 
                : feedback === 'WRONG' 
                ? 'rgba(239, 68, 68, 0.08)' 
                : 'rgba(30, 41, 59, 0.5)',
              transition: 'all 0.3s ease'
            }}
          >
            <span style={{ textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.75rem', fontWeight: 'bold' }}>
              Afirmação #{currentIndex + 1} • {currentQuestion.category.toUpperCase()}
            </span>

            <h2 className="text-2xl font-bold mb-4" style={{ lineHeight: 1.4, color: 'var(--text-primary)' }}>
              "{currentQuestion.statement}"
            </h2>

            {/* Explanation / Result banner */}
            {feedback !== 'NONE' && (
              <div className="animate-fade-in mt-4" style={{ width: '100%' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '20px',
                  fontWeight: 'bold',
                  marginBottom: '0.75rem',
                  background: feedback === 'CORRECT' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                  color: feedback === 'CORRECT' ? '#10b981' : '#ef4444'
                }}>
                  {feedback === 'CORRECT' ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
                  <span>{feedback === 'CORRECT' ? 'CORRETO! +100 PTS' : 'INCORRETO!'}</span>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
                  💡 {lastExplanation}
                </p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-6 justify-center" style={{ width: '100%' }}>
            <button
              onClick={() => handleAnswer(true)}
              disabled={feedback !== 'NONE'}
              className="btn"
              style={{
                flex: 1,
                maxWidth: '300px',
                padding: '1.25rem 2rem',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                color: '#10b981',
                borderColor: '#10b981',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                boxShadow: '0 4px 15px rgba(16, 185, 129, 0.15)',
                opacity: feedback !== 'NONE' ? 0.6 : 1,
                cursor: feedback !== 'NONE' ? 'not-allowed' : 'pointer'
              }}
            >
              <CheckCircle2 size={28} /> VERDADEIRO
            </button>

            <button
              onClick={() => handleAnswer(false)}
              disabled={feedback !== 'NONE'}
              className="btn"
              style={{
                flex: 1,
                maxWidth: '300px',
                padding: '1.25rem 2rem',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                backgroundColor: 'rgba(239, 68, 68, 0.15)',
                color: '#ef4444',
                borderColor: '#ef4444',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                boxShadow: '0 4px 15px rgba(239, 68, 68, 0.15)',
                opacity: feedback !== 'NONE' ? 0.6 : 1,
                cursor: feedback !== 'NONE' ? 'not-allowed' : 'pointer'
              }}
            >
              <XCircle size={28} /> FALSO
            </button>
          </div>

        </div>
      )}

      {/* 3. SUMMARY STATE */}
      {mode === 'SUMMARY' && (
        <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
          <div className="glass-card-static text-center mb-8">
            <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '50%', marginBottom: '1.5rem', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
              <Trophy size={48} color={rank.color} />
            </div>
            <h2 className="heading-gradient text-3xl font-extrabold mb-2 tracking-tight">Rodada Concluída!</h2>
            <h3 className="text-xl font-bold mb-3" style={{ color: rank.color }}>{rank.title}</h3>
            <p className="text-muted text-sm mb-8">{rank.desc}</p>

            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <div className="stat-card" style={{ flex: '1 1 110px' }}>
                <p className="stat-label">Pontuação</p>
                <p className="stat-value text-success" style={{ fontSize: '1.75rem' }}>
                  {score}
                </p>
              </div>
              <div className="stat-card" style={{ flex: '1 1 110px' }}>
                <p className="stat-label">Acertos</p>
                <p className="stat-value text-success" style={{ fontSize: '1.75rem' }}>
                  {correctCount}
                </p>
              </div>
              <div className="stat-card" style={{ flex: '1 1 110px' }}>
                <p className="stat-label">Erros</p>
                <p className="stat-value text-error" style={{ fontSize: '1.75rem', color: '#ef4444' }}>
                  {incorrectCount}
                </p>
              </div>
              <div className="stat-card" style={{ flex: '1 1 110px' }}>
                <p className="stat-label">Maior Combo</p>
                <p className="stat-value text-amber" style={{ fontSize: '1.75rem', color: '#f59e0b' }}>
                  x{maxCombo}
                </p>
              </div>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              <button onClick={() => handleStartGame(gameType)} className="btn btn-primary" style={{ padding: '0.75rem 1.5rem' }}>
                <RefreshCw size={18} /> Jogar Novamente
              </button>
              <button onClick={() => setMode('SELECT')} className="btn btn-secondary" style={{ padding: '0.75rem 1.5rem' }}>
                <ArrowLeft size={18} /> Mudar Modo
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
