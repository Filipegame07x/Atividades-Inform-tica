import { useState } from 'react';
import { BookOpen, Keyboard, Zap } from 'lucide-react';
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

type AppState = 'HOME' | 'PASSWORD_GATE' | 'ACTIVITY' | 'RESULT';
type ActiveTab = 'ACTIVITIES' | 'PRACTICE' | 'SHORTCUTS';

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
                  </div>
                </div>

                {activeTab === 'ACTIVITIES' ? (
                  <Home onSelectActivity={handleSelectActivity} />
                ) : activeTab === 'PRACTICE' ? (
                  <PracticeHome onSelectText={setSelectedPracticeText} />
                ) : (
                  <ShortcutChallenge onBack={() => setActiveTab('ACTIVITIES')} />
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
