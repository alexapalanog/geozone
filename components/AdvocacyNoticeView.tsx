import React from 'react';

const AdvocacyNoticeView: React.FC<{ onReturn: () => void }> = ({ onReturn }) => {
  return (
    <div 
      className="h-full w-full flex flex-col items-center justify-center p-6 text-center animate-fade-in bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554147090-e1221a04a025?q=80&w=2070&auto=format&fit=crop')" }}
    >
       <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 max-w-sm w-full animate-pop-in">
        <h1 className="text-2xl font-bold text-blue-800">Thank You!</h1>
        <p className="mt-3 text-gray-700">
            You'll be directed to the GlobeOne app to donate for heritage preservation. Your support makes a difference.
        </p>
        <button
            onClick={onReturn}
            className="mt-8 w-full text-center py-3 px-6 rounded-xl font-bold text-white transition-all duration-300 shadow-lg bg-blue-600 hover:bg-blue-700 transform hover:scale-105"
        >
            Return to Home
        </button>
      </div>
    </div>
  );
};

export default AdvocacyNoticeView;
