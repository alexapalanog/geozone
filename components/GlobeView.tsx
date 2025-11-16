import React, { useState, useEffect, useMemo } from 'react';
import type { LocationData, NotificationData } from '../types';
import { MessageSquareIcon } from './icons';
import { locations } from '../data/locations';
import useCurrentTime from '../hooks/useCurrentTime';

const wallpaper = '/components/RENDERS/wallpaper.jpg';

const GlobeView: React.FC<{ onNotificationClick: (location: LocationData) => void }> = ({ onNotificationClick }) => {
  const [notification, setNotification] = useState<NotificationData | null>(null);
  const [showNotification, setShowNotification] = useState(false);
  const time = useCurrentTime();

  useEffect(() => {
    // Show notification for the first location
    const location = locations[0];
    setNotification({
      message: `${location.distance} to ${location.name}`,
      location: location,
    });
    // Trigger animation after a short delay
    const timer = setTimeout(() => setShowNotification(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-full w-full relative overflow-hidden flex flex-col items-center justify-between p-6 text-white">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center animate-ken-burns"
        style={{ backgroundImage: `url(${wallpaper})` }}
      ></div>
      <div className="absolute inset-0 bg-black/30"></div>
      
      <div className="relative w-full text-center mt-12 animate-fade-in-up">
        <p className="text-8xl font-bold" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.4)' }}>
          {time.split(' ')[0]}
        </p>
        <p className="text-xl opacity-90" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
          {new Date().toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}
        </p>
      </div>

      <div className="relative w-full">
        {notification && (
          <div
            onClick={() => onNotificationClick(notification.location)}
            className={`w-full max-w-md mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-xl cursor-pointer p-4 transition-all duration-700 ease-in-out transform ${showNotification ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
          >
            <div className="flex items-center mb-2">
              <MessageSquareIcon className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-semibold text-gray-800">GeoZone</span>
              <span className="text-xs text-gray-500 ml-auto">Just Now</span>
            </div>
            <div className="pl-1">
              <p className="font-semibold text-gray-900">{notification.location.name}</p>
              <p className="text-sm text-gray-700">{`You're near a GeoZone point! Tap to discover.`}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GlobeView;