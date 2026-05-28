import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import type { ActivityData } from '../data/activities';

export interface StudentInfo {
  nome: string;
  data: string;
  turma: string;
}

export interface ActivityResult {
  studentInfo: StudentInfo;
  objectiveAnswers: Record<number, string>;
  discursiveAnswers: Record<number, string>;
  score: number; // 0 to 10
  correctCount: number;
}

interface ActivityProps {
  activity: ActivityData;
  onComplete: (result: ActivityResult) => void;
}

export function Activity({ activity, onComplete }: ActivityProps) {
  const [studentInfo, setStudentInfo] = useState<StudentInfo>({ nome: '', data: '', turma: '' });
  const [objectiveAnswers, setObjectiveAnswers] = useState<Record<number, string>>({});
  const [discursiveAnswers, setDiscursiveAnswers] = useState<Record<number, string>>({});

  const isFormValid = studentInfo.nome.trim() !== '' && studentInfo.data.trim() !== '' && studentInfo.turma.trim() !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) {
      alert("Por favor, preencha seus dados (Nome, Data, Turma) no topo da página.");
      return;
    }

    // Calcular nota
    let correctCount = 0;
    activity.objectiveQuestions.forEach(q => {
      if (objectiveAnswers[q.id] === q.correctOptionId) {
        correctCount++;
      }
    });

    // Nota de 0 a 10 baseada na quantidade de questões objetivas
    const score = (correctCount / activity.objectiveQuestions.length) * 10;

    onComplete({
      studentInfo,
      objectiveAnswers,
      discursiveAnswers,
      score,
      correctCount
    });
  };

  return (
    <div className="animate-fade-in mt-6">
      <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '2rem', borderRadius: 'var(--radius-lg)', marginBottom: '2rem' }}>
        <h2 className="text-3xl font-bold mb-6 text-center text-accent-primary">Atividade: {activity.title}</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div style={{ gridColumn: '1 / -1' }}>
            <label className="text-muted mb-1 block">Nome Completo</label>
            <input 
              type="text" 
              placeholder="Digite seu nome"
              value={studentInfo.nome}
              onChange={e => setStudentInfo({ ...studentInfo, nome: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-muted mb-1 block">Data</label>
            <input 
              type="date" 
              value={studentInfo.data}
              onChange={e => setStudentInfo({ ...studentInfo, data: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-muted mb-1 block">Turma</label>
            <input 
              type="text" 
              placeholder="Ex: Informática Básica"
              value={studentInfo.turma}
              onChange={e => setStudentInfo({ ...studentInfo, turma: e.target.value })}
              required
            />
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '3rem' }}>
          <h3 className="text-2xl font-bold mb-4" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
            Questões de múltipla escolha
          </h3>
          
          {activity.objectiveQuestions.map((q, index) => (
            <div key={q.id} style={{ backgroundColor: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem' }}>
              <p className="font-bold text-xl mb-4">{index + 1}. {q.question}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {q.options.map(opt => (
                  <label 
                    key={opt.id} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.75rem',
                      padding: '1rem',
                      backgroundColor: objectiveAnswers[q.id] === opt.id ? 'rgba(59, 130, 246, 0.1)' : 'var(--bg-tertiary)',
                      border: `1px solid ${objectiveAnswers[q.id] === opt.id ? 'var(--accent-primary)' : 'transparent'}`,
                      borderRadius: 'var(--radius-md)',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    <input 
                      type="radio" 
                      name={`question_${q.id}`} 
                      value={opt.id}
                      checked={objectiveAnswers[q.id] === opt.id}
                      onChange={() => setObjectiveAnswers({ ...objectiveAnswers, [q.id]: opt.id })}
                      style={{ width: 'auto' }}
                    />
                    <span style={{ fontWeight: objectiveAnswers[q.id] === opt.id ? 'bold' : 'normal', color: objectiveAnswers[q.id] === opt.id ? 'var(--accent-primary)' : 'inherit' }}>
                      {opt.id}) {opt.text}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: '3rem' }}>
          <h3 className="text-2xl font-bold mb-4" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
            Questões escritas
          </h3>
          
          {activity.discursiveQuestions.map(q => (
            <div key={q.id} style={{ backgroundColor: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem' }}>
              <p className="font-bold text-xl mb-4">{q.id}. {q.question}</p>
              <textarea 
                rows={4} 
                placeholder="Escreva sua resposta aqui..."
                value={discursiveAnswers[q.id] || ''}
                onChange={e => setDiscursiveAnswers({ ...discursiveAnswers, [q.id]: e.target.value })}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center mb-8">
          <button type="submit" className="btn btn-success" style={{ padding: '1rem 3rem', fontSize: '1.25rem' }}>
            <CheckCircle size={24} /> Ver nota
          </button>
        </div>
      </form>
    </div>
  );
}
