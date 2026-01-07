// src/data/itineraryData.js

export const cities = [
  { 
    name: 'Tokyo', 
    nights: 5, 
    color: '#ef4444', 
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
    highlights: ['Akihabara', 'Nintendo Tokyo', 'Shibuya (JJK)', 'Asakusa (Demon Slayer)'] 
  },
  { 
    name: 'Kyoto', 
    nights: 4, 
    color: '#8b5cf6', 
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    highlights: ['Samurai X sites', 'Fushimi Inari', 'Gion', 'Nijo Castle'] 
  },
  { 
    name: 'Hiroshima', 
    nights: 2, 
    color: '#06b6d4', 
    image: 'https://images.unsplash.com/photo-1552650272-b8a34e21bc4b?auto=format&fit=crop&w=800&q=80',
    highlights: ['Peace Memorial', 'Miyajima', 'Himeji (stop)'] 
  },
  { 
    name: 'Osaka', 
    nights: 4, 
    color: '#22c55e', 
    image: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=800&q=80',
    highlights: ['Nintendo World', 'Osaka Castle', 'Den Den Town'] 
  },
];

export const itinerary = [
  { day: 1, city: 'Tokyo', title: 'Arrival', image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80', activities: ['Arrive Tokyo', 'Check-in Shinjuku/Asakusa', 'Explore neighborhood'] },
  { day: 2, city: 'Tokyo', title: 'Akihabara Day', image: 'https://images.unsplash.com/photo-1566138285614-9cd042ba4d7c?auto=format&fit=crop&w=600&q=80', activities: ['Animate 7 floors', 'Radio Kaikan', 'Mandarake', 'Super Potato'] },
  { day: 3, city: 'Tokyo', title: 'Nintendo & Gaming', image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=600&q=80', activities: ['Nintendo Tokyo', 'Pokemon Center', 'Harajuku (JJK)', 'Shibuya'] },
  { day: 4, city: 'Tokyo', title: 'Demon Slayer & Samurai', image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=600&q=80', activities: ['Senso-ji (Muzan scene)', 'TeamLab Planets', 'Samurai Museum'] },
  { day: 5, city: 'Tokyo', title: 'Kamakura Day Trip', image: 'https://images.unsplash.com/photo-1582231435206-89689dfa861f?auto=format&fit=crop&w=600&q=80', activities: ['Samurai capital', 'Great Buddha', 'Zen temples', 'Return Tokyo'] },
  { day: 6, city: 'Travel', title: 'Tokyo → Kyoto', image: 'https://images.unsplash.com/photo-1475938476650-3164675af7da?auto=format&fit=crop&w=600&q=80', activities: ['Shinkansen 2h15m', 'Check-in', 'Pontocho evening'] },
  { day: 7, city: 'Kyoto', title: 'Higashiyama & Gion', image: 'https://images.unsplash.com/photo-1601309584882-680470248bc4?auto=format&fit=crop&w=600&q=80', activities: ['Kiyomizu-dera', 'Kimono rental', 'Gion geisha district'] },
  { day: 8, city: 'Kyoto', title: 'Samurai X Pilgrimage', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=600&q=80', activities: ['Arashiyama', 'Ikedaya Inn', 'Shinsengumi sites', 'Ryozen Museum'] },
  { day: 9, city: 'Kyoto', title: 'Fushimi + Nara', image: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?auto=format&fit=crop&w=600&q=80', activities: ['Fushimi Inari early', 'Nara deer park', 'Todai-ji Buddha', 'Tea ceremony'] },
  { day: 10, city: 'Travel', title: 'Kyoto → Himeji → Hiroshima', image: 'https://images.unsplash.com/photo-1549487333-66275812e946?auto=format&fit=crop&w=600&q=80', activities: ['Himeji Castle stop', 'Continue to Hiroshima', 'Evening explore'] },
  { day: 11, city: 'Hiroshima', title: 'Peace Memorial', image: 'https://images.unsplash.com/photo-1606560942468-b8070966f362?auto=format&fit=crop&w=600&q=80', activities: ['Peace Museum', 'A-Bomb Dome', 'Memorial Park', 'Okonomiyaki'] },
  { day: 12, city: 'Hiroshima', title: 'Miyajima Island', image: 'https://images.unsplash.com/photo-1542640244-7e672d6cef21?auto=format&fit=crop&w=600&q=80', activities: ['Floating torii', 'Itsukushima Shrine', 'Mt. Misen', 'Train to Osaka'] },
  { day: 13, city: 'Osaka', title: 'Nintendo World!', image: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?auto=format&fit=crop&w=600&q=80', activities: ['USJ early arrival', 'Mario Kart', 'Yoshi Adventure', 'DK Mine Cart'] },
  { day: 14, city: 'Osaka', title: 'USJ Day 2 or Explore', image: 'https://images.unsplash.com/photo-1632314546522-83244247814b?auto=format&fit=crop&w=600&q=80', activities: ['Option: More USJ', 'Or: Osaka Castle', 'Den Den Town anime'] },
  { day: 15, city: 'Osaka', title: 'Culture & Food', image: 'https://images.unsplash.com/photo-1545194454-9467d0220677?auto=format&fit=crop&w=600&q=80', activities: ['Nintendo Osaka', 'Kuromon Market', 'Dotonbori', 'Shinsekai'] },
  { day: 16, city: 'Osaka', title: 'Departure', image: 'https://images.unsplash.com/photo-1628185567845-a925439e6f66?auto=format&fit=crop&w=600&q=80', activities: ['Final shopping', 'KIX Airport', 'Fly home'] },
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
