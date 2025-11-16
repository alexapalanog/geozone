import React, { useRef, useEffect, useState } from 'react';
import type { LocationData, LocationSection } from '../types';
import { ArrowLeftIcon } from './icons';

// Custom hook to detect when an element is on screen
const useOnScreen = (options: IntersectionObserverInit) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);

    return [ref, isVisible] as const;
};

const ContentSection: React.FC<{ section: LocationSection; index: number }> = ({ section, index }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    const isEven = index % 2 === 0;

    return (
        <div 
            ref={ref}
            className={`transition-all duration-700 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
            <div className={`flex flex-col md:flex-row items-center gap-6 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                <img src={section.image} alt={section.title} className="w-full md:w-1/2 h-56 object-cover rounded-xl shadow-lg" />
                <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-blue-800 mb-2">{section.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{section.content}</p>
                </div>
            </div>
        </div>
    );
};

const ContentView: React.FC<{ location: LocationData; onContentRead: () => void; onBack: () => void; }> = ({ location, onContentRead, onBack }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentRef = scrollRef.current;
        if (currentRef) {
            currentRef.scrollTop = 0;
        }
    }, [location]);

    return (
        <div ref={scrollRef} className="h-full w-full bg-gray-50 flex flex-col overflow-y-auto">
            <div className="relative h-72 w-full flex-shrink-0">
                <img src={location.image} alt={location.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <button 
                    onClick={onBack} 
                    className="absolute top-4 left-4 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors z-10"
                >
                    <ArrowLeftIcon className="w-6 h-6" />
                </button>
                <div className="absolute bottom-0 left-0 p-6">
                    <h1 className="text-3xl font-bold text-white shadow-lg">{location.name}</h1>
                    <p className="text-white/90 mt-1">{location.factsTitle}</p>
                </div>
            </div>

            <div className="p-6 pb-24 flex-grow flex flex-col">
                <div className="flex-grow">
                    {location.sections ? (
                        <div className="space-y-12">
                            <div className="text-gray-700 leading-relaxed animate-fade-in-up">
                                <p>{location.factsContent}</p>
                            </div>
                            {location.sections.map((section, index) => (
                                <ContentSection key={index} section={section} index={index} />
                            ))}
                        </div>
                    ) : (
                        <div>
                            <div className="animate-fade-in-up">
                                <h2 className="text-2xl font-bold text-blue-800 mb-4">{location.factsTitle}</h2>
                                <div className="text-gray-700 leading-relaxed whitespace-pre-line prose">
                                    {location.factsContent.split('\n\n').map((paragraph, index) => {
                                        const htmlContent = { __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') };
                                        return <p key={index} className="mb-4" dangerouslySetInnerHTML={htmlContent} />;
                                    })}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                
                {location.hasReward && (
                    <div className="mt-auto pt-10">
                        <div className="text-center mb-4 text-gray-600 animate-fade-in">
                            You'll receive <strong className="text-blue-600">5 Gokenzone</strong> points!
                        </div>
                        <button 
                            onClick={onContentRead} 
                            className="w-full text-center py-4 px-6 rounded-xl font-bold text-white transition-all duration-300 shadow-lg bg-blue-600 hover:bg-blue-700 transform hover:scale-105 animate-wiggle"
                        >
                            Open via GlobeOne to Earn 5 Points
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ContentView;