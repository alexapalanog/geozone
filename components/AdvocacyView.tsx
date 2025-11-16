
import React from 'react';
import { HeartIcon, LandmarkIcon, TreeIcon } from './icons';

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
        {icon}
        <h3 className="text-lg font-bold text-gray-800 mb-2 mt-4">{title}</h3>
        <p className="text-sm text-gray-600">{children}</p>
    </div>
);

const HistoricalSection: React.FC<{ title: string; image: string; children: React.ReactNode }> = ({ title, image, children }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <div className="p-6">
            <h3 className="text-xl font-bold text-blue-800 mb-2">{title}</h3>
            <p className="text-gray-700 leading-relaxed text-sm">{children}</p>
        </div>
    </div>
);


const AdvocacyView: React.FC<{ onActionClick: () => void }> = ({ onActionClick }) => {
    return (
        <div className="h-full w-full bg-gray-50 flex flex-col animate-fade-in overflow-y-auto">
             <div className="relative h-48 w-full flex-shrink-0">
                <img 
                    src="https://images.unsplash.com/photo-1627926107399-598a39fe881c?q=80&w=1965&auto=format&fit=crop" 
                    alt="Intramuros Walls" 
                    className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                     <header className="text-center text-white p-4">
                        <h1 className="text-3xl font-bold" style={{textShadow: '0 2px 4px rgba(0,0,0,0.5)'}}>Intramuros: Past & Present</h1>
                        <p className="mt-1" style={{textShadow: '0 1px 3px rgba(0,0,0,0.5)'}}>Explore with Purpose.</p>
                    </header>
                </div>
             </div>

            <main className="flex-grow p-6 flex flex-col">
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-blue-800 text-center mb-6">A Glimpse into the Past</h2>
                    <div className="space-y-8">
                        <HistoricalSection
                            title="The Spanish Colonial Era"
                            image="https://images.unsplash.com/photo-1596439250181-f635547a503a?q=80&w=1935&auto=format&fit=crop"
                        >
                            Established in 1571, Intramuros was the seat of the Spanish government. Its formidable walls were built to protect the city from foreign invasions. Churches, schools, and hospitals flourished, making it the center of political, religious, and commercial life.
                        </HistoricalSection>
                        <HistoricalSection
                            title="The Scars of War"
                            image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Intramuros_Manila_WWII.JPG/1280px-Intramuros_Manila_WWII.JPG"
                        >
                            The Battle of Manila in 1945 left Intramuros in ruins. The once-great Walled City was almost completely destroyed. Of its historic buildings, only the San Agustin Church remained standing, a solitary witness to the city's former glory.
                        </HistoricalSection>
                    </div>
                </div>

                <hr className="my-8 border-gray-300" />

                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-blue-800 text-center mb-6">Why This Matters Today</h2>
                    <div className="space-y-6">
                        <InfoCard 
                            icon={<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center"><LandmarkIcon className="w-8 h-8 text-blue-500" /></div>}
                            title="Preserve Heritage"
                        >
                            A portion of our proceeds helps maintain and protect the cultural sites you visit.
                        </InfoCard>
                        <InfoCard 
                            icon={<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center"><TreeIcon className="w-8 h-8 text-green-500" /></div>}
                            title="Support Reforestation"
                        >
                            We partner with local organizations to plant trees, offsetting the carbon footprint of your adventures.
                        </InfoCard>
                        <InfoCard 
                            icon={<div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center"><HeartIcon className="w-8 h-8 text-red-500" /></div>}
                            title="Empower Communities"
                        >
                            Your engagement helps fund local artisans and community projects, ensuring culture thrives.
                        </InfoCard>
                    </div>
                </div>

                <div className="mt-auto pt-10 text-center">
                    <div className="text-center mb-4 text-gray-600 animate-fade-in">
                        Support heritage preservation through our partner, GlobeOne.
                    </div>
                    <button
                        onClick={onActionClick}
                        className="w-full max-w-xs mx-auto text-center py-4 px-6 rounded-xl font-bold text-white transition-all duration-300 shadow-lg bg-blue-600 hover:bg-blue-700 transform hover:scale-105 animate-wiggle"
                    >
                        Join the Movement via GlobeOne
                    </button>
                </div>
            </main>
        </div>
    );
};

export default AdvocacyView;
