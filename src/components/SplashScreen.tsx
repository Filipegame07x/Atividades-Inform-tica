import { useState, useEffect } from 'react';
import { Monitor, Cpu, Wifi, Code, ChevronRight } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [phase, setPhase] = useState(0);
  // phase 0: logo animates in
  // phase 1: text appears
  // phase 2: particles + loading bar
  // phase 3: fade out

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 400),
      setTimeout(() => setPhase(2), 1000),
      setTimeout(() => setPhase(3), 2800),
      setTimeout(() => onComplete(), 3400),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className={`splash-screen ${phase >= 3 ? 'splash-exit' : ''}`}>
      {/* Ambient orbs */}
      <div className="splash-orb splash-orb-1" />
      <div className="splash-orb splash-orb-2" />
      <div className="splash-orb splash-orb-3" />

      {/* Grid pattern overlay */}
      <div className="splash-grid" />

      {/* Floating tech icons */}
      <div className="splash-floating-icons">
        <div className="splash-float-icon" style={{ top: '15%', left: '10%', animationDelay: '0s' }}>
          <Monitor size={20} />
        </div>
        <div className="splash-float-icon" style={{ top: '25%', right: '12%', animationDelay: '0.5s' }}>
          <Code size={20} />
        </div>
        <div className="splash-float-icon" style={{ bottom: '20%', left: '15%', animationDelay: '1s' }}>
          <Wifi size={20} />
        </div>
        <div className="splash-float-icon" style={{ bottom: '30%', right: '10%', animationDelay: '1.5s' }}>
          <Cpu size={20} />
        </div>
      </div>

      {/* Center content */}
      <div className="splash-content">
        {/* Logo icon */}
        <div className={`splash-logo ${phase >= 0 ? 'splash-logo-visible' : ''}`}>
          <div className="splash-logo-ring" />
          <div className="splash-logo-inner">
            <Monitor size={40} color="white" />
          </div>
        </div>

        {/* Title */}
        <div className={`splash-text ${phase >= 1 ? 'splash-text-visible' : ''}`}>
          <h1 className="splash-title">
            <span className="splash-title-line">Atividades de</span>
            <span className="splash-title-accent">Informática</span>
          </h1>
          <p className="splash-subtitle">Plataforma de Aprendizado Interativo</p>
        </div>

        {/* Loading bar */}
        <div className={`splash-loader ${phase >= 2 ? 'splash-loader-visible' : ''}`}>
          <div className="splash-loader-track">
            <div className="splash-loader-bar" />
          </div>
          <div className="splash-loader-label">
            <span>Carregando ambiente</span>
            <ChevronRight size={14} />
          </div>
        </div>
      </div>

      {/* Brand attribution */}
      <div className={`splash-attribution ${phase >= 1 ? 'splash-attribution-visible' : ''}`}>
        Desenvolvido por
        <img src="/logo_nivano.jpg" alt="Nivano Studio Logo" className="splash-attribution-logo" />
        <span>Nivano Studio</span>
      </div>
    </div>
  );
}
