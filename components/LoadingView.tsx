
import React from 'react';
import { GlobeOneLogoIcon } from './icons';

type ActionType = 'reward' | 'advocacy' | null;

const LoadingView: React.FC<{ actionType: ActionType }> = ({ actionType }) => {
  const loadingText = actionType === 'advocacy' 
    ? 'Processing your support...' 
    : 'Loading your rewards...';

  return (
    <div className="h-full w-full bg-white flex flex-col items-center justify-center text-white">
      <div className="text-center animate-fade-in">
        <div className="relative w-28 h-28 mx-auto mb-6">
           <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-20"></div>
           <GlobeOneLogoIcon className="w-28 h-28" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">GlobeOne</h1>
        <p className="mt-2 text-gray-500">{loadingText}</p>
      </div>
    </div>
  );
};

export default LoadingView;