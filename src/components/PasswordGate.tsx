import React, { useState } from 'react';
import { Lock, ArrowLeft } from 'lucide-react';
import type { ActivityData } from '../data/activities';

interface PasswordGateProps {
  activity: ActivityData;
  onSuccess: () => void;
  onBack: () => void;
}

export function PasswordGate({ activity, onSuccess, onBack }: PasswordGateProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === activity.password) {
      onSuccess();
    } else {
      setError('Senha incorreta. Tente novamente.');
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <div className="animate-fade-in mt-10">
      <button onClick={onBack} className="btn btn-secondary mb-8">
        <ArrowLeft size={18} /> Voltar
      </button>

      <div 
        className="password-card"
        style={shake ? { animation: 'shake 0.4s ease-in-out' } : undefined}
      >
        <div className="flex justify-center mb-6">
          <div className="lock-icon">
            <Lock size={36} color="var(--accent-primary)" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold tracking-tight mb-2">{activity.title}</h2>
        <p className="text-muted mb-8">
          Digite a senha fornecida pelo professor para acessar esta atividade.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input 
              type="password" 
              placeholder="Digite a senha..." 
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              style={{ textAlign: 'center', fontSize: '1.125rem', padding: '1rem' }}
              autoFocus
            />
          </div>
          
          {error && (
            <div className="text-error mb-4 animate-fade-in text-sm font-medium">
              {error}
            </div>
          )}

          <button type="submit" className="btn btn-primary w-full" style={{ padding: '1rem' }}>
            Acessar Atividade
          </button>
        </form>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }
      `}</style>
    </div>
  );
}
