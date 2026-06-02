import { FileText, MonitorPlay, Globe, ShieldAlert } from 'lucide-react';

interface HomeProps {
  onSelectActivity: (id: string) => void;
}

export function Home({ onSelectActivity }: HomeProps) {
  const categories = [
    {
      id: 'word',
      title: 'Microsoft Word',
      description: 'Teste seus conhecimentos sobre o Microsoft Word. Crie e formate textos, tabelas, mala direta e muito mais.',
      iconType: 'word',
      badgeClass: 'icon-badge icon-badge-blue',
      glowColor: 'rgba(6, 182, 212, 0.3)'
    },
    {
      id: 'powerpoint',
      title: 'Microsoft PowerPoint',
      description: 'Teste seus conhecimentos sobre o PowerPoint. Slides, transições, animações e apresentações profissionais.',
      iconType: 'powerpoint',
      badgeClass: 'icon-badge icon-badge-amber',
      glowColor: 'rgba(245, 158, 11, 0.3)'
    },
    {
      id: 'chrome',
      title: 'Google Chrome',
      description: 'Aprenda sobre navegação segura, favoritos, abas, cache, cookies e atalhos no navegador.',
      iconType: 'chrome',
      badgeClass: 'icon-badge icon-badge-green',
      glowColor: 'rgba(16, 185, 129, 0.3)'
    },
    {
      id: 'antivirus',
      title: 'Antivírus Malwarebytes',
      description: 'Entenda segurança digital, proteção em tempo real, ameaças como malware e ransomware e uso do antivírus.',
      iconType: 'antivirus',
      badgeClass: 'icon-badge icon-badge-red',
      glowColor: 'rgba(244, 63, 94, 0.3)'
    }
  ];

  const getIcon = (type: string) => {
    switch(type) {
      case 'word': return <FileText size={24} color="var(--accent-primary)" />;
      case 'powerpoint': return <MonitorPlay size={24} color="var(--accent-warning)" />;
      case 'chrome': return <Globe size={24} color="var(--accent-success)" />;
      case 'antivirus': return <ShieldAlert size={24} color="var(--accent-error)" />;
      default: return <FileText size={24} color="var(--accent-primary)" />;
    }
  };

  return (
    <div className="animate-fade-in text-center mt-10">
      {/* Hero Section */}
      <div className="flex justify-center mb-6">
        <div className="home-logo-container">
          <img 
            src="/iepop.png" 
            alt="IEPOP Logo" 
            className="home-logo-img"
          />
        </div>
      </div>
      <h1 className="hero-title mb-3">Atividades Online de Informática</h1>
      <p className="hero-subtitle mb-10">
        Bem-vindo! Escolha uma categoria e selecione o nível para iniciar a atividade.
      </p>

      {/* Activity Cards Grid */}
      <div className="activities-grid stagger-children">
        {categories.map((category) => (
          <div 
            key={category.id}
            className="activity-card"
            style={{ 
              cursor: 'default',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'between',
              minHeight: '340px'
            }}
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className={category.badgeClass}>
                  {getIcon(category.iconType)}
                </div>
                <h2 className="text-xl font-bold tracking-tight">{category.title}</h2>
              </div>
              <p className="text-muted text-sm mb-6">
                {category.description}
              </p>
            </div>

            {/* Level selection buttons */}
            <div style={{ marginTop: 'auto' }}>
              <p style={{ 
                fontSize: '0.8rem', 
                color: 'var(--text-muted)', 
                marginBottom: '0.75rem', 
                fontWeight: 600, 
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Selecione o Nível:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.5rem' }}>
                <button 
                  onClick={() => onSelectActivity(`${category.id}-1`)} 
                  className="btn btn-secondary level-btn"
                  style={{ 
                    padding: '0.625rem 0.25rem', 
                    fontSize: '0.85rem',
                    borderColor: 'rgba(100, 116, 139, 0.15)'
                  }}
                  title={`Iniciar ${category.title} - Nível 1`}
                >
                  Nível 1
                </button>
                <button 
                  onClick={() => onSelectActivity(`${category.id}-2`)} 
                  className="btn btn-secondary level-btn"
                  style={{ 
                    padding: '0.625rem 0.25rem', 
                    fontSize: '0.85rem',
                    borderColor: 'rgba(100, 116, 139, 0.15)'
                  }}
                  title={`Iniciar ${category.title} - Nível 2`}
                >
                  Nível 2
                </button>
                <button 
                  onClick={() => onSelectActivity(`${category.id}-3`)} 
                  className="btn btn-secondary level-btn"
                  style={{ 
                    padding: '0.625rem 0.25rem', 
                    fontSize: '0.85rem',
                    borderColor: 'rgba(100, 116, 139, 0.15)'
                  }}
                  title={`Iniciar ${category.title} - Nível 3`}
                >
                  Nível 3
                </button>
              </div>
            </div>
            
            {/* Custom interactive hover glow */}
            <style>{`
              .level-btn:hover {
                border-color: ${category.glowColor} !important;
                background: rgba(15, 23, 42, 0.85) !important;
                box-shadow: 0 0 10px ${category.glowColor};
                transform: translateY(-1px);
              }
            `}</style>
          </div>
        ))}
      </div>
    </div>
  );
}
