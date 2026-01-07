import { TRANSPORT_COST } from './constants';

export const mvdFlights = [
  { airline: 'LATAM', fareType: 'Plus', departure: 'Apr 21', return: 'May 6', days: 15, price: 1768, duration: '28-32h', stops: 2, via: 'São Paulo (GRU)', rating: '⭐⭐⭐⭐', notes: 'Best MVD option, bags included' },
  { airline: 'LATAM', fareType: 'Plus', departure: 'May 7', return: 'May 23', days: 16, price: 1796, duration: '29h 10m', stops: 2, via: 'São Paulo (GRU)', rating: '⭐⭐⭐⭐', notes: 'Post-Golden Week, less crowds' },
  { airline: 'Aerolíneas', fareType: 'Economy', departure: 'Apr 25', return: 'May 10', days: 15, price: 1793, duration: '34-40h', stops: 3, via: 'Buenos Aires + connection', rating: '⭐⭐⭐', notes: 'Routes through EZE anyway!' },
  { airline: 'KLM', fareType: 'Economy', departure: 'Apr 22', return: 'May 8', days: 16, price: 1821, duration: '30-36h', stops: 2, via: 'Amsterdam (AMS)', rating: '⭐⭐⭐⭐', notes: 'European routing, good service' },
  { airline: 'Copa + ANA', fareType: 'Classic', departure: 'May 10', return: 'May 26', days: 16, price: 1832, duration: '32-38h', stops: 2, via: 'Panama (PTY)', rating: '⭐⭐⭐', notes: 'Star Alliance, ANA leg excellent' },
];

export const ezeFlights = [
  { airline: 'Copa', fareType: 'Classic', departure: 'Apr 28', return: 'May 14', days: 16, price: 1327, duration: '30-34h', stops: 1, via: 'Panama (PTY)', best: true, rating: '⭐⭐⭐⭐⭐', notes: '🏆 CHEAPEST! Bags included' },
  { airline: 'Copa', fareType: 'Classic', departure: 'May 7', return: 'May 22', days: 15, price: 1365, duration: '31h 10m', stops: 1, via: 'Panama (PTY)', rating: '⭐⭐⭐⭐⭐', notes: 'Post-Golden Week sweet spot' },
  { airline: 'LATAM', fareType: 'Plus', departure: 'Apr 21', return: 'May 6', days: 15, price: 1550, duration: '26-28h', stops: 1, via: 'São Paulo (GRU)', fastest: true, rating: '⭐⭐⭐⭐⭐', notes: '⚡ FASTEST! Only 26h' },
  { airline: 'LATAM', fareType: 'Plus', departure: 'May 13', return: 'May 29', days: 16, price: 1487, duration: '27h 15m', stops: 1, via: 'São Paulo (GRU)', rating: '⭐⭐⭐⭐⭐', notes: 'Wisteria season, great timing' },
  { airline: 'Avianca', fareType: 'Economy', departure: 'Apr 21', return: 'May 6', days: 15, price: 1500, duration: '32-36h', stops: 2, via: 'Bogotá (BOG)', rating: '⭐⭐⭐⭐', notes: 'Good value, bags included' },
  { airline: 'Air Canada', fareType: 'Standard', departure: 'Apr 25', return: 'May 11', days: 16, price: 1817, duration: '28-32h', stops: 1, via: 'Toronto (YYZ)', rating: '⭐⭐⭐⭐', notes: 'Star Alliance, good service' },
  { airline: 'Turkish', fareType: 'Economy', departure: 'May 5', return: 'May 21', days: 16, price: 1916, duration: '30-34h', stops: 1, via: 'Istanbul (IST)', rating: '⭐⭐⭐⭐', notes: '23kg bags always included' },
  { airline: 'Emirates', fareType: 'Economy', departure: 'Apr 22', return: 'May 8', days: 16, price: 1969, duration: '32-36h', stops: 1, via: 'Dubai (DXB)', bag30kg: true, rating: '⭐⭐⭐⭐⭐', notes: 'Premium service, 30kg bags!' },
];

export const costScenarios = [
  { name: 'MVD Direct', flight: 1768, transport: 0, hotel: 0, total: 1768, savings: 0 },
  { name: 'EZE (Colonia)', flight: 1327, transport: TRANSPORT_COST, hotel: 0, total: 1327 + TRANSPORT_COST, savings: 1768 - (1327 + TRANSPORT_COST) },
  { name: 'EZE + Hotel', flight: 1327, transport: TRANSPORT_COST, hotel: 70, total: 1327 + TRANSPORT_COST + 70, savings: 1768 - (1327 + TRANSPORT_COST + 70) },
  { name: 'EZE (Buquebus)', flight: 1327, transport: 140, hotel: 0, total: 1467, savings: 301 },
];

export const bestDates = [
  { week: 'Apr 1-10', price: 2200, crowds: 95, status: 'avoid', reason: 'Peak sakura', tempHigh: 17, tempLow: 9, rainDays: 10, humidity: '55%', weather: '🌤️ Mild, occasional rain', crowdLevel: '🔴 Extreme' },
  { week: 'Apr 11-20', price: 1600, crowds: 60, status: 'ok', reason: 'Post-sakura', tempHigh: 19, tempLow: 11, rainDays: 9, humidity: '58%', weather: '🌤️ Pleasant spring', crowdLevel: '🟡 High' },
  { week: 'Apr 21-28', price: 1450, crowds: 40, status: 'best', reason: 'Sweet spot', tempHigh: 21, tempLow: 13, rainDays: 8, humidity: '60%', weather: '☀️ Warm & sunny', crowdLevel: '🟢 Moderate' },
  { week: 'Apr 29-May 6', price: 2500, crowds: 100, status: 'avoid', reason: 'Golden Week', tempHigh: 22, tempLow: 14, rainDays: 8, humidity: '62%', weather: '☀️ Warm', crowdLevel: '🔴 Extreme (holiday)' },
  { week: 'May 7-15', price: 1400, crowds: 25, status: 'best', reason: 'Post-holiday calm', tempHigh: 23, tempLow: 15, rainDays: 9, humidity: '65%', weather: '☀️ Perfect spring', crowdLevel: '🟢 Low!' },
  { week: 'May 16-31', price: 1500, crowds: 35, status: 'good', reason: 'Pleasant weather', tempHigh: 25, tempLow: 17, rainDays: 10, humidity: '68%', weather: '🌤️ Warm, humid', crowdLevel: '🟢 Low-Medium' },
];

export const bookingLinks = {
  flights: [
    { name: 'Google Flights', url: 'https://www.google.com/travel/flights?q=buenos%20aires%20to%20tokyo%20april%202026' },
    { name: 'Skyscanner', url: 'https://www.skyscanner.com/routes/buea/tyoa/buenos-aires-to-tokyo.html' },
    { name: 'Kayak', url: 'https://www.kayak.com/flights/EZE-TYO/2026-04-21/2026-05-07' },
    { name: 'Expedia', url: 'https://www.expedia.com/lp/flights/eze/hnd/buenos-aires-to-tokyo' },
  ],
  ferry: [
    { name: 'Buquebus', url: 'https://www.buquebus.com' },
    { name: 'Colonia Express', url: 'https://www.coloniaexpress.com' },
    { name: 'Direct Ferries', url: 'https://www.directferries.com/montevideo_buenos_aires_ferry.htm' },
  ],
};
