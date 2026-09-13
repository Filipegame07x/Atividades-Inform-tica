import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, Maximize2, Sparkles, 
  ArrowLeft, ArrowRight, List, LayoutGrid, Check, AlertTriangle
} from 'lucide-react';
import type { ActivityData } from '../data/activities';
import { 
  GmailLogo, GoogleDriveLogo, GoogleMeetLogo, AnyDeskLogo, ExcelLogo,
  WordLogo, PowerPointLogo, ChromeLogo, MalwarebytesLogo, CanvaLogo,
  WindowsLogo, ChatGPTLogo
} from './AppLogos';

export interface StudentInfo {
  nome: string;
  data: string;
  turma: string;
}

export interface ActivityResult {
  studentInfo: StudentInfo;
  objectiveAnswers: Record<number, string>;
  discursiveAnswers: Record<number, string>;
  score: number;
  correctCount: number;
  discursiveCount: number;
  totalQuestions: number;
  totalCorrect: number;
}

interface ActivityProps {
  activity: ActivityData;
  onComplete: (result: ActivityResult) => void;
}

export function Activity({ activity, onComplete }: ActivityProps) {
  const todayStr = new Date().toISOString().split('T')[0];
  const [studentInfo, setStudentInfo] = useState<StudentInfo>({ nome: '', data: todayStr, turma: 'Informática Nível 2' });
  const [objectiveAnswers, setObjectiveAnswers] = useState<Record<number, string>>({});
  const [discursiveAnswers] = useState<Record<number, string>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'single' | 'all'>('single');
  const [hasStartedExam, setHasStartedExam] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showExitWarning, setShowExitWarning] = useState(false);

  // Monitorar tela cheia
  useEffect(() => {
    const checkFullscreen = () => {
      const isFs = !!(
        document.fullscreenElement ||
        (window.innerHeight >= screen.height - 25 && window.innerWidth >= screen.width - 25)
      );
      setIsFullscreen(isFs);
      if (!isFs && hasStartedExam) {
        setShowExitWarning(true);
      } else {
        setShowExitWarning(false);
      }
    };

    checkFullscreen();
    document.addEventListener('fullscreenchange', checkFullscreen);
    window.addEventListener('resize', checkFullscreen);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'F11') {
        setTimeout(checkFullscreen, 350);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('fullscreenchange', checkFullscreen);
      window.removeEventListener('resize', checkFullscreen);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [hasStartedExam]);

  const requestFullscreen = async () => {
    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      }
    } catch (err) {
      console.warn('Fullscreen request:', err);
    }
  };

  const isFormValid = studentInfo.nome.trim() !== '';

  const handleStartExam = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) {
      alert("Por favor, digite seu nome completo para iniciar a prova.");
      return;
    }

    await requestFullscreen();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setHasStartedExam(true);
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const totalObjective = activity.objectiveQuestions.length;
    const answeredCount = Object.keys(objectiveAnswers).length;

    if (answeredCount < totalObjective) {
      const confirmSubmit = window.confirm(
        `Atenção: Você respondeu ${answeredCount} de ${totalObjective} questões.\nDeseja finalizar a prova e calcular sua nota mesmo assim?`
      );
      if (!confirmSubmit) return;
    }

    // Corrigir objetivas
    let correctCount = 0;
    activity.objectiveQuestions.forEach(q => {
      if (objectiveAnswers[q.id] === q.correctOptionId) {
        correctCount++;
      }
    });

    // Corrigir discursivas (se houver)
    let discursiveCount = 0;
    activity.discursiveQuestions.forEach(q => {
      if (discursiveAnswers[q.id] && discursiveAnswers[q.id].trim() !== '') {
        discursiveCount++;
      }
    });

    const totalQuestions = activity.objectiveQuestions.length + activity.discursiveQuestions.length;
    const totalCorrect = correctCount + discursiveCount;
    const score = totalQuestions > 0 ? (totalCorrect / totalQuestions) * 10 : 0;

    onComplete({
      studentInfo,
      objectiveAnswers,
      discursiveAnswers,
      score,
      correctCount,
      discursiveCount,
      totalQuestions,
      totalCorrect
    });
  };

  const getActivityLogo = (type: string, size = 42) => {
    switch (type) {
      case 'gmail': return <GmailLogo size={size} />;
      case 'drive': return <GoogleDriveLogo size={size} />;
      case 'meet': return <GoogleMeetLogo size={size} />;
      case 'anydesk': return <AnyDeskLogo size={size} />;
      case 'excel': return <ExcelLogo size={size} />;
      case 'word': return <WordLogo size={size} />;
      case 'powerpoint': return <PowerPointLogo size={size} />;
      case 'chrome': return <ChromeLogo size={size} />;
      case 'antivirus': return <MalwarebytesLogo size={size} />;
      case 'canva': return <CanvaLogo size={size} />;
      case 'systems': return <WindowsLogo size={size} />;
      case 'ai': return <ChatGPTLogo size={size} />;
      default: return <Sparkles size={size} color="var(--accent-primary)" />;
    }
  };

  const totalObjective = activity.objectiveQuestions.length;
  const answeredCount = Object.keys(objectiveAnswers).length;
  const progressPercent = totalObjective > 0 ? Math.round((answeredCount / totalObjective) * 100) : 0;
  const currentQ = activity.objectiveQuestions[currentQuestionIndex] || activity.objectiveQuestions[0];

  const getDifficultyBadge = (index: number, diff?: string) => {
    if (diff === 'facil' || index < 20) {
      return (
        <span className="difficulty-pill easy">
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399' }} />
          Fácil (Nível 1)
        </span>
      );
    } else if (diff === 'media' || (index >= 20 && index < 35)) {
      return (
        <span className="difficulty-pill medium">
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fbbf24' }} />
          Mediana (Nível 2)
        </span>
      );
    } else {
      return (
        <span className="difficulty-pill hard">
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fb7185' }} />
          Difícil (Nível 3)
        </span>
      );
    }
  };

  // =========================================================================
  // FASE 1: SALA DE PREPARAÇÃO DA PROVA (DADOS DO ALUNO + BOTAO TELA CHEIA)
  // =========================================================================
  if (!hasStartedExam) {
    return (
      <div className="animate-fade-in mt-6 flex justify-center">
        <div className="exam-prep-card">
          <div className="flex justify-center mb-5">
            <div 
              style={{
                width: '84px',
                height: '84px',
                borderRadius: '22px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.35)'
              }}
            >
              {getActivityLogo(activity.iconType, 52)}
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mb-2">
            <span 
              style={{
                background: 'rgba(6, 182, 212, 0.15)',
                color: '#22d3ee',
                border: '1px solid rgba(6, 182, 212, 0.35)',
                fontSize: '0.75rem',
                fontWeight: 800,
                padding: '0.2rem 0.65rem',
                borderRadius: '9999px'
              }}
            >
              AVALIAÇÃO OFICIAL
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight">
            {activity.title}
          </h2>
          <p className="text-muted text-sm mb-6 max-w-md mx-auto" style={{ lineHeight: '1.55' }}>
            {activity.description}
          </p>

          <div className="difficulty-pill-container justify-center mb-8">
            <span className="difficulty-pill easy">🟢 20 Fáceis</span>
            <span className="difficulty-pill medium">🟡 15 Médias</span>
            <span className="difficulty-pill hard">🔴 5 Difíceis</span>
            <span 
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                color: '#cbd5e1',
                padding: '0.25rem 0.65rem',
                background: 'rgba(255, 255, 255, 0.06)',
                borderRadius: '9999px',
                border: '1px solid rgba(255, 255, 255, 0.12)'
              }}
            >
              40 Questões no Total
            </span>
          </div>

          <form onSubmit={handleStartExam} style={{ textAlign: 'left' }}>
            <div className="form-grid mb-6">
              <div className="form-grid-full">
                <label>Nome Completo do Aluno</label>
                <input 
                  type="text" 
                  placeholder="Digite seu nome completo..."
                  value={studentInfo.nome}
                  onChange={e => setStudentInfo({ ...studentInfo, nome: e.target.value })}
                  required
                  autoFocus
                />
              </div>
              <div>
                <label>Data da Prova</label>
                <input 
                  type="date" 
                  value={studentInfo.data}
                  onChange={e => setStudentInfo({ ...studentInfo, data: e.target.value })}
                  required
                />
              </div>
              <div>
                <label>Turma / Horário</label>
                <input 
                  type="text" 
                  placeholder="Ex: Informática Nível 2"
                  value={studentInfo.turma}
                  onChange={e => setStudentInfo({ ...studentInfo, turma: e.target.value })}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
              style={{
                padding: '1.1rem 1.5rem',
                fontSize: '1.05rem',
                fontWeight: 800,
                borderRadius: '14px',
                boxShadow: '0 6px 24px rgba(6, 182, 212, 0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.65rem',
                cursor: 'pointer'
              }}
            >
              <Maximize2 size={20} />
              <span>Iniciar Prova em Tela Cheia (F11)</span>
            </button>

            <p className="text-center text-muted text-xs mt-3">
              Ao clicar, a avaliação entrará automaticamente em tela cheia para concentração do aluno.
            </p>
          </form>
        </div>
      </div>
    );
  }

  // =========================================================================
  // FASE 2: PROVA EM ANDAMENTO (TELA CHEIA)
  // =========================================================================
  return (
    <div className="animate-fade-in mt-4" style={{ maxWidth: '1000px', margin: '0 auto' }}>
      {/* AVISO SE O ALUNO SAIR DA TELA CHEIA */}
      {showExitWarning && !isFullscreen && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: 'rgba(6, 10, 19, 0.95)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
        >
          <div 
            className="glass-card-static text-center"
            style={{
              maxWidth: '520px',
              padding: '2.5rem',
              borderRadius: '20px',
              border: '1px solid rgba(245, 158, 11, 0.45)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 30px rgba(245, 158, 11, 0.25)'
            }}
          >
            <div 
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'rgba(245, 158, 11, 0.15)',
                border: '1px solid rgba(245, 158, 11, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem',
                color: '#fbbf24'
              }}
            >
              <AlertTriangle size={36} />
            </div>

            <h2 className="text-2xl font-black text-white mb-2">
              Prova Pausada: Tela Cheia Requerida
            </h2>
            <p className="text-muted text-sm mb-6" style={{ lineHeight: '1.6' }}>
              Você saiu do modo de tela cheia. Para continuar respondendo sua prova com foco, clique abaixo ou tecle <strong>F11</strong> para retornar à tela cheia.
            </p>

            <button
              type="button"
              onClick={requestFullscreen}
              className="btn btn-primary w-full"
              style={{
                padding: '1rem',
                fontWeight: 800,
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                borderRadius: '12px'
              }}
            >
              <Maximize2 size={18} />
              <span>Retornar à Tela Cheia (ou tecle F11)</span>
            </button>
          </div>
        </div>
      )}

      {/* TOP BAR FIXA DA PROVA */}
      <div 
        style={{
          position: 'sticky',
          top: '1rem',
          zIndex: 50,
          background: 'rgba(15, 23, 42, 0.94)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(148, 163, 184, 0.2)',
          borderRadius: '16px',
          padding: '0.85rem 1.35rem',
          marginBottom: '1.75rem',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.45)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem'
        }}
      >
        <div className="flex items-center gap-3">
          <div 
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            {getActivityLogo(activity.iconType, 26)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-sm tracking-tight">{activity.title}</span>
              <span 
                style={{
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: '#34d399',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  padding: '0.15rem 0.5rem',
                  borderRadius: '9999px',
                  fontSize: '0.7rem',
                  fontWeight: 700
                }}
              >
                🟢 Tela Cheia (F11)
              </span>
            </div>
            <p className="text-muted text-xs" style={{ margin: 0 }}>
              Aluno: <strong>{studentInfo.nome}</strong> • Turma: <strong>{studentInfo.turma}</strong>
            </p>
          </div>
        </div>

        {/* View Mode Toggle & Progress */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 bg-bg-card p-1 rounded-xl border border-border-subtle">
            <button
              type="button"
              onClick={() => setViewMode('single')}
              className={`btn ${viewMode === 'single' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '0.4rem 0.75rem', fontSize: '0.78rem', borderRadius: '8px' }}
              title="Modo Questão por Questão"
            >
              <LayoutGrid size={14} /> Focada
            </button>
            <button
              type="button"
              onClick={() => setViewMode('all')}
              className={`btn ${viewMode === 'all' ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '0.4rem 0.75rem', fontSize: '0.78rem', borderRadius: '8px' }}
              title="Modo Lista Completa"
            >
              <List size={14} /> Todas ({totalObjective})
            </button>
          </div>

          <div className="text-right">
            <div className="text-xs text-muted mb-1">
              Progresso: <strong className="text-white">{answeredCount}</strong> / {totalObjective} 
              <span className="text-accent font-bold ml-1">({progressPercent}%)</span>
            </div>
            <div 
              style={{
                width: '120px',
                height: '7px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '4px',
                overflow: 'hidden'
              }}
            >
              <div 
                style={{
                  width: `${progressPercent}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #06b6d4, #10b981)',
                  transition: 'width 0.3s ease'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* QUESTION NAVIGATOR PILLS (1..40) */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-muted uppercase tracking-wider">
            Navegador de Questões (Clique para pular):
          </span>
          <span className="text-xs text-muted">
            {answeredCount} de {totalObjective} respondidas
          </span>
        </div>
        <div className="exam-nav-pills">
          {activity.objectiveQuestions.map((q, idx) => {
            const isAnswered = !!objectiveAnswers[q.id];
            const isActive = viewMode === 'single' && currentQuestionIndex === idx;

            return (
              <button
                key={q.id}
                type="button"
                onClick={() => {
                  setCurrentQuestionIndex(idx);
                  if (viewMode === 'all') {
                    const el = document.getElementById(`question_block_${q.id}`);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`exam-nav-pill ${isActive ? 'active' : isAnswered ? 'answered' : 'unanswered'}`}
                title={`Questão ${idx + 1} - ${isAnswered ? 'Respondida' : 'Pendente'}`}
              >
                {isAnswered && !isActive ? <Check size={14} /> : idx + 1}
              </button>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          MODO 1: VISUALIZAÇÃO FOCADA (QUESTÃO POR QUESTÃO)
         ========================================================================= */}
      {viewMode === 'single' && currentQ && (
        <div 
          className="glass-card"
          style={{
            padding: '2.5rem 2rem',
            borderRadius: '20px',
            border: '1px solid rgba(148, 163, 184, 0.2)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.4)',
            marginBottom: '2rem'
          }}
        >
          {/* Header da Questão */}
          <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-border-subtle flex-wrap">
            <div className="flex items-center gap-3">
              <span 
                style={{
                  background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
                  color: '#ffffff',
                  fontWeight: 900,
                  fontSize: '0.95rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '10px'
                }}
              >
                Questão {currentQuestionIndex + 1} de {totalObjective}
              </span>
            </div>
            {getDifficultyBadge(currentQuestionIndex, currentQ.difficulty)}
          </div>

          {/* Enunciado */}
          <h3 
            className="text-xl md:text-2xl font-extrabold text-white mb-8"
            style={{ lineHeight: '1.45', letterSpacing: '-0.01em' }}
          >
            {currentQ.question}
          </h3>

          {/* Alternativas */}
          <div className="flex flex-col gap-3.5 mb-10">
            {currentQ.options.map((opt) => {
              const isSelected = objectiveAnswers[currentQ.id] === opt.id;

              return (
                <div
                  key={opt.id}
                  onClick={() => setObjectiveAnswers({ ...objectiveAnswers, [currentQ.id]: opt.id })}
                  className={`exam-option-tile ${isSelected ? 'selected' : ''}`}
                >
                  <div className="exam-option-letter">
                    {opt.id.toUpperCase()}
                  </div>
                  <div style={{ flex: 1, fontSize: '1rem', color: isSelected ? '#ffffff' : '#e2e8f0', fontWeight: isSelected ? 600 : 400 }}>
                    {opt.text}
                  </div>
                  {isSelected && (
                    <div 
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: '#22d3ee',
                        color: '#041019',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <Check size={15} strokeWidth={3} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Controles de Navegação */}
          <div className="flex items-center justify-between gap-4 pt-4 border-t border-border-subtle flex-wrap">
            <button
              type="button"
              disabled={currentQuestionIndex === 0}
              onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
              className="btn btn-secondary"
              style={{
                opacity: currentQuestionIndex === 0 ? 0.4 : 1,
                cursor: currentQuestionIndex === 0 ? 'not-allowed' : 'pointer',
                padding: '0.75rem 1.4rem'
              }}
            >
              <ArrowLeft size={17} /> Questão Anterior
            </button>

            {currentQuestionIndex < totalObjective - 1 ? (
              <button
                type="button"
                onClick={() => setCurrentQuestionIndex(prev => Math.min(totalObjective - 1, prev + 1))}
                className="btn btn-primary"
                style={{ padding: '0.75rem 1.6rem', fontWeight: 700 }}
              >
                <span>Próxima Questão</span>
                <ArrowRight size={17} />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => handleSubmit()}
                className="btn btn-success"
                style={{
                  padding: '0.85rem 2rem',
                  fontWeight: 800,
                  fontSize: '1rem',
                  boxShadow: '0 4px 20px rgba(16, 185, 129, 0.45)'
                }}
              >
                <CheckCircle size={20} /> Finalizar Prova
              </button>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          MODO 2: VISUALIZAÇÃO EM LISTA (TODAS AS QUESTÕES)
         ========================================================================= */}
      {viewMode === 'all' && (
        <div className="flex flex-col gap-6 mb-10">
          {activity.objectiveQuestions.map((q, index) => (
            <div 
              key={q.id} 
              id={`question_block_${q.id}`} 
              className="question-card"
              style={{
                padding: '1.75rem',
                borderRadius: '16px',
                border: objectiveAnswers[q.id] ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(148, 163, 184, 0.15)'
              }}
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <p className="font-bold text-lg text-white" style={{ margin: 0 }}>
                  <span className="text-accent">{index + 1}.</span> {q.question}
                </p>
                {getDifficultyBadge(index, q.difficulty)}
              </div>

              <div className="flex flex-col gap-3">
                {q.options.map(opt => {
                  const isSelected = objectiveAnswers[q.id] === opt.id;

                  return (
                    <div
                      key={opt.id}
                      onClick={() => setObjectiveAnswers({ ...objectiveAnswers, [q.id]: opt.id })}
                      className={`exam-option-tile ${isSelected ? 'selected' : ''}`}
                      style={{ padding: '0.85rem 1.15rem' }}
                    >
                      <div className="exam-option-letter">
                        {opt.id.toUpperCase()}
                      </div>
                      <div style={{ flex: 1, fontSize: '0.95rem' }}>
                        {opt.text}
                      </div>
                      {isSelected && <Check size={16} color="#22d3ee" />}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="flex justify-center my-8">
            <button
              type="button"
              onClick={() => handleSubmit()}
              className="btn btn-success"
              style={{
                padding: '1.1rem 3.5rem',
                fontSize: '1.15rem',
                fontWeight: 800,
                boxShadow: '0 6px 24px rgba(16, 185, 129, 0.45)'
              }}
            >
              <CheckCircle size={22} /> Finalizar Prova & Ver Nota
            </button>
          </div>
        </div>
      )}

      {/* QUICK FOOTER ACTION */}
      {viewMode === 'single' && (
        <div className="flex justify-center pb-12">
          <button
            type="button"
            onClick={() => handleSubmit()}
            className="btn btn-secondary"
            style={{
              fontSize: '0.85rem',
              color: '#94a3b8',
              padding: '0.6rem 1.25rem',
              borderColor: 'rgba(100, 116, 139, 0.25)'
            }}
          >
            Deseja entregar antes? Finalizar Prova Agora ({answeredCount}/{totalObjective})
          </button>
        </div>
      )}
    </div>
  );
}
