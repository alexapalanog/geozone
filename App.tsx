import React, { useState, useCallback, useEffect } from 'react';
import type { LocationData } from './types';
import GlobeView from './components/GlobeView';
import ContentView from './components/ContentView';
import LoadingView from './components/LoadingView';
import DiscoverView from './components/DiscoverView';
import AdvocacyView from './components/AdvocacyView';
import BottomNav from './components/BottomNav';
import RewardNoticeView from './components/RewardNoticeView';
import AdvocacyNoticeView from './components/AdvocacyNoticeView';
import { locations } from './data/locations';

export type AppView = 'lockscreen' | 'content' | 'discover' | 'advocacy' | 'loading' | 'rewardNotice' | 'advocacyNotice';

type ActionType = 'reward' | 'advocacy';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>('lockscreen');
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null);
  const [previousView, setPreviousView] = useState<AppView>('lockscreen');
  const [actionType, setActionType] = useState<ActionType | null>(null);

  const handleNotificationClick = useCallback((location: LocationData) => {
    setSelectedLocation(location);
    setPreviousView(currentView);
    setCurrentView('content');
  }, [currentView]);

  const handleContentRead = useCallback(() => {
    setPreviousView(currentView);
    setActionType('reward');
    setCurrentView('loading');
  }, [currentView]);
  
  const handleAdvocacyAction = useCallback(() => {
    setPreviousView(currentView);
    setActionType('advocacy');
    setCurrentView('loading');
  }, [currentView]);

  const handleBack = useCallback(() => {
    setCurrentView(previousView);
    setSelectedLocation(null);
  }, [previousView]);

  const handleReturnToHome = useCallback(() => {
    setCurrentView('lockscreen');
    setSelectedLocation(null);
  }, []);

  const handleNavigate = useCallback((view: AppView) => {
    setPreviousView(currentView);
    if (view === 'content' && currentView !== 'lockscreen') {
       setSelectedLocation(locations[0]);
    }
    setCurrentView(view);
  }, [currentView]);

  useEffect(() => {
    if (currentView === 'loading') {
        const timer = setTimeout(() => {
            if (actionType === 'reward') {
                setCurrentView('rewardNotice');
            } else if (actionType === 'advocacy') {
                setCurrentView('advocacyNotice');
            } else {
                // Default action for other types
                setCurrentView('discover');
            }
            setActionType(null); // Reset action type
        }, 2500); // 2.5 second loading screen

        return () => clearTimeout(timer);
    }
  }, [currentView, actionType]);

  const renderContent = () => {
    switch (currentView) {
      case 'content':
        return selectedLocation && <ContentView location={selectedLocation} onContentRead={handleContentRead} onBack={handleBack} />;
      case 'loading':
        return <LoadingView actionType={actionType} />;
      case 'rewardNotice':
        return <RewardNoticeView onReturn={handleReturnToHome} />;
      case 'advocacyNotice':
        return <AdvocacyNoticeView onReturn={handleReturnToHome} />;
      case 'discover':
        return <DiscoverView onSelectLocation={handleNotificationClick} />;
      case 'advocacy':
        return <AdvocacyView onActionClick={handleAdvocacyAction} />;
      case 'lockscreen':
      default:
        return <GlobeView onNotificationClick={handleNotificationClick} />;
    }
  };

  const isNavVisible = currentView === 'content' || currentView === 'discover' || currentView === 'advocacy';

  return (
    <div className="h-screen w-screen bg-black font-sans overflow-hidden">
      <div className="h-full w-full max-w-md mx-auto relative shadow-2xl bg-white flex flex-col">
        <main className="flex-grow overflow-hidden relative">
          {renderContent()}
        </main>
        {isNavVisible && <BottomNav activeView={currentView} onNavigate={handleNavigate} />}
      </div>
    </div>
  );
};

export default App;