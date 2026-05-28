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
  score: number;
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

    let correctCount = 0;
    activity.objectiveQuestions.forEach(q => {
      if (objectiveAnswers[q.id] === q.correctOptionId) {
        correctCount++;
      }
    });

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
      {/* Student Info Header */}
      <div className="glass-card-static mb-8">
        <h2 className="heading-gradient text-3xl font-extrabold mb-6 text-center tracking-tight">
          Atividade: {activity.title}
        </h2>
        
        <div className="form-grid">
          <div className="form-grid-full">
            <label>Nome Completo</label>
            <input 
              type="text" 
              placeholder="Digite seu nome"
              value={studentInfo.nome}
              onChange={e => setStudentInfo({ ...studentInfo, nome: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Data</label>
            <input 
              type="date" 
              value={studentInfo.data}
              onChange={e => setStudentInfo({ ...studentInfo, data: e.target.value })}
              required
            />
          </div>
          <div>
            <label>Turma</label>
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
        {/* Objective Questions */}
        <div className="mb-10">
          <h3 className="section-header">Questões de múltipla escolha</h3>
          
          {activity.objectiveQuestions.map((q, index) => (
            <div key={q.id} className="question-card">
              <p className="font-semibold text-lg mb-4">
                <span className="text-accent font-bold">{index + 1}.</span> {q.question}
              </p>
              <div className="flex flex-col gap-3">
                {q.options.map(opt => (
                  <label 
                    key={opt.id} 
                    className={`quiz-option ${objectiveAnswers[q.id] === opt.id ? 'selected' : ''}`}
                  >
                    <input 
                      type="radio" 
                      name={`question_${q.id}`} 
                      value={opt.id}
                      checked={objectiveAnswers[q.id] === opt.id}
                      onChange={() => setObjectiveAnswers({ ...objectiveAnswers, [q.id]: opt.id })}
                      style={{ width: 'auto' }}
                    />
                    <span>{opt.id}) {opt.text}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Discursive Questions */}
        <div className="mb-10">
          <h3 className="section-header">Questões escritas</h3>
          
          {activity.discursiveQuestions.map(q => (
            <div key={q.id} className="question-card">
              <p className="font-semibold text-lg mb-4">
                <span className="text-accent font-bold">{q.id}.</span> {q.question}
              </p>
              <textarea 
                rows={4} 
                placeholder="Escreva sua resposta aqui..."
                value={discursiveAnswers[q.id] || ''}
                onChange={e => setDiscursiveAnswers({ ...discursiveAnswers, [q.id]: e.target.value })}
              />
            </div>
          ))}
        </div>

        {/* Submit */}
        <div className="flex justify-center mb-8">
          <button type="submit" className="btn btn-success" style={{ padding: '1rem 3rem', fontSize: '1.125rem' }}>
            <CheckCircle size={22} /> Ver nota
          </button>
        </div>
      </form>
    </div>
  );
}
