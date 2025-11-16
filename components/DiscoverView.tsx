import React from 'react';
import { locations } from '../data/locations';
import type { LocationData } from '../types';
import { MapPinIcon } from './icons';

const LocationCard: React.FC<{ location: LocationData, onSelect: () => void }> = ({ location, onSelect }) => {
    return (
        <div 
            onClick={onSelect}
            className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 cursor-pointer h-80 flex flex-col justify-end"
        >
            <img className="absolute h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" src={location.image} alt={location.name} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="relative p-5 text-white">
                <span className="block text-xs font-semibold uppercase tracking-wider opacity-80">{location.distance}</span>
                <h3 className="font-bold text-3xl mt-1" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>{location.name}</h3>
            </div>
        </div>
    );
};


const DiscoverView: React.FC<{ onSelectLocation: (location: LocationData) => void }> = ({ onSelectLocation }) => {
    const discoverLocations = locations.filter(loc => loc.id !== 'luneta-park');
    
    return (
        <div className="h-full w-full bg-gray-100 flex flex-col animate-fade-in">
            <header className="p-4 pt-6 bg-white border-b shadow-sm">
                <h1 className="text-2xl font-bold text-blue-800 text-center">Discover Places</h1>
            </header>
            <div className="flex-grow overflow-y-auto p-6 space-y-6">
                {discoverLocations.map((loc, index) => (
                    <div key={loc.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms`}}>
                        <LocationCard location={loc} onSelect={() => onSelectLocation(loc)} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DiscoverView;