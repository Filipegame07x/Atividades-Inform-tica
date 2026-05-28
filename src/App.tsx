import { useState } from 'react';
import { Home } from './components/Home';
import { PasswordGate } from './components/PasswordGate';
import { Activity } from './components/Activity';
import type { ActivityResult } from './components/Activity';
import { Result } from './components/Result';

type AppState = 'HOME' | 'PASSWORD_GATE' | 'ACTIVITY' | 'RESULT';

function App() {
  const [appState, setAppState] = useState<AppState>('HOME');
  const [activityResult, setActivityResult] = useState<ActivityResult | null>(null);

  const handleSelectActivity = (_id: string) => {
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
    setActivityResult(null);
    setAppState('HOME');
  };

  return (
    <div className="container">
      {appState === 'HOME' && (
        <Home onSelectActivity={handleSelectActivity} />
      )}
      
      {appState === 'PASSWORD_GATE' && (
        <PasswordGate 
          onSuccess={handlePasswordSuccess} 
          onBack={handleReset} 
        />
      )}
      
      {appState === 'ACTIVITY' && (
        <Activity 
          onComplete={handleActivityComplete} 
        />
      )}
      
      {appState === 'RESULT' && activityResult && (
        <Result 
          result={activityResult} 
          onReset={handleReset} 
        />
      )}
    </div>
  );
}

export default App;
