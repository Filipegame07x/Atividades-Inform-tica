import { FileText, MonitorPlay, Globe, ShieldAlert } from 'lucide-react';
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

  const getIconBadgeClass = (type: string) => {
    switch(type) {
      case 'word': return 'icon-badge icon-badge-blue';
      case 'powerpoint': return 'icon-badge icon-badge-amber';
      case 'chrome': return 'icon-badge icon-badge-green';
      case 'antivirus': return 'icon-badge icon-badge-red';
      default: return 'icon-badge icon-badge-blue';
    }
  };

  return (
    <div className="animate-fade-in text-center mt-10">
      {/* Hero Section */}
      <div className="flex justify-center mb-6">
        <div className="hero-icon" style={{ padding: '0.5rem', background: 'rgba(15, 23, 42, 0.4)', border: '1px solid var(--border-glow)' }}>
          <img 
            src="/iepop.png" 
            alt="IEPOP Logo" 
            style={{ width: '48px', height: '48px', objectFit: 'contain' }} 
          />
        </div>
      </div>
      <h1 className="hero-title mb-3">Atividades Online de Informática</h1>
      <p className="hero-subtitle mb-10">
        Bem-vindo! Selecione uma atividade abaixo para começar o seu teste.
      </p>

      {/* Activity Cards Grid */}
      <div className="activities-grid stagger-children">
        {activities.map((activity) => (
          <div 
            key={activity.id}
            className="activity-card"
            onClick={() => onSelectActivity(activity.id)}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={getIconBadgeClass(activity.iconType)}>
                {getIcon(activity.iconType)}
              </div>
              <h2 className="text-xl font-bold tracking-tight">{activity.title}</h2>
            </div>
            <p className="text-muted text-sm mb-6 flex-grow">
              {activity.description}
            </p>
            <button className="btn btn-primary w-full">
              Acessar Atividade
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
