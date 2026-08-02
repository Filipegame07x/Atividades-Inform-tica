import { useState } from 'react';
import { BookOpen, Keyboard, Zap, Trophy, Flame } from 'lucide-react';
import { SplashScreen } from './components/SplashScreen';
import { Home } from './components/Home';
import { PasswordGate } from './components/PasswordGate';
import { Activity } from './components/Activity';
import type { ActivityResult } from './components/Activity';
import { Result } from './components/Result';
import { activities } from './data/activities';
import { PracticeHome } from './components/PracticeHome';
import { PracticeTyping } from './components/PracticeTyping';
import type { TypingText } from './data/typingTexts';
import { ShortcutChallenge } from './components/ShortcutChallenge';
import { SpeedQuiz } from './components/SpeedQuiz';

type AppState = 'HOME' | 'PASSWORD_GATE' | 'ACTIVITY' | 'RESULT';
type ActiveTab = 'ACTIVITIES' | 'PRACTICE' | 'SHORTCUTS' | 'SPEED_QUIZ';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [appState, setAppState] = useState<AppState>('HOME');
  const [activeTab, setActiveTab] = useState<ActiveTab>('ACTIVITIES');
  const [selectedActivityId, setSelectedActivityId] = useState<string | null>(null);
  const [activityResult, setActivityResult] = useState<ActivityResult | null>(null);
  const [selectedPracticeText, setSelectedPracticeText] = useState<TypingText | null>(null);

  const selectedActivity = activities.find(a => a.id === selectedActivityId) || null;

  const handleSelectActivity = (id: string) => {
    setSelectedActivityId(id);
    setAppState('PASSWORD_GATE');
  };

  const handlePasswordSuccess = () => {
    setAppState('ACTIVITY');
  };

  const handleActivityComplete = (result: ActivityResult) => {
    setActivityResult(result);
    setAppState('RESULT');
  };

  const handleReset = () => {
    setSelectedActivityId(null);
    setActivityResult(null);
    setAppState('HOME');
  };

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ flex: 1 }}>
        {selectedPracticeText ? (
          <PracticeTyping 
            typingText={selectedPracticeText}
            onBack={() => setSelectedPracticeText(null)}
          />
        ) : (
          <>
            {appState === 'HOME' && (
              <>
                <div className="navbar-container animate-fade-in">
                  <div className="navbar-tabs">
                    <button 
                      className={`nav-tab-btn ${activeTab === 'ACTIVITIES' ? 'active' : ''}`}
                      onClick={() => setActiveTab('ACTIVITIES')}
                    >
                      <BookOpen size={16} /> Atividades
                    </button>
                    <button 
                      className="nav-tab-btn"
                      style={{ color: '#fbbf24', borderColor: 'rgba(245, 158, 11, 0.3)', background: 'rgba(245, 158, 11, 0.1)' }}
                      onClick={() => handleSelectActivity('desafio-completo')}
                    >
                      <Trophy size={16} /> Desafio Completo (35 Qs)
                    </button>
                    <button 
                      className={`nav-tab-btn ${activeTab === 'PRACTICE' ? 'active' : ''}`}
                      onClick={() => setActiveTab('PRACTICE')}
                    >
                      <Keyboard size={16} /> Atividades para Praticar
                    </button>
                    <button 
                      className={`nav-tab-btn ${activeTab === 'SHORTCUTS' ? 'active' : ''}`}
                      onClick={() => setActiveTab('SHORTCUTS')}
                    >
                      <Zap size={16} /> Desafio de Atalhos
                    </button>
                    <button 
                      className={`nav-tab-btn ${activeTab === 'SPEED_QUIZ' ? 'active' : ''}`}
                      style={activeTab === 'SPEED_QUIZ' ? {} : { color: '#f59e0b', borderColor: 'rgba(245, 158, 11, 0.3)', background: 'rgba(245, 158, 11, 0.08)' }}
                      onClick={() => setActiveTab('SPEED_QUIZ')}
                    >
                      <Flame size={16} color="#f59e0b" /> Speed Quiz (V ou F)
                    </button>
                  </div>
                </div>

                {activeTab === 'ACTIVITIES' ? (
                  <Home onSelectActivity={handleSelectActivity} />
                ) : activeTab === 'PRACTICE' ? (
                  <PracticeHome onSelectText={setSelectedPracticeText} />
                ) : activeTab === 'SHORTCUTS' ? (
                  <ShortcutChallenge onBack={() => setActiveTab('ACTIVITIES')} />
                ) : (
                  <SpeedQuiz onBack={() => setActiveTab('ACTIVITIES')} />
                )}
              </>
            )}
            
            {appState === 'PASSWORD_GATE' && selectedActivity && (
              <PasswordGate 
                activity={selectedActivity}
                onSuccess={handlePasswordSuccess} 
                onBack={handleReset} 
              />
            )}
            
            {appState === 'ACTIVITY' && selectedActivity && (
              <Activity 
                activity={selectedActivity}
                onComplete={handleActivityComplete} 
              />
            )}
            
            {appState === 'RESULT' && activityResult && selectedActivity && (
              <Result 
                activity={selectedActivity}
                result={activityResult} 
                onReset={handleReset} 
              />
            )}
          </>
        )}
      </div>

      <footer className="footer" style={{ zIndex: 5 }}>
        <span>Desenvolvido por</span>
        <a 
          href="https://www.instagram.com/nivanostudio/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="footer-link"
        >
          <img src="/logo_nivano.jpg" alt="Nivano Studio Logo" className="footer-logo" />
          Nivano Studio
        </a>
      </footer>
    </div>
  );
}

export default App;
