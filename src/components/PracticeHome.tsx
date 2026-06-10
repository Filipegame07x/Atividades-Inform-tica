import { FileText, Award, Keyboard, BookOpen } from 'lucide-react';
import { typingTexts } from '../data/typingTexts';
import type { TypingText, TypingTextCategory } from '../data/typingTexts';

interface PracticeHomeProps {
  onSelectText: (text: TypingText) => void;
}

export function PracticeHome({ onSelectText }: PracticeHomeProps) {
  // Group texts by level
  const level1 = typingTexts.filter(t => t.level === 1);
  const level2 = typingTexts.filter(t => t.level === 2);
  const level3 = typingTexts.filter(t => t.level === 3);

  const getLevelBadge = (level: number) => {
    switch (level) {
      case 1:
        return <span className="badge-easy">Fácil</span>;
      case 2:
        return <span className="badge-medium">Médio</span>;
      case 3:
        return <span className="badge-hard">Difícil</span>;
      default:
        return null;
    }
  };

  const renderLevelGroup = (title: string, desc: string, texts: TypingTextCategory[], levelClass: string) => {
    return (
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Award className={`icon-${levelClass}`} size={20} />
          <h3 className="text-xl font-bold tracking-tight">{title}</h3>
        </div>
        <p className="text-muted text-sm mb-4">{desc}</p>
        
        <div className="practice-list">
          {texts.map((item) => (
            <div 
              key={item.id} 
              className="practice-item-card"
              onClick={() => {
                const randomText = item.texts[Math.floor(Math.random() * item.texts.length)];
                onSelectText({
                  id: item.id,
                  theme: item.theme,
                  level: item.level as 1 | 2 | 3,
                  text: randomText
                });
              }}
            >
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-3">
                  <div className="practice-number-badge">{item.id}</div>
                  <div>
                    <h4 className="font-semibold text-base flex items-center gap-2">
                      Tema: {item.theme}
                    </h4>
                    <p className="text-muted text-xs practice-preview-text">
                      {item.texts[0].slice(0, 75)}...
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  {getLevelBadge(item.level)}
                  <button className="btn btn-secondary practice-start-btn">
                    <Keyboard size={16} /> Praticar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="animate-fade-in mt-10">
      {/* Category Header */}
      <div className="glass-card-static mb-8 text-center">
        <div className="flex justify-center mb-4">
          <div className="icon-badge icon-badge-blue" style={{ padding: '1rem', borderRadius: '50%' }}>
            <FileText size={32} color="var(--accent-primary)" />
          </div>
        </div>
        <h2 className="heading-gradient text-3xl font-extrabold mb-3 tracking-tight">
          Treinamento de Digitação no Microsoft Word
        </h2>
        <p className="hero-subtitle mb-2" style={{ maxWidth: '650px' }}>
          Pratique digitação de textos reais, aprenda a usar pontuações, letras maiúsculas, acentos e símbolos especiais do teclado.
        </p>
        <div className="flex justify-center gap-4 text-xs text-muted mt-4 flex-wrap">
          <span className="flex items-center gap-1"><BookOpen size={14} /> 10 temas variados</span>
          <span className="flex items-center gap-1"><Keyboard size={14} /> Dicas inteligentes ao errar</span>
          <span className="flex items-center gap-1"><Award size={14} /> 3 níveis de aprendizado</span>
        </div>
      </div>

      {/* Level Selection Blocks */}
      <div className="glass-card-static">
        <h2 className="section-header" style={{ marginBottom: '2rem' }}>Escolha um Texto para Praticar</h2>
        
        {renderLevelGroup(
          "Nível 1 — Fácil", 
          "Textos curtos com palavras simples, pouca pontuação e poucos acentos. Ideal para começar.", 
          level1, 
          "easy"
        )}
        
        {renderLevelGroup(
          "Nível 2 — Médio", 
          "Textos maiores com palavras variadas, acentuação frequente, pontuações e números.", 
          level2, 
          "medium"
        )}
        
        {renderLevelGroup(
          "Nível 3 — Difícil", 
          "Textos completos contendo muitos símbolos do teclado, caracteres especiais e pontuações complexas.", 
          level3, 
          "hard"
        )}
      </div>
    </div>
  );
}
