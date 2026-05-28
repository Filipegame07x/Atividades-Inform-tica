import { useRef } from 'react';
import type { ActivityResult } from './Activity';
import type { ActivityData } from '../data/activities';
import { Download, ArrowLeft } from 'lucide-react';
// @ts-ignore
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

    const opt: any = {
      margin:       10,
      filename:     `Relatorio_${activity.id}_${result.studentInfo.nome.replace(/\s+/g, '_')}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="animate-fade-in mt-6">
      {/* Action Bar */}
      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <button onClick={onReset} className="btn btn-secondary">
          <ArrowLeft size={18} /> Nova Atividade
        </button>
        <button onClick={handleDownloadPdf} className="btn btn-primary">
          <Download size={18} /> Baixar Relatório PDF
        </button>
      </div>

      {/* Summary Card */}
      <div className="glass-card-static text-center mb-8">
        <h2 className="heading-gradient text-3xl font-extrabold mb-2 tracking-tight">Resultado da Avaliação</h2>
        <p className="text-lg text-muted mb-8">Módulo: {activity.title}</p>
        
        <div className="flex justify-center gap-6 mb-8 flex-wrap flex-col-mobile gap-4-mobile">
          <div className="stat-card">
            <p className="stat-label">Acertos</p>
            <p className="stat-value stat-value-cyan">{result.correctCount} / {activity.objectiveQuestions.length}</p>
          </div>
          <div className="stat-card">
            <p className="stat-label">Nota</p>
            <p className={`stat-value ${result.score >= 6 ? 'text-success' : 'text-error'}`}>
              {result.score.toFixed(1)}
            </p>
          </div>
        </div>
        <p className="text-muted text-sm">As questões escritas devem ser avaliadas pelo professor. A nota acima refere-se apenas às questões de múltipla escolha.</p>
      </div>

      {/* PDF Report (white background for printing) */}
      <div className="report-container" ref={reportRef}>
        <div style={{ borderBottom: '2px solid #e2e8f0', paddingBottom: '1rem', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '10px', color: '#0f172a' }}>Relatório de Atividade: {activity.title}</h1>
          <p style={{ color: '#334155' }}><strong>Nome:</strong> {result.studentInfo.nome}</p>
          <p style={{ color: '#334155' }}><strong>Data:</strong> {result.studentInfo.data}</p>
          <p style={{ color: '#334155' }}><strong>Turma:</strong> {result.studentInfo.turma}</p>
          <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px' }}>
            <p style={{ margin: 0, fontSize: '16px', color: '#166534' }}><strong>Nota Múltipla Escolha:</strong> {result.score.toFixed(1)} / 10.0 ({result.correctCount} acertos)</p>
          </div>
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '1rem', color: '#0f172a' }}>Questões de Múltipla Escolha</h3>
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
                <span style={{ color: '#475569', fontSize: '14px' }}>— Sua resposta: <strong>{selectedOption ? `${selectedOption.id}) ${selectedOption.text}` : 'Não respondida'}</strong></span>
              </div>
              {!isCorrect && (
                <p style={{ color: '#16a34a', margin: 0, fontSize: '14px' }}>
                  Resposta certa: <strong>{correctOption?.id}) {correctOption?.text}</strong>
                </p>
              )}
            </div>
          );
        })}

        <h3 style={{ fontSize: '18px', fontWeight: 'bold', margin: '2rem 0 1rem', color: '#0f172a' }}>Questões Escritas</h3>
        {activity.discursiveQuestions.map((q) => (
          <div key={q.id} style={{ marginBottom: '1.25rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.375rem', color: '#1e293b' }}>{q.id}. {q.question}</p>
            <div style={{ padding: '0.875rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '6px', minHeight: '70px', fontSize: '14px', color: '#334155' }}>
              {result.discursiveAnswers[q.id] || <span style={{ color: '#94a3b8', fontStyle: 'italic' }}>Não respondida</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
