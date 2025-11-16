import type { LocationData } from '../types';

export const locations: LocationData[] = [
  {
    id: 'intramuros',
    name: 'Intramuros, Manila',
    distance: 'nearby',
    factsTitle: 'The Walled City',
    factsContent: `Step back in time and explore the historic heart of Manila. Intramuros, with its cobblestone streets and centuries-old walls, is a treasure trove of Philippine history and culture.`,
    image: '/intramuros.png',
    hasReward: true,
    sections: [
      {
        title: 'Manila Cathedral',
        content: 'A testament to Filipino resilience, this stunning Minor Basilica has been rebuilt eight times after fires, earthquakes, and wars. Its Neo-Romanesque architecture and magnificent pipe organ are a sight to behold.',
        image: '/manila cathedral.jpg',
      },
      {
        title: 'Fort Santiago',
        content: 'This citadel first built by Spanish conquistador, Miguel López de Legazpi, is one of the most important historical sites in Manila. It served as a defense fortress and a prison, most famously for the national hero, José Rizal, before his execution.',
        image: '/fort santiago.avif',
      },
      {
        title: 'San Agustin Church',
        content: 'A UNESCO World Heritage site, San Agustin is the oldest stone church in the Philippines, having survived seven earthquakes and two fires. Its breathtaking Trompe-l\'oeil ceiling paintings create a stunning 3D illusion.',
        image: '/san agustin.jpg',
      }
    ],
  },
  {
    id: 'pasig-river',
    name: 'Pasig River',
    distance: 'Manila',
    factsTitle: 'River of Life',
    factsContent: `The historic river that flows through Manila is now undergoing significant rehabilitation, transforming into a symbol of urban renewal. Ferries now cruise its waters, offering a unique perspective of the city.`,
    image: '/pasig.png',
    hasReward: false,
    sections: [
      {
        title: 'Jones Bridge: The Queen of Bridges',
        content: 'Connecting Binondo and Intramuros, this rebuilt neoclassical bridge is adorned with ornate statues and offers stunning views of the city skyline, especially at night.',
        image: '/3.png',
      },
      {
        title: 'The Pasig River Ferry Service',
        content: 'Rediscover Manila from a different angle. The ferry service provides an alternative mode of transport that bypasses traffic, offering scenic views of historic landmarks and modern developments along the riverbanks.',
        image: '/1.png',
      }
    ]
  },
  {
    id: 'binondo',
    name: 'Binondo, Manila',
    distance: 'Manila',
    factsTitle: `World's Oldest Chinatown`,
    factsContent: `Welcome to the world's oldest Chinatown. A vibrant district of historic streets, incredible food, and bustling markets. It's a testament to the deep-rooted Filipino-Chinese heritage.`,
    image: '/binondo.png',
    hasReward: false,
    sections: [
        {
            title: 'Binondo Church',
            content: 'Also known as the Minor Basilica of Saint Lorenzo Ruiz, this historic church has been a cornerstone of the community since 1596. Its beautiful Spanish-style architecture and octagonal bell tower are iconic landmarks.',
            image: '/3.png',
        },
        {
            title: 'A Culinary Adventure',
            content: 'Dive into a foodie paradise. From the legendary soup dumplings of Dong Bei to the classic hopia from Eng Bee Tin, Binondo\'s streets offer an unforgettable taste of authentic Chinese-Filipino cuisine.',
            image: '/1.png',
        }
    ]
  },
  {
    id: 'luneta-park',
    name: 'Luneta Park',
    distance: 'Manila',
    factsTitle: 'A Park of Heroes',
    factsContent: `Officially known as Rizal Park, this is one of the largest urban parks in Asia. It is a place of great historical significance and remains a favorite leisure spot for Filipinos today.`,
    image: '/2.png',
    hasReward: false,
    sections: [
        {
            title: 'The Rizal Monument',
            content: 'This memorial stands as a tribute to the Philippines\' national hero, Dr. José Rizal. The monument, which contains his remains, is guarded by soldiers and serves as a powerful symbol of Filipino nationalism.',
            image: '/3.png',
        },
        {
            title: 'Gardens and Greenery',
            content: 'Escape the city\'s hustle. The park features the serene Chinese and Japanese Gardens, open-lawn areas, and fountains, providing a peaceful green space for relaxation and recreation in the heart of Manila.',
            image: '/1.png',
        }
    ]
  },
];