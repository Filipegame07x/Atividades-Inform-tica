import { useState } from 'react';
import { 
  ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Monitor, Sparkles
} from 'lucide-react';
import { 
  GmailLogo, GoogleDriveLogo, GoogleMeetLogo, AnyDeskLogo, ExcelLogo,
  WordLogo, PowerPointLogo, ChromeLogo, MalwarebytesLogo, CanvaLogo,
  WindowsLogo, ChatGPTLogo
} from './AppLogos';

interface HomeProps {
  onSelectActivity: (id: string) => void;
}

export function Home({ onSelectActivity }: HomeProps) {
  const [showArchive, setShowArchive] = useState(false);

  // 5 Novas Provas Oficiais (Organizadas, Limpas, Estilo Pinterest / Notion)
  const newOfficialActivities = [
    {
      id: 'gmail',
      number: '01',
      title: 'Gmail',
      tag: 'E-mails, Marcadores e Organização',
      logo: <GmailLogo size={36} />,
      accentColor: '#ea4335',
      glowColor: 'rgba(234, 67, 53, 0.25)',
      gradient: 'linear-gradient(145deg, rgba(234, 67, 53, 0.1) 0%, rgba(15, 23, 42, 0.9) 100%)',
      borderColor: 'rgba(234, 67, 53, 0.3)',
      btnGradient: 'linear-gradient(135deg, #ea4335 0%, #c5221f 100%)'
    },
    {
      id: 'drive',
      number: '02',
      title: 'Google Drive',
      tag: 'Nuvem, Pastas e Compartilhamento',
      logo: <GoogleDriveLogo size={36} />,
      accentColor: '#34a853',
      glowColor: 'rgba(52, 168, 83, 0.25)',
      gradient: 'linear-gradient(145deg, rgba(52, 168, 83, 0.1) 0%, rgba(15, 23, 42, 0.9) 100%)',
      borderColor: 'rgba(52, 168, 83, 0.3)',
      btnGradient: 'linear-gradient(135deg, #34a853 0%, #1e8e3e 100%)'
    },
    {
      id: 'meet',
      number: '03',
      title: 'Google Meet',
      tag: 'Videoconferências e Ferramentas',
      logo: <GoogleMeetLogo size={36} />,
      accentColor: '#00ac47',
      glowColor: 'rgba(0, 172, 71, 0.25)',
      gradient: 'linear-gradient(145deg, rgba(0, 172, 71, 0.1) 0%, rgba(15, 23, 42, 0.9) 100%)',
      borderColor: 'rgba(0, 172, 71, 0.3)',
      btnGradient: 'linear-gradient(135deg, #00ac47 0%, #00832d 100%)'
    },
    {
      id: 'anydesk',
      number: '04',
      title: 'AnyDesk',
      tag: 'Acesso Remoto e Suporte Técnico',
      logo: <AnyDeskLogo size={36} />,
      accentColor: '#ef4444',
      glowColor: 'rgba(239, 68, 68, 0.25)',
      gradient: 'linear-gradient(145deg, rgba(239, 68, 68, 0.1) 0%, rgba(15, 23, 42, 0.9) 100%)',
      borderColor: 'rgba(239, 68, 68, 0.3)',
      btnGradient: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)'
    },
    {
      id: 'excel',
      number: '05',
      title: 'Excel Básico',
      tag: 'Planilhas, Células e Fórmulas',
      logo: <ExcelLogo size={36} />,
      accentColor: '#107c41',
      glowColor: 'rgba(16, 124, 65, 0.3)',
      gradient: 'linear-gradient(145deg, rgba(16, 124, 65, 0.12) 0%, rgba(15, 23, 42, 0.9) 100%)',
      borderColor: 'rgba(16, 124, 65, 0.35)',
      btnGradient: 'linear-gradient(135deg, #107c41 0%, #0c592e 100%)'
    }
  ];

  // Atividades Concluídas Anteriores
  const completedModules = [
    { id: 'word', title: 'Microsoft Word', desc: 'Processador de Texto', logo: <WordLogo size={22} /> },
    { id: 'powerpoint', title: 'PowerPoint', desc: 'Apresentações & Slides', logo: <PowerPointLogo size={22} /> },
    { id: 'chrome', title: 'Google Chrome', desc: 'Navegação Web', logo: <ChromeLogo size={22} /> },
    { id: 'antivirus', title: 'Malwarebytes', desc: 'Segurança & Antivírus', logo: <MalwarebytesLogo size={22} /> },
    { id: 'canva', title: 'Canva', desc: 'Design & Criatividade', logo: <CanvaLogo size={22} /> },
    { id: 'systems', title: 'Windows & Linux', desc: 'Sistemas Operacionais', logo: <WindowsLogo size={22} /> },
    { id: 'ai', title: 'ChatGPT & IAs', desc: 'Inteligência Artificial', logo: <ChatGPTLogo size={22} /> },
    { id: 'desafio-completo', title: 'Revisão Geral (Word, PPT, IAs)', desc: 'Desafio Interdisciplinar', logo: <Sparkles size={22} color="#fbbf24" /> }
  ];

  return (
    <div className="animate-fade-in text-center mt-4">
      {/* Header Resumido e Elegante */}
      <div className="flex flex-col items-center justify-center mb-8">
        <div 
          style={{ 
            padding: '0.45rem', 
            background: 'rgba(255, 255, 255, 0.04)', 
            borderRadius: '20px', 
            border: '1px solid rgba(255, 255, 255, 0.08)',
            marginBottom: '0.85rem'
          }}
        >
          <img 
            src="/iepop.png" 
            alt="IEPOP Logo" 
            style={{ maxHeight: '60px', objectFit: 'contain' }}
          />
        </div>

        <h1 
          style={{ 
            fontSize: '2.15rem', 
            fontWeight: 800, 
            letterSpacing: '-0.02em', 
            color: '#f8fafc',
            marginBottom: '0.35rem'
          }}
        >
          Avaliações de Informática
        </h1>

        <div className="flex items-center gap-3 flex-wrap justify-center text-sm" style={{ color: '#94a3b8' }}>
          <span>5 Provas Oficiais</span>
          <span>•</span>
          <span>40 Questões por Módulo</span>
          <span>•</span>
          <span className="flex items-center gap-1.5" style={{ color: '#38bdf8' }}>
            <Monitor size={15} /> Modo Tela Cheia
          </span>
        </div>
      </div>

      {/* Grid das 5 Provas (Pinterest Clean Cards) */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.25rem',
          maxWidth: '1100px',
          margin: '0 auto 2.5rem auto',
          textAlign: 'left'
        }}
      >
        {newOfficialActivities.map((act) => (
          <div 
            key={act.id}
            className="pinterest-exam-card"
            style={{
              background: act.gradient,
              borderColor: act.borderColor,
              boxShadow: `0 8px 24px rgba(0, 0, 0, 0.3), 0 0 20px ${act.glowColor}`
            }}
          >
            {/* Top row: Logo + Counter */}
            <div className="flex items-center justify-between gap-3 mb-3">
              <div 
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: `1px solid ${act.borderColor}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {act.logo}
              </div>

              <div className="flex items-center gap-2">
                <span 
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    color: '#94a3b8',
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}
                >
                  #{act.number}
                </span>
                <span 
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    color: '#f8fafc',
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.15)'
                  }}
                >
                  40 Questões
                </span>
              </div>
            </div>

            {/* Title & Short Tag */}
            <div className="mb-4">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', margin: '0 0 0.2rem 0' }}>
                {act.title}
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#94a3b8', margin: 0, fontWeight: 500 }}>
                {act.tag}
              </p>
            </div>

            {/* Micro Difficulty Bar */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontSize: '0.75rem',
                color: '#cbd5e1',
                padding: '0.4rem 0.75rem',
                background: 'rgba(0, 0, 0, 0.25)',
                borderRadius: '10px',
                marginBottom: '1.25rem',
                border: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              <span className="flex items-center gap-1.5 font-medium">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399' }} />
                20 Fáceis
              </span>
              <span style={{ color: '#475569' }}>•</span>
              <span className="flex items-center gap-1.5 font-medium">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#fbbf24' }} />
                15 Médias
              </span>
              <span style={{ color: '#475569' }}>•</span>
              <span className="flex items-center gap-1.5 font-medium">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f43f5e' }} />
                5 Difíceis
              </span>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => onSelectActivity(act.id)}
              className="pinterest-exam-btn"
              style={{
                background: act.btnGradient,
                boxShadow: `0 4px 16px ${act.glowColor}`
              }}
            >
              <span>Iniciar Avaliação</span>
              <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* Seção Resumida de Módulos Concluídos (Drawer Elegante) */}
      <div 
        style={{
          maxWidth: '1100px',
          margin: '0 auto 2.5rem auto',
          background: 'rgba(15, 23, 42, 0.4)',
          border: '1px solid rgba(148, 163, 184, 0.1)',
          borderRadius: '16px',
          padding: '0.85rem 1.25rem'
        }}
      >
        <button
          onClick={() => setShowArchive(!showArchive)}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'none',
            border: 'none',
            color: '#94a3b8',
            cursor: 'pointer',
            padding: '0.25rem 0.5rem',
            fontSize: '0.88rem',
            fontWeight: 600
          }}
        >
          <div className="flex items-center gap-2">
            <span 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem',
                background: 'rgba(16, 185, 129, 0.15)',
                color: '#34d399',
                padding: '0.2rem 0.6rem',
                borderRadius: '9999px',
                fontSize: '0.72rem',
                fontWeight: 700
              }}
            >
              <CheckCircle2 size={12} /> Módulos Anteriores Concluídos ({completedModules.length})
            </span>
            <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
              Word, PowerPoint, Chrome, Antivírus, Canva, etc.
            </span>
          </div>

          <div className="flex items-center gap-1 text-xs" style={{ color: '#cbd5e1' }}>
            <span>{showArchive ? 'Ocultar' : 'Visualizar'}</span>
            {showArchive ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </div>
        </button>

        {showArchive && (
          <div 
            className="animate-fade-in"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '0.75rem',
              marginTop: '1rem',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              textAlign: 'left'
            }}
          >
            {completedModules.map((m) => (
              <div 
                key={m.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '0.75rem',
                  padding: '0.65rem 0.85rem',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '10px'
                }}
              >
                <div className="flex items-center gap-2.5">
                  <div style={{ opacity: 0.85 }}>{m.logo}</div>
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#e2e8f0' }}>{m.title}</div>
                    <div style={{ fontSize: '0.7rem', color: '#64748b' }}>{m.desc}</div>
                  </div>
                </div>
                <span 
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    color: '#34d399',
                    background: 'rgba(16, 185, 129, 0.1)',
                    padding: '0.15rem 0.45rem',
                    borderRadius: '6px'
                  }}
                >
                  ✓ Concluído
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
