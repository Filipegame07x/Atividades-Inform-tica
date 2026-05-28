import { BookOpen, FileText, MonitorPlay, Globe, ShieldAlert } from 'lucide-react';
import { activities } from '../data/activities';

interface HomeProps {
  onSelectActivity: (id: string) => void;
}

export function Home({ onSelectActivity }: HomeProps) {
  const getIcon = (type: string) => {
    switch(type) {
      case 'word': return <FileText size={24} color="var(--accent-primary)" />;
      case 'powerpoint': return <MonitorPlay size={24} color="var(--accent-warning)" />;
      case 'chrome': return <Globe size={24} color="var(--accent-success)" />;
      case 'antivirus': return <ShieldAlert size={24} color="var(--accent-error)" />;
      default: return <FileText size={24} color="var(--accent-primary)" />;
    }
  };

  const getIconBg = (type: string) => {
    switch(type) {
      case 'word': return 'rgba(59, 130, 246, 0.1)';
      case 'powerpoint': return 'rgba(245, 158, 11, 0.1)';
      case 'chrome': return 'rgba(16, 185, 129, 0.1)';
      case 'antivirus': return 'rgba(239, 68, 68, 0.1)';
      default: return 'rgba(59, 130, 246, 0.1)';
    }
  };

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
        maxWidth: '1000px',
        margin: '0 auto',
        paddingBottom: '2rem'
      }}>
        {activities.map((activity) => (
          <div 
            key={activity.id}
            onClick={() => onSelectActivity(activity.id)}
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              border: '1px solid var(--border-color)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column'
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
              <div style={{ backgroundColor: getIconBg(activity.iconType), padding: '0.75rem', borderRadius: 'var(--radius-md)' }}>
                {getIcon(activity.iconType)}
              </div>
              <h2 className="text-2xl font-bold">{activity.title}</h2>
            </div>
            <p className="text-muted mb-6" style={{ flexGrow: 1 }}>
              {activity.description}
            </p>
            <button className="btn btn-primary w-full" style={{ width: '100%' }}>
              Acessar Atividade
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
