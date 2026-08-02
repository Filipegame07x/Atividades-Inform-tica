import { FileText, MonitorPlay, Globe, ShieldAlert, Palette, Laptop, Brain, Trophy, Sparkles } from 'lucide-react';

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
    },
    {
      id: 'canva',
      title: 'Canva',
      description: 'Aprenda a criar designs incríveis: cartazes, apresentações, logotipos, edições de imagens, uploads e muito mais.',
      iconType: 'canva',
      badgeClass: 'icon-badge icon-badge-purple',
      glowColor: 'rgba(139, 92, 246, 0.3)'
    },
    {
      id: 'systems',
      title: 'Windows vs Linux',
      description: 'Compreenda as diferenças de cada sistema operacional, quando utilizar cada um, prós e contras de cada ambiente.',
      iconType: 'systems',
      badgeClass: 'icon-badge icon-badge-indigo',
      glowColor: 'rgba(99, 102, 241, 0.3)'
    },
    {
      id: 'ai',
      title: 'ChatGPT e IAs',
      description: 'Entenda como funcionam as Inteligências Artificiais conversacionais, prompts de comando, Gemini e Claude.',
      iconType: 'ai',
      badgeClass: 'icon-badge icon-badge-teal',
      glowColor: 'rgba(20, 184, 166, 0.3)'
    }
  ];

  const getIcon = (type: string) => {
    switch(type) {
      case 'word': return <FileText size={24} color="var(--accent-primary)" />;
      case 'powerpoint': return <MonitorPlay size={24} color="var(--accent-warning)" />;
      case 'chrome': return <Globe size={24} color="var(--accent-success)" />;
      case 'antivirus': return <ShieldAlert size={24} color="var(--accent-error)" />;
      case 'canva': return <Palette size={24} color="var(--accent-secondary)" />;
      case 'systems': return <Laptop size={24} color="#6366f1" />;
      case 'ai': return <Brain size={24} color="#14b8a6" />;
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
      <p className="hero-subtitle mb-8">
        Bem-vindo! Escolha uma categoria e selecione o nível para iniciar a atividade ou faça a Prova Geral Completa.
      </p>

      {/* Hero Banner: Desafio Completo */}
      <div 
        className="glass-card-static mb-10 text-left p-6 md:p-8"
        style={{
          background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.98) 100%)',
          border: '1px solid rgba(245, 158, 11, 0.45)',
          boxShadow: '0 10px 30px rgba(245, 158, 11, 0.15)',
          borderRadius: '16px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div 
          style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '220px',
            height: '220px',
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.18) 0%, transparent 70%)',
            pointerEvents: 'none'
          }}
        />
        <div className="flex flex-col md:flex-row items-center justify-between gap-6" style={{ position: 'relative', zIndex: 1 }}>
          <div className="flex items-start gap-4">
            <div 
              style={{
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                padding: '1rem',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 14px rgba(245, 158, 11, 0.4)',
                flexShrink: 0
              }}
            >
              <Trophy size={32} color="#ffffff" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span 
                  style={{
                    background: 'rgba(245, 158, 11, 0.2)',
                    color: '#fbbf24',
                    border: '1px solid rgba(245, 158, 11, 0.4)',
                    padding: '0.2rem 0.65rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  🏆 Desafio Completo • Prova Geral
                </span>
                <span 
                  style={{
                    background: 'rgba(16, 185, 129, 0.2)',
                    color: '#34d399',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    padding: '0.2rem 0.65rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}
                >
                  35 Questões Fáceis
                </span>
                <span 
                  style={{
                    background: 'rgba(99, 102, 241, 0.2)',
                    color: '#818cf8',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    padding: '0.2rem 0.65rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 600
                  }}
                >
                  Sem Nível 3
                </span>
              </div>
              <h2 className="text-2xl font-extrabold text-white tracking-tight mb-2">
                Prova Geral: Word + Google + ChatGPT + Malwarebytes + Canva
              </h2>
              <p className="text-muted text-sm max-w-2xl">
                Teste seus conhecimentos no desafio de <strong>35 perguntas fáceis</strong> divididas igualmente (7 por módulo):
                <span style={{ color: '#38bdf8' }}> Word (7)</span> • 
                <span style={{ color: '#4ade80' }}> Google (7)</span> • 
                <span style={{ color: '#2dd4bf' }}> ChatGPT (7)</span> • 
                <span style={{ color: '#fb7185' }}> Malwarebytes (7)</span> • 
                <span style={{ color: '#c084fc' }}> Canva (7)</span>.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectActivity('desafio-completo')}
            className="btn"
            style={{
              background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '1.05rem',
              padding: '0.9rem 1.8rem',
              borderRadius: '12px',
              border: 'none',
              boxShadow: '0 4px 16px rgba(245, 158, 11, 0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease-in-out'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(245, 158, 11, 0.55)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 16px rgba(245, 158, 11, 0.4)';
            }}
          >
            <Sparkles size={20} /> Iniciar Desafio (35 Qs)
          </button>
        </div>
      </div>

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
