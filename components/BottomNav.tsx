import React from 'react';
import { HomeIcon, CompassIcon, HeartIcon } from './icons';
import type { AppView } from '../App';

const NavItem: React.FC<{ icon: React.ReactNode; label: string; isActive?: boolean, onClick: () => void }> = ({ icon, label, isActive, onClick }) => {
    return (
        <button onClick={onClick} className="flex flex-col items-center justify-center w-full h-full text-center group">
            <div className={`transition-all duration-300 transform group-hover:scale-110 ${isActive ? 'text-blue-600' : 'text-gray-500 group-hover:text-blue-500'}`}>
                {icon}
            </div>
            <span className={`text-xs mt-1 transition-colors ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-500 group-hover:text-blue-500'}`}>
                {label}
            </span>
        </button>
    );
}

const BottomNav: React.FC<{ activeView: AppView; onNavigate: (view: AppView) => void; }> = ({ activeView, onNavigate }) => {
    return (
        <div className="flex-shrink-0 h-20 w-full bg-white/80 backdrop-blur-md border-t border-gray-200 shadow-[0_-1px_10px_rgba(0,0,0,0.05)]">
            <div className="flex justify-around items-center h-full max-w-md mx-auto">
                <NavItem 
                    icon={<HomeIcon className="w-6 h-6" />}
                    label="Home"
                    isActive={activeView === 'content'}
                    onClick={() => onNavigate('content')}
                />
                 <NavItem 
                    icon={<HeartIcon className="w-6 h-6" />}
                    label="Our Heritage"
                    isActive={activeView === 'advocacy'}
                    onClick={() => onNavigate('advocacy')}
                />
                 <NavItem 
                    icon={<CompassIcon className="w-6 h-6" />}
                    label="Discover"
                    isActive={activeView === 'discover'}
                    onClick={() => onNavigate('discover')}
                />
            </div>
        </div>
    );
};

export default BottomNav;