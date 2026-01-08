
export const cities = [
  { name: 'Tokyo', nights: 5, color: '#ef4444', highlights: ['Akihabara', 'Nintendo Tokyo', 'Shibuya (JJK)', 'Asakusa (Demon Slayer)'] },
  { name: 'Kyoto', nights: 4, color: '#8b5cf6', highlights: ['Samurai X sites', 'Fushimi Inari', 'Gion', 'Nijo Castle'] },
  { name: 'Hiroshima', nights: 2, color: '#06b6d4', highlights: ['Peace Memorial', 'Miyajima', 'Himeji (stop)'] },
  { name: 'Osaka', nights: 4, color: '#22c55e', highlights: ['Nintendo World', 'Osaka Castle', 'Den Den Town'] },
];

export const itinerary = [
  {
    day: 1, city: 'Tokyo', title: 'Arrival',
    mapUrl: 'https://www.google.com/maps/search/Tokyo+Arrival',
    activities: [
      { name: 'Arrive Tokyo', imgUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80' },
      { name: 'Check-in Shinjuku', imgUrl: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=400&q=80' },
      { name: 'Explore neighborhood', imgUrl: 'https://images.unsplash.com/photo-1536098565842-c45119ad79c4?w=400&q=80' },
    ],
  },
  {
    day: 2, city: 'Tokyo', title: 'Akihabara Day',
    mapUrl: 'https://www.google.com/maps/search/Akihabara+Shops',
    activities: [
      { name: 'Animate Shop', imgUrl: 'https://images.unsplash.com/photo-1566138285614-9cd042ba4d7c?w=400&q=80' },
      { name: 'Radio Kaikan', imgUrl: 'https://images.unsplash.com/photo-1627310570535-b293c830600a?w=400&q=80' },
      { name: 'Mandarake', imgUrl: 'https://images.unsplash.com/photo-1613371844497-a74867c1eb75?w=400&q=80' },
      { name: 'Super Potato', imgUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80' },
    ],
  },
  {
    day: 3, city: 'Tokyo', title: 'Nintendo & Gaming',
    mapUrl: 'https://www.google.com/maps/search/Shibuya+Nintendo+Pokemon',
    activities: [
      { name: 'Nintendo Tokyo', imgUrl: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&q=80' },
      { name: 'Pokemon Center', imgUrl: 'https://images.unsplash.com/photo-1623945227092-230d7833076a?w=400&q=80' },
      { name: 'Harajuku', imgUrl: 'https://images.unsplash.com/photo-1580131434915-08e137684067?w=400&q=80' },
      { name: 'Shibuya Crossing', imgUrl: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=400&q=80' },
    ],
  },
  {
    day: 4, city: 'Tokyo', title: 'Demon Slayer & Samurai',
    mapUrl: 'https://www.google.com/maps/search/Asakusa+teamLab+Samurai',
    activities: [
      { name: 'Senso-ji Temple', imgUrl: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&q=80' },
      { name: 'teamLab Planets', imgUrl: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=400&q=80' },
      { name: 'Samurai Armor', imgUrl: 'https://images.unsplash.com/photo-1620310570535-b293c830600a?w=400&q=80' },
    ],
  },
  {
    day: 5, city: 'Tokyo', title: 'Kamakura Day Trip',
    mapUrl: 'https://www.google.com/maps/search/Kamakura+Great+Buddha',
    activities: [
      { name: 'Great Buddha', imgUrl: 'https://images.unsplash.com/photo-1582231435206-89689dfa861f?w=400&q=80' },
      { name: 'Zen temples', imgUrl: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&q=80' },
      { name: 'Kamakura Streets', imgUrl: 'https://images.unsplash.com/photo-1605634543789-9a0d8923f119?w=400&q=80' },
    ],
  },
  {
    day: 6, city: 'Travel', title: 'Tokyo → Kyoto',
    mapUrl: 'https://www.google.com/maps/search/Kyoto+Travel',
    activities: [
      { name: 'Shinkansen', imgUrl: 'https://images.unsplash.com/photo-1475938476650-3164675af7da?w=400&q=80' },
      { name: 'Kyoto Stay', imgUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&q=80' },
      { name: 'Pontocho Alley', imgUrl: 'https://images.unsplash.com/photo-1552554652-3a5e8c68383e?w=400&q=80' },
    ],
  },
  {
    day: 7, city: 'Kyoto', title: 'Higashiyama & Gion',
    mapUrl: 'https://www.google.com/maps/search/Kiyomizu+Gion',
    activities: [
      { name: 'Kiyomizu-dera', imgUrl: 'https://images.unsplash.com/photo-1601309584882-680470248bc4?w=400&q=80' },
      { name: 'Kimono Gion', imgUrl: 'https://images.unsplash.com/photo-1542931287-023b922fa89b?w=400&q=80' },
      { name: 'Gion Night', imgUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&q=80' },
    ],
  },
  {
    day: 8, city: 'Kyoto', title: 'Samurai X Pilgrimage',
    mapUrl: 'https://www.google.com/maps/search/Arashiyama+Ikedaya+Inn',
    activities: [
      { name: 'Bamboo Grove', imgUrl: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80' },
      { name: 'Ikedaya Kyoto', imgUrl: 'https://images.unsplash.com/photo-1621213233890-449e798f0290?w=400&q=80' },
      { name: 'Ryozen Museum', imgUrl: 'https://images.unsplash.com/photo-1558409057-bbe679023136?w=400&q=80' },
    ],
  },
  {
    day: 9, city: 'Kyoto', title: 'Fushimi + Nara',
    mapUrl: 'https://www.google.com/maps/search/Fushimi+Inari+Nara+Todaiji',
    activities: [
      { name: 'Fushimi Inari', imgUrl: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=400&q=80' },
      { name: 'Nara Deer', imgUrl: 'https://images.unsplash.com/photo-1524413159693-3b841b1c4bb9?w=400&q=80' },
      { name: 'Todai-ji Buddha', imgUrl: 'https://images.unsplash.com/photo-1570191935041-923f05351a9a?w=400&q=80' },
    ],
  },
  {
    day: 10, city: 'Travel', title: 'Kyoto → Himeji → Hiroshima',
    mapUrl: 'https://www.google.com/maps/search/Himeji+Castle+Hiroshima',
    activities: [
      { name: 'Himeji Castle', imgUrl: 'https://images.unsplash.com/photo-1549487333-66275812e946?w=400&q=80' },
      { name: 'Hiroshima City', imgUrl: 'https://images.unsplash.com/photo-1606560942468-b8070966f362?w=400&q=80' },
    ],
  },
  {
    day: 11, city: 'Hiroshima', title: 'Peace Memorial',
    mapUrl: 'https://www.google.com/maps/search/Hiroshima+Peace+Memorial',
    activities: [
      { name: 'Peace Museum', imgUrl: 'https://images.unsplash.com/photo-1616422830304-7a32d1694f55?w=400&q=80' },
      { name: 'A-Bomb Dome', imgUrl: 'https://images.unsplash.com/photo-1606560942468-b8070966f362?w=400&q=80' },
      { name: 'Okonomiyaki', imgUrl: 'https://images.unsplash.com/photo-1598966739654-5e9a252d8c32?w=400&q=80' },
    ],
  },
  {
    day: 12, city: 'Hiroshima', title: 'Miyajima Island',
    mapUrl: 'https://www.google.com/maps/search/Miyajima+Itsukushima+Shrine',
    activities: [
      { name: 'Floating Torii', imgUrl: 'https://images.unsplash.com/photo-1542640244-7e672d6cef21?w=400&q=80' },
      { name: 'Itsukushima Shrine', imgUrl: 'https://images.unsplash.com/photo-1558862107-d49ef2a04d72?w=400&q=80' },
    ],
  },
  {
    day: 13, city: 'Osaka', title: 'Nintendo World!',
    mapUrl: 'https://www.google.com/maps/search/Universal+Studios+Japan+Nintendo',
    activities: [
      { name: 'Nintendo World', imgUrl: 'https://images.unsplash.com/photo-1627931367011-e708765f0885?w=400&q=80' },
      { name: 'Mario Kart Ride', imgUrl: 'https://images.unsplash.com/photo-1632314546522-83244247814b?w=400&q=80' },
      { name: 'Yoshi Adventure', imgUrl: 'https://images.unsplash.com/photo-1631558188167-1da884394034?w=400&q=80' },
    ],
  },
  {
    day: 14, city: 'Osaka', title: 'Osaka Castle',
    mapUrl: 'https://www.google.com/maps/search/Osaka+Castle+Den+Den+Town',
    activities: [
      { name: 'Osaka Castle', imgUrl: 'https://images.unsplash.com/photo-1590256153835-06900f86532d?w=400&q=80' },
      { name: 'Den Den Town', imgUrl: 'https://images.unsplash.com/photo-1604928141064-207cea6f571f?w=400&q=80' },
    ],
  },
  {
    day: 15, city: 'Osaka', title: 'Culture & Food',
    mapUrl: 'https://www.google.com/maps/search/Dotonbori+Kuromon+Market+Shinsekai',
    activities: [
      { name: 'Dotonbori Neon', imgUrl: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=400&q=80' },
      { name: 'Shinsekai District', imgUrl: 'https://images.unsplash.com/photo-1545194454-9467d0220677?w=400&q=80' },
      { name: 'Kuromon Market', imgUrl: 'https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?w=400&q=80' },
    ],
  },
  {
    day: 16, city: 'Osaka', title: 'Departure',
    mapUrl: 'https://www.google.com/maps/search/Kansai+Airport',
    activities: [
      { name: 'Final Shopping', imgUrl: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=400&q=80' },
      { name: 'KIX Airport', imgUrl: 'https://images.unsplash.com/photo-1628185567845-a925439e6f66?w=400&q=80' },
    ],
  },
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
