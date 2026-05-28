import { BookOpen, FileText } from 'lucide-react';

interface HomeProps {
  onSelectActivity: (id: string) => void;
}

export function Home({ onSelectActivity }: HomeProps) {
  return (
    <div className="animate-fade-in text-center mt-8">
      <div className="flex justify-center mb-6">
        <div style={{ background: 'var(--accent-primary)', padding: '1rem', borderRadius: '50%' }}>
          <BookOpen size={48} color="white" />
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-4">Atividades Online de Informática</h1>
      <p className="text-xl text-muted mb-8">
        Bem-vindo! Selecione uma atividade abaixo para começar o seu teste.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        {/* Atividade Word */}
        <div 
          onClick={() => onSelectActivity('word')}
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            border: '1px solid var(--border-color)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textAlign: 'left'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent-primary)';
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'var(--border-color)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', padding: '0.75rem', borderRadius: 'var(--radius-md)' }}>
              <FileText size={24} color="var(--accent-primary)" />
            </div>
            <h2 className="text-2xl font-bold">Microsoft Word</h2>
          </div>
          <p className="text-muted mb-6">
            Teste seus conhecimentos sobre o Microsoft Word. O que é, para que serve e suas principais funções.
          </p>
          <button className="btn btn-primary w-full" style={{ width: '100%' }}>
            Acessar Atividade
          </button>
        </div>
      </div>
    </div>
  );
}
