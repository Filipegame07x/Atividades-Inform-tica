import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Download, FileText } from 'lucide-react';
import { reflectionModules } from '../data/reflectionModules';

type Answers = Record<string, string>;
const STORAGE_KEY = 'atividades-reflection-answers';

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[char] ?? char);
}

export function StudentReflection() {
  const [answers, setAnswers] = useState<Answers>(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) as Answers : {};
    } catch {
      return {};
    }
  });
  const [step, setStep] = useState(0);
  const reportRef = useRef<HTMLDivElement>(null);
  const currentModule = reflectionModules[Math.min(step, reflectionModules.length - 1)];
  const totalSteps = reflectionModules.length;
  const progressStep = Math.min(step + 1, totalSteps);

  useEffect(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
  }, [answers]);

  const updateAnswer = (moduleId: string, questionId: string, value: string) => {
    setAnswers(current => ({ ...current, [`${moduleId}.${questionId}`]: value }));
  };

  const getStudentName = () => answers['about.name']?.trim() || 'Aluno';

  const downloadWord = () => {
    const sections = reflectionModules.map(module => `
      <section>
        <h2>${escapeHtml(module.title)}</h2>
        ${module.questions.map(question => `
          <h3>${escapeHtml(question.prompt)}</h3>
          <p>${escapeHtml(answers[`${module.id}.${question.id}`]?.trim() || 'Não respondido.').replace(/\n/g, '<br>')}</p>
        `).join('')}
      </section>
    `).join('');
    const html = `<!doctype html><html><head><meta charset="utf-8"><style>
      body{font-family:Arial,sans-serif;color:#292724;line-height:1.6;margin:36pt}h1{font-size:22pt;color:#8d422d}h2{font-size:16pt;margin-top:24pt;border-bottom:1px solid #ddd;padding-bottom:6pt}h3{font-size:11pt;margin:14pt 0 4pt}p{margin:0 0 12pt;white-space:pre-wrap}section{page-break-inside:avoid}
    </style></head><body><h1>Minhas aprendizagens em Informática</h1><p><strong>Nome:</strong> ${escapeHtml(getStudentName())}</p>${sections}</body></html>`;
    const file = new Blob(['\ufeff', html], { type: 'application/msword;charset=utf-8' });
    const url = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Respostas_Informatica_${getStudentName().replace(/[^\p{L}\p{N}-]+/gu, '_')}.doc`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const downloadPdf = async () => {
    if (!reportRef.current) return;
    const html2pdf = (await import('html2pdf.js')).default;
    await html2pdf().set({
      margin: 12,
      filename: `Respostas_Informatica_${getStudentName().replace(/[^\p{L}\p{N}-]+/gu, '_')}.pdf`,
      image: { type: 'jpeg' as const, quality: 0.96 },
      html2canvas: { scale: 1.5, useCORS: true },
      jsPDF: { unit: 'mm' as const, format: 'a4' as const, orientation: 'portrait' as const },
    }).from(reportRef.current).save();
  };

  return (
    <main className="reflection-page animate-fade-in">
      <header className="reflection-header">
        <span className="reflection-eyebrow"><FileText size={15} /> CADERNO DE APRENDIZAGEM</span>
        <h1>Minhas respostas sobre Informática</h1>
        <p>Responda com suas palavras. Você pode voltar às etapas anteriores; suas respostas ficam salvas durante esta sessão.</p>
      </header>

      <div className="reflection-progress" aria-label={`Etapa ${progressStep} de ${totalSteps}`}>
        <div className="reflection-progress-copy"><span>{step === totalSteps ? 'Concluído' : `Etapa ${progressStep} de ${totalSteps}`}</span><span>{Math.round((progressStep / totalSteps) * 100)}%</span></div>
        <div className="reflection-progress-track"><div style={{ width: `${(progressStep / totalSteps) * 100}%` }} /></div>
      </div>

      {step < totalSteps && (
      <section className="reflection-card">
        <label className="reflection-menu-label" htmlFor="reflection-module">Escolha um assunto</label>
        <select id="reflection-module" className="reflection-menu" value={step} onChange={event => setStep(Number(event.target.value))}>
          {reflectionModules.map((module, index) => <option key={module.id} value={index}>{String(index + 1).padStart(2, '0')} · {module.title}</option>)}
        </select>

        <div className="reflection-section-heading">
          <div><span className="reflection-step-number">{String(step + 1).padStart(2, '0')}</span><h2>{currentModule.title}</h2></div>
          <p>{currentModule.description}</p>
        </div>

        <div className="reflection-questions">
          {currentModule.questions.map((question, index) => {
            const id = `${currentModule.id}.${question.id}`;
            return (
              <div className="reflection-question" key={question.id}>
                <label htmlFor={`answer-${id}`}><span>{String(index + 1).padStart(2, '0')}</span>{question.prompt}</label>
                <textarea
                  id={`answer-${id}`}
                  value={answers[id] ?? ''}
                  onChange={event => updateAnswer(currentModule.id, question.id, event.target.value)}
                  placeholder={question.placeholder}
                  rows={4}
                />
              </div>
            );
          })}
        </div>

        <footer className="reflection-controls">
          <button className="btn btn-secondary" type="button" onClick={() => setStep(index => Math.max(0, index - 1))} disabled={step === 0}><ArrowLeft size={17} /> Voltar</button>
          {step < totalSteps - 1 ? (
            <button className="btn btn-primary" type="button" onClick={() => setStep(index => Math.min(totalSteps - 1, index + 1))}>Próximo <ArrowRight size={17} /></button>
          ) : (
            <button className="btn btn-primary" type="button" onClick={() => setStep(totalSteps)}>Finalizar respostas <Check size={17} /></button>
          )}
        </footer>
      </section>
      )}

      {step === totalSteps && (
        <section className="reflection-card reflection-finish animate-fade-in">
          <span className="reflection-eyebrow"><Check size={15} /> QUESTIONÁRIO CONCLUÍDO</span>
          <h2>Suas respostas estão prontas</h2>
          <p>Baixe o documento para guardar, imprimir ou compartilhar com seu professor.</p>
          <div className="reflection-downloads">
            <button className="btn btn-primary" type="button" onClick={downloadWord}><Download size={17} /> Baixar Word (.doc)</button>
            <button className="btn btn-secondary" type="button" onClick={downloadPdf}><Download size={17} /> Baixar PDF</button>
            <button className="btn btn-secondary" type="button" onClick={() => setStep(totalSteps - 1)}><ArrowLeft size={17} /> Voltar às respostas</button>
          </div>
          <div ref={reportRef} className="reflection-report">
            <h1>Minhas aprendizagens em Informática</h1>
            <p><strong>Nome:</strong> {answers['about.name']?.trim() || 'Não informado'}</p>
            {reflectionModules.map(module => (
              <section key={module.id}>
                <h2>{module.title}</h2>
                {module.questions.map(question => (
                  <div key={question.id}>
                    <h3>{question.prompt}</h3>
                    <p>{answers[`${module.id}.${question.id}`]?.trim() || 'Não respondido.'}</p>
                  </div>
                ))}
              </section>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
