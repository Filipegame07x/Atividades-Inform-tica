import { useRef } from 'react';
import { objectiveQuestions, discursiveQuestions } from '../data/word-quiz';
import type { ActivityResult } from './Activity';
import { Download, ArrowLeft } from 'lucide-react';
// @ts-ignore
import html2pdf from 'html2pdf.js';

interface ResultProps {
  result: ActivityResult;
  onReset: () => void;
}

export function Result({ result, onReset }: ResultProps) {
  const reportRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = () => {
    const element = reportRef.current;
    if (!element) return;

    // We temporarily show it to print if it was hidden, but in our case it's in the DOM
    const opt: any = {
      margin:       10,
      filename:     `Relatorio_Word_${result.studentInfo.nome.replace(/\s+/g, '_')}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="animate-fade-in mt-6">
      <div className="flex justify-between items-center mb-6">
        <button onClick={onReset} className="btn btn-secondary">
          <ArrowLeft size={18} /> Nova Atividade
        </button>
        <button onClick={handleDownloadPdf} className="btn btn-primary">
          <Download size={18} /> Baixar Relatório PDF
        </button>
      </div>

      {/* The visible summary */}
      <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '2rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', marginBottom: '2rem' }}>
        <h2 className="text-3xl font-bold mb-2">Resultado da Avaliação</h2>
        <p className="text-xl text-muted mb-6">Módulo: Microsoft Word</p>
        
        <div className="flex justify-center gap-8 mb-6">
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)', minWidth: '150px' }}>
            <p className="text-muted mb-1">Acertos</p>
            <p className="text-4xl font-bold text-accent-primary">{result.correctCount} / {objectiveQuestions.length}</p>
          </div>
          <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)', minWidth: '150px' }}>
            <p className="text-muted mb-1">Nota</p>
            <p className={`text-4xl font-bold ${result.score >= 6 ? 'text-success' : 'text-error'}`}>
              {result.score.toFixed(1)}
            </p>
          </div>
        </div>
        <p className="text-muted">As questões escritas devem ser avaliadas pelo professor. A nota acima refere-se apenas às questões de múltipla escolha.</p>
      </div>

      {/* The Report (This will be converted to PDF) */}
      <div style={{ backgroundColor: '#fff', color: '#000', padding: '2rem', borderRadius: 'var(--radius-md)' }} ref={reportRef}>
        <div style={{ borderBottom: '2px solid #ccc', paddingBottom: '1rem', marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Relatório de Atividade: Microsoft Word</h1>
          <p><strong>Nome:</strong> {result.studentInfo.nome}</p>
          <p><strong>Data:</strong> {result.studentInfo.data}</p>
          <p><strong>Turma:</strong> {result.studentInfo.turma}</p>
          <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px' }}>
            <p style={{ margin: 0, fontSize: '18px' }}><strong>Nota Múltipla Escolha:</strong> {result.score.toFixed(1)} / 10.0 ({result.correctCount} acertos)</p>
          </div>
        </div>

        <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '1rem' }}>Questões de Múltipla Escolha</h3>
        {objectiveQuestions.map((q, i) => {
          const studentAnswer = result.objectiveAnswers[q.id];
          const isCorrect = studentAnswer === q.correctOptionId;
          const selectedOption = q.options.find(o => o.id === studentAnswer);
          const correctOption = q.options.find(o => o.id === q.correctOptionId);

          return (
            <div key={q.id} style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #eee' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{i + 1}. {q.question}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span style={{ color: isCorrect ? '#16a34a' : '#dc2626', fontWeight: 'bold' }}>
                  {isCorrect ? '✅ Correto' : '❌ Incorreto'}
                </span>
                <span>- Sua resposta: <strong>{selectedOption ? `${selectedOption.id}) ${selectedOption.text}` : 'Não respondida'}</strong></span>
              </div>
              {!isCorrect && (
                <p style={{ color: '#16a34a', margin: 0 }}>
                  Resposta certa: <strong>{correctOption?.id}) {correctOption?.text}</strong>
                </p>
              )}
            </div>
          );
        })}

        <h3 style={{ fontSize: '20px', fontWeight: 'bold', margin: '2rem 0 1rem' }}>Questões Escritas</h3>
        {discursiveQuestions.map((q) => (
          <div key={q.id} style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{q.id}. {q.question}</p>
            <div style={{ padding: '1rem', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '4px', minHeight: '80px' }}>
              {result.discursiveAnswers[q.id] || <span style={{ color: '#94a3b8', fontStyle: 'italic' }}>Não respondida</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
