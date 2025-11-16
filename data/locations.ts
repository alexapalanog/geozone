import type { LocationData } from '../types';

export const locations: LocationData[] = [
  {
    id: 'intramuros',
    name: 'Intramuros, Manila',
    distance: 'nearby',
    factsTitle: 'The Walled City',
    factsContent: `Step back in time and explore the historic heart of Manila. Intramuros, with its cobblestone streets and centuries-old walls, is a treasure trove of Philippine history and culture.`,
    image: 'https://images.unsplash.com/photo-1627926107399-598a39fe881c?q=80&w=1965&auto=format&fit=crop',
    hasReward: true,
    sections: [
      {
        title: 'Manila Cathedral',
        content: 'A testament to Filipino resilience, this stunning Minor Basilica has been rebuilt eight times after fires, earthquakes, and wars. Its Neo-Romanesque architecture and magnificent pipe organ are a sight to behold.',
        image: 'https://images.unsplash.com/photo-1613955217337-024e049d75b3?q=80&w=2072&auto=format&fit=crop',
      },
      {
        title: 'Fort Santiago',
        content: 'This citadel first built by Spanish conquistador, Miguel López de Legazpi, is one of the most important historical sites in Manila. It served as a defense fortress and a prison, most famously for the national hero, José Rizal, before his execution.',
        image: 'https://images.unsplash.com/photo-1596439250181-f635547a503a?q=80&w=1935&auto=format&fit=crop',
      },
      {
        title: 'San Agustin Church',
        content: 'A UNESCO World Heritage site, San Agustin is the oldest stone church in the Philippines, having survived seven earthquakes and two fires. Its breathtaking Trompe-l\'oeil ceiling paintings create a stunning 3D illusion.',
        image: 'https://images.unsplash.com/photo-1617894938081-372b3a1914c0?q=80&w=2070&auto=format&fit=crop',
      }
    ],
  },
  {
    id: 'pasig-river',
    name: 'Pasig River',
    distance: 'Manila',
    factsTitle: 'River of Life',
    factsContent: `The historic river that flows through Manila is now undergoing significant rehabilitation, transforming into a symbol of urban renewal. Ferries now cruise its waters, offering a unique perspective of the city.`,
    image: 'https://images.unsplash.com/photo-1623812735234-730a6c07d33d?q=80&w=1935&auto=format&fit=crop',
    hasReward: false,
    sections: [
      {
        title: 'Jones Bridge: The Queen of Bridges',
        content: 'Connecting Binondo and Intramuros, this rebuilt neoclassical bridge is adorned with ornate statues and offers stunning views of the city skyline, especially at night.',
        image: 'https://images.unsplash.com/photo-1610989569832-3581774b3343?q=80&w=2070&auto=format&fit=crop',
      },
      {
        title: 'The Pasig River Ferry Service',
        content: 'Rediscover Manila from a different angle. The ferry service provides an alternative mode of transport that bypasses traffic, offering scenic views of historic landmarks and modern developments along the riverbanks.',
        image: 'https://images.unsplash.com/photo-1596724398126-5f7a89647238?q=80&w=1932&auto=format&fit=crop',
      }
    ]
  },
  {
    id: 'binondo',
    name: 'Binondo, Manila',
    distance: 'Manila',
    factsTitle: `World's Oldest Chinatown`,
    factsContent: `Welcome to the world's oldest Chinatown. A vibrant district of historic streets, incredible food, and bustling markets. It's a testament to the deep-rooted Filipino-Chinese heritage.`,
    image: 'https://images.unsplash.com/photo-1620029314115-e24b74a5d3f4?q=80&w=2070&auto=format&fit=crop',
    hasReward: false,
    sections: [
        {
            title: 'Binondo Church',
            content: 'Also known as the Minor Basilica of Saint Lorenzo Ruiz, this historic church has been a cornerstone of the community since 1596. Its beautiful Spanish-style architecture and octagonal bell tower are iconic landmarks.',
            image: 'https://images.unsplash.com/photo-1620029314115-e24b74a5d3f4?q=80&w=2070&auto=format&fit=crop',
        },
        {
            title: 'A Culinary Adventure',
            content: 'Dive into a foodie paradise. From the legendary soup dumplings of Dong Bei to the classic hopia from Eng Bee Tin, Binondo\'s streets offer an unforgettable taste of authentic Chinese-Filipino cuisine.',
            image: 'https://images.unsplash.com/photo-1589475512982-1ebd1a46910a?q=80&w=1974&auto=format&fit=crop',
        }
    ]
  },
  {
    id: 'luneta-park',
    name: 'Luneta Park',
    distance: 'Manila',
    factsTitle: 'A Park of Heroes',
    factsContent: `Officially known as Rizal Park, this is one of the largest urban parks in Asia. It is a place of great historical significance and remains a favorite leisure spot for Filipinos today.`,
    image: 'https://images.unsplash.com/photo-1588005391834-6690411bfa67?q=80&w=2070&auto=format&fit=crop',
    hasReward: false,
    sections: [
        {
            title: 'The Rizal Monument',
            content: 'This memorial stands as a tribute to the Philippines\' national hero, Dr. José Rizal. The monument, which contains his remains, is guarded by soldiers and serves as a powerful symbol of Filipino nationalism.',
            image: 'https://images.unsplash.com/photo-1588005391834-6690411bfa67?q=80&w=2070&auto=format&fit=crop',
        },
        {
            title: 'Gardens and Greenery',
            content: 'Escape the city\'s hustle. The park features the serene Chinese and Japanese Gardens, open-lawn areas, and fountains, providing a peaceful green space for relaxation and recreation in the heart of Manila.',
            image: 'https://images.unsplash.com/photo-1605338035222-262845345591?q=80&w=1932&auto=format&fit=crop',
        }
    ]
  },
];