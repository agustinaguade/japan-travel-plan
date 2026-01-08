
export const cities = [
  { name: 'Tokyo', nights: 5, color: '#ef4444', highlights: ['Akihabara', 'Nintendo Tokyo', 'Shibuya (JJK)', 'Asakusa (Demon Slayer)'] },
  { name: 'Kyoto', nights: 4, color: '#8b5cf6', highlights: ['Samurai X sites', 'Fushimi Inari', 'Gion', 'Nijo Castle'] },
  { name: 'Hiroshima', nights: 2, color: '#06b6d4', highlights: ['Peace Memorial', 'Miyajima', 'Himeji (stop)'] },
  { name: 'Osaka', nights: 4, color: '#22c55e', highlights: ['Nintendo World', 'Osaka Castle', 'Den Den Town'] },
];

export const itinerary = [
  { 
    day: 1, city: 'Tokyo', title: 'Arrival', 
    image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800', 
    activities: ['Arrive Tokyo', 'Check-in Shinjuku', 'Explore neighborhood'],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Shinjuku+Station+Tokyo'
  },
  { 
    day: 2, city: 'Tokyo', title: 'Akihabara Day', 
    image: 'https://images.unsplash.com/photo-1566138285614-9cd042ba4d7c?w=800', 
    activities: ['Animate 7 floors', 'Radio Kaikan', 'Mandarake', 'Super Potato'],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Akihabara+Radio+Kaikan'
  },
  { 
    day: 3, city: 'Tokyo', title: 'Nintendo & Gaming', 
    image: 'http://googleusercontent.com/image_collection/image_retrieval/6136517856880344491_0', 
    activities: ['Nintendo Tokyo', 'Pokemon Center', 'Harajuku (JJK)', 'Shibuya'],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Nintendo+Tokyo+Shibuya+Parco'
  },
  { 
    day: 4, city: 'Tokyo', title: 'Demon Slayer & Samurai', 
    image: 'http://googleusercontent.com/image_collection/image_retrieval/10345517549297325236_0', 
    activities: ['Senso-ji (Muzan scene)', 'TeamLab Planets', 'Samurai Museum'],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Senso-ji+Temple+Tokyo'
  },
  { 
    day: 5, city: 'Tokyo', title: 'Kamakura Day Trip', 
    image: 'http://googleusercontent.com/image_collection/image_retrieval/15247874209732392057_0', 
    activities: ['Samurai capital', 'Great Buddha', 'Zen temples', 'Return Tokyo'],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kotoku-in+Kamakura'
  },
  { 
    day: 6, city: 'Travel', title: 'Tokyo → Kyoto', 
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800', 
    activities: ['Shinkansen 2h15m', 'Check-in', 'Pontocho evening'],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kyoto+Station'
  },
  { 
    day: 7, city: 'Kyoto', title: 'Higashiyama & Gion', 
    image: 'http://googleusercontent.com/image_collection/image_retrieval/1603915919605782532_0', 
    activities: ['Kiyomizu-dera', 'Kimono rental', 'Gion geisha district'],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kiyomizu-dera+Kyoto'
  },
  { 
    day: 8, city: 'Kyoto', title: 'Samurai X Pilgrimage', 
    image: 'http://googleusercontent.com/image_collection/image_retrieval/12604824883800372533_0', 
    activities: ['Arashiyama', 'Ikedaya Inn', 'Shinsengumi sites', 'Ryozen Museum'],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Arashiyama+Bamboo+Grove'
  },
  { 
    day: 9, city: 'Kyoto', title: 'Fushimi + Nara', 
    image: 'http://googleusercontent.com/image_collection/image_retrieval/12543133903226671087_0', 
    activities: ['Fushimi Inari early', 'Nara deer park', 'Todai-ji Buddha', 'Tea ceremony'],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Fushimi+Inari+Taisha'
  },
  { 
    day: 10, city: 'Travel', title: 'Kyoto → Himeji → Hiroshima', 
    image: 'http://googleusercontent.com/image_collection/image_retrieval/7428359362928825909_0', 
    activities: ['Himeji Castle stop', 'Continue to Hiroshima', 'Evening explore'],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Himeji+Castle'
  },
  { 
    day: 11, city: 'Hiroshima', title: 'Peace Memorial', 
    image: 'http://googleusercontent.com/image_collection/image_retrieval/861822718706000320_0', 
    activities: ['Peace Museum', 'A-Bomb Dome', 'Memorial Park', 'Okonomiyaki'],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hiroshima+Peace+Memorial+Museum'
  },
  { 
    day: 12, city: 'Hiroshima', title: 'Miyajima Island', 
    image: 'http://googleusercontent.com/image_collection/image_retrieval/16887607352333073381_0', 
    activities: ['Floating torii', 'Itsukushima Shrine', 'Mt. Misen', 'Train to Osaka'],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Itsukushima+Shrine'
  },
  { 
    day: 13, city: 'Osaka', title: 'Nintendo World!', 
    image: 'http://googleusercontent.com/image_collection/image_retrieval/10440025121413724174_0', 
    activities: ['USJ early arrival', 'Mario Kart', 'Yoshi Adventure', 'DK Mine Cart'],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Super+Nintendo+World+Osaka'
  },
  { 
    day: 14, city: 'Osaka', title: 'USJ Day 2 or Explore', 
    image: 'http://googleusercontent.com/image_collection/image_retrieval/16717545590251161118_0', 
    activities: ['Option: More USJ', 'Or: Osaka Castle', 'Den Den Town anime'],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Osaka+Castle'
  },
  { 
    day: 15, city: 'Osaka', title: 'Culture & Food', 
    image: 'http://googleusercontent.com/image_collection/image_retrieval/18181255713498946334_0', 
    activities: ['Nintendo Osaka', 'Kuromon Market', 'Dotonbori', 'Shinsekai'],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Dotonbori+Glico+Man'
  },
  { 
    day: 16, city: 'Osaka', title: 'Departure', 
    image: 'https://images.unsplash.com/photo-1628185567845-a925439e6f66?w=800', 
    activities: ['Final shopping', 'KIX Airport', 'Fly home'],
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Kansai+International+Airport'
  }
];

export const dailyCosts = {
  budget: { accommodation: 35, food: 20, transport: 12, attractions: 12, total: 79 },
  midRange: { accommodation: 85, food: 55, transport: 20, attractions: 35, total: 195 },
};

export const attractions = [
  { name: 'USJ + Nintendo World', price: 60, express: 55, notes: 'Book 1 month ahead' },
  { name: 'Himeji Castle (2026)', price: 17, express: 0, notes: 'New price for foreigners' },
  { name: 'Ghibli Museum', price: 7, express: 0, notes: 'Book 10th of prior month' },
  { name: 'TeamLab Planets', price: 28, express: 0, notes: 'Book 2 months ahead' },
  { name: 'Samurai Experience', price: 70, express: 0, notes: 'Includes sword training' },
  { name: 'Nijo Castle', price: 9, express: 0, notes: 'Nightingale floors!' },
  { name: 'Pokemon Cafe', price: 25, express: 0, notes: 'Book 1 month ahead' },
];

export const advanceBooking = [
  { item: 'Golden Week Hotels', when: '3-6 months', priority: 'critical' },
  { item: 'Ghibli Museum', when: '10th of prior month', priority: 'critical' },
  { item: 'USJ Tickets', when: '1-2 months', priority: 'high' },
  { item: 'Pokemon Cafe', when: '1 month', priority: 'high' },
  { item: 'TeamLab', when: '2 months', priority: 'high' },
  { item: 'Ryokan Stay', when: '2-3 months', priority: 'medium' },
  { item: 'Shinkansen (GW)', when: '2+ weeks', priority: 'medium' },
];
