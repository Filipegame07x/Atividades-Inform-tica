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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === activity.password) {
      onSuccess();
    } else {
      setError('Senha incorreta. Tente novamente.');
    }
  };

  return (
    <div className="animate-fade-in mt-8">
      <button 
        onClick={onBack}
        className="btn btn-secondary mb-6"
        style={{ padding: '0.5rem 1rem' }}
      >
        <ArrowLeft size={18} /> Voltar
      </button>

      <div style={{
        backgroundColor: 'var(--bg-secondary)',
        borderRadius: 'var(--radius-lg)',
        padding: '3rem 2rem',
        border: '1px solid var(--border-color)',
        maxWidth: '500px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <div className="flex justify-center mb-6">
          <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', padding: '1rem', borderRadius: '50%' }}>
            <Lock size={40} color="var(--accent-primary)" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-2">Acesso Restrito: {activity.title}</h2>
        <p className="text-muted mb-8">
          Digite a senha fornecida pelo professor para acessar esta atividade.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-left">
            <input 
              type="password" 
              placeholder="Digite a senha..." 
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              style={{ textAlign: 'center', fontSize: '1.25rem', padding: '1rem' }}
              autoFocus
            />
          </div>
          
          {error && (
            <div className="text-error mb-4 animate-fade-in">
              {error}
            </div>
          )}

          <button type="submit" className="btn btn-primary w-full" style={{ width: '100%', padding: '1rem' }}>
            Acessar Atividade
          </button>
        </form>
      </div>
    </div>
  );
}
