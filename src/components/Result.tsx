import { useRef } from 'react';
import type { ActivityResult } from './Activity';
import type { ActivityData } from '../data/activities';
import { Download, ArrowLeft, Award } from 'lucide-react';
import html2pdf from 'html2pdf.js';

interface ResultProps {
  activity: ActivityData;
  result: ActivityResult;
  onReset: () => void;
}

export function Result({ activity, result, onReset }: ResultProps) {
  const reportRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = () => {
    const element = reportRef.current;
    if (!element) return;

    const opt = {
      margin:       10,
      filename:     `Relatorio_${activity.id}_${result.studentInfo.nome.replace(/\s+/g, '_')}.pdf`,
      image:        { type: 'jpeg' as const, quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const }
    };

    html2pdf().set(opt).from(element).save();
  };

  const hasDiscursive = activity.discursiveQuestions && activity.discursiveQuestions.length > 0;
  const isApproved = result.score >= 6.0;

  return (
    <div className="animate-fade-in mt-6">
      {/* Action Bar */}
      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <button onClick={onReset} className="btn btn-secondary">
          <ArrowLeft size={18} /> Nova Prova / Voltar ao Início
        </button>
        <button onClick={handleDownloadPdf} className="btn btn-primary" style={{ boxShadow: '0 4px 16px rgba(6, 182, 212, 0.4)' }}>
          <Download size={18} /> Baixar Relatório PDF Oficial
        </button>
      </div>

      {/* Summary Card */}
      <div className="glass-card-static text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-2">
          {isApproved ? <Award size={28} color="#10b981" /> : <Award size={28} color="#f43f5e" />}
          <span className="text-accent font-bold text-xs uppercase tracking-wider">Desempenho da Avaliação</span>
        </div>
        <h2 className="heading-gradient text-3xl font-extrabold mb-2 tracking-tight">Resultado da Avaliação</h2>
        <p className="text-lg text-muted mb-8">Módulo: <strong>{activity.title}</strong></p>
        
        <div className="flex justify-center gap-6 mb-6 flex-wrap flex-col-mobile gap-4-mobile">
          <div className="stat-card">
            <p className="stat-label">Múltipla Escolha</p>
            <p className="stat-value stat-value-cyan">{result.correctCount} / {activity.objectiveQuestions.length}</p>
          </div>
          {hasDiscursive && (
            <div className="stat-card">
              <p className="stat-label">Escritas</p>
              <p className="stat-value stat-value-cyan">{result.discursiveCount} / {activity.discursiveQuestions.length}</p>
            </div>
          )}
          <div className="stat-card">
            <p className="stat-label">Nota Final</p>
            <p className={`stat-value ${isApproved ? 'text-success' : 'text-error'}`}>
              {result.score.toFixed(1)} <span style={{ fontSize: '1rem', color: '#94a3b8' }}>/ 10</span>
            </p>
          </div>
        </div>
        <p className="text-muted text-sm">
          Total de acertos: <strong>{result.totalCorrect} / {result.totalQuestions}</strong> questões
          {hasDiscursive ? " (as questões escritas recebem pontuação se respondidas)." : " de múltipla escolha respondidas."}
        </p>
      </div>

      {/* PDF Report (white background for printing) */}
      <div className="report-container" ref={reportRef}>
        <div style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '1rem', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '10px', color: '#0f172a' }}>
            Relatório de Avaliação: {activity.title}
          </h1>
          <p style={{ color: '#334155', margin: '4px 0' }}><strong>Nome do Aluno:</strong> {result.studentInfo.nome}</p>
          <p style={{ color: '#334155', margin: '4px 0' }}><strong>Data da Prova:</strong> {result.studentInfo.data}</p>
          <p style={{ color: '#334155', margin: '4px 0' }}><strong>Turma:</strong> {result.studentInfo.turma}</p>
          <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: isApproved ? '#f0fdf4' : '#fff1f2', border: `1px solid ${isApproved ? '#bbf7d0' : '#fecdd3'}`, borderRadius: '8px' }}>
            <p style={{ margin: 0, fontSize: '18px', color: isApproved ? '#166534' : '#9f1239', fontWeight: 'bold' }}>
              Nota Final: {result.score.toFixed(1)} / 10.0 {isApproved ? '— Aprovado(a) ✅' : '— Atenção ⚠️'}
            </p>
            <p style={{ margin: '4px 0 0', fontSize: '14px', color: isApproved ? '#166534' : '#9f1239' }}>
              Acertos: {result.correctCount} de {activity.objectiveQuestions.length} questões objetivas
              {hasDiscursive && ` • Escritas: ${result.discursiveCount}/${activity.discursiveQuestions.length}`}
              {` • Total Geral: ${result.totalCorrect}/${result.totalQuestions}`}
            </p>
          </div>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '1rem', color: '#0f172a' }}>
          Gabarito e Respostas do Aluno ({activity.objectiveQuestions.length} Questões)
        </h3>
        {activity.objectiveQuestions.map((q, i) => {
          const studentAnswer = result.objectiveAnswers[q.id];
          const isCorrect = studentAnswer === q.correctOptionId;
          const selectedOption = q.options.find(o => o.id === studentAnswer);
          const correctOption = q.options.find(o => o.id === q.correctOptionId);

          return (
            <div key={q.id} style={{ marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid #f1f5f9' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '0.375rem', color: '#1e293b' }}>{i + 1}. {q.question}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ color: isCorrect ? '#16a34a' : '#dc2626', fontWeight: 'bold', fontSize: '14px' }}>
                  {isCorrect ? '✅ Correto' : '❌ Incorreto'}
                </span>
                <span style={{ color: '#475569', fontSize: '14px' }}>
                  — Sua resposta: <strong>{selectedOption ? `${selectedOption.id.toUpperCase()}) ${selectedOption.text}` : 'Não respondida'}</strong>
                </span>
              </div>
              {!isCorrect && (
                <p style={{ color: '#16a34a', margin: 0, fontSize: '14px' }}>
                  Gabarito oficial: <strong>{correctOption?.id.toUpperCase()}) {correctOption?.text}</strong>
                </p>
              )}
            </div>
          );
        })}

        {hasDiscursive && (
          <>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '2rem 0 1rem', color: '#0f172a' }}>Questões Escritas</h3>
            {activity.discursiveQuestions.map((q) => (
              <div key={q.id} style={{ marginBottom: '1.25rem' }}>
                <p style={{ fontWeight: 'bold', marginBottom: '0.375rem', color: '#1e293b' }}>{q.id}. {q.question}</p>
                <div style={{ padding: '0.875rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', minHeight: '70px', fontSize: '14px', color: '#334155' }}>
                  {result.discursiveAnswers[q.id] || <span style={{ color: '#94a3b8', fontStyle: 'italic' }}>Não respondida</span>}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
