import { useState } from 'react';
import { Home } from './components/Home';
import { PasswordGate } from './components/PasswordGate';
import { Activity } from './components/Activity';
import type { ActivityResult } from './components/Activity';
import { Result } from './components/Result';
import { activities } from './data/activities';

type AppState = 'HOME' | 'PASSWORD_GATE' | 'ACTIVITY' | 'RESULT';

function App() {
  const [appState, setAppState] = useState<AppState>('HOME');
  const [selectedActivityId, setSelectedActivityId] = useState<string | null>(null);
  const [activityResult, setActivityResult] = useState<ActivityResult | null>(null);

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

  return (
    <div className="container">
      {appState === 'HOME' && (
        <Home onSelectActivity={handleSelectActivity} />
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
    </div>
  );
}

export default App;
