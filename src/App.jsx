import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, AreaChart, Area, PieChart, Pie } from 'recharts';

const JapanTripPlanner = () => {
  // Main section toggle: 'booking' vs 'itinerary'
  const [mainSection, setMainSection] = useState('booking');
  const [bookingTab, setBookingTab] = useState('overview');
  const [itineraryTab, setItineraryTab] = useState('route');

  // ============================================================
  // SECTION 1: BOOKING DATA (Flights, Dates, Transport)
  // ============================================================

  // Transport cost constant (used in calculations, no separate tab needed)
  const TRANSPORT_COST = 90; // Colonia Express round-trip avg

  // ENHANCED: Added dates, days, via, rating, notes
  const mvdFlights = [
    { airline: 'LATAM', fareType: 'Plus', departure: 'Apr 21', return: 'May 6', days: 15, price: 1768, duration: '28-32h', stops: 2, via: 'São Paulo (GRU)', bagIncluded: true, rating: '⭐⭐⭐⭐', notes: 'Best MVD option, bags included' },
    { airline: 'LATAM', fareType: 'Plus', departure: 'May 7', return: 'May 23', days: 16, price: 1796, duration: '29h 10m', stops: 2, via: 'São Paulo (GRU)', bagIncluded: true, rating: '⭐⭐⭐⭐', notes: 'Post-Golden Week, less crowds' },
    { airline: 'Aerolíneas', fareType: 'Economy', departure: 'Apr 25', return: 'May 10', days: 15, price: 1793, duration: '34-40h', stops: 3, via: 'Buenos Aires + connection', bagIncluded: true, rating: '⭐⭐⭐', notes: 'Routes through EZE anyway!' },
    { airline: 'KLM', fareType: 'Economy', departure: 'Apr 22', return: 'May 8', days: 16, price: 1821, duration: '30-36h', stops: 2, via: 'Amsterdam (AMS)', bagIncluded: true, rating: '⭐⭐⭐⭐', notes: 'European routing, good service' },
    { airline: 'Copa + ANA', fareType: 'Classic', departure: 'May 10', return: 'May 26', days: 16, price: 1832, duration: '32-38h', stops: 2, via: 'Panama (PTY)', bagIncluded: true, rating: '⭐⭐⭐', notes: 'Star Alliance, ANA leg excellent' },
  ];

  // ENHANCED: Added dates, days, via, rating, notes
  const ezeFlights = [
    { airline: 'Copa', fareType: 'Classic', departure: 'Apr 28', return: 'May 14', days: 16, price: 1327, duration: '30-34h', stops: 1, via: 'Panama (PTY)', bagIncluded: true, best: true, rating: '⭐⭐⭐⭐⭐', notes: '🏆 CHEAPEST! Bags included' },
    { airline: 'Copa', fareType: 'Classic', departure: 'May 7', return: 'May 22', days: 15, price: 1365, duration: '31h 10m', stops: 1, via: 'Panama (PTY)', bagIncluded: true, rating: '⭐⭐⭐⭐⭐', notes: 'Post-Golden Week sweet spot' },
    { airline: 'LATAM', fareType: 'Plus', departure: 'Apr 21', return: 'May 6', days: 15, price: 1550, duration: '26-28h', stops: 1, via: 'São Paulo (GRU)', bagIncluded: true, fastest: true, rating: '⭐⭐⭐⭐⭐', notes: '⚡ FASTEST! Only 26h' },
    { airline: 'LATAM', fareType: 'Plus', departure: 'May 13', return: 'May 29', days: 16, price: 1487, duration: '27h 15m', stops: 1, via: 'São Paulo (GRU)', bagIncluded: true, rating: '⭐⭐⭐⭐⭐', notes: 'Wisteria season, great timing' },
    { airline: 'Avianca', fareType: 'Economy', departure: 'Apr 21', return: 'May 6', days: 15, price: 1500, duration: '32-36h', stops: 2, via: 'Bogotá (BOG)', bagIncluded: true, rating: '⭐⭐⭐⭐', notes: 'Good value, bags included' },
    { airline: 'Air Canada', fareType: 'Standard', departure: 'Apr 25', return: 'May 11', days: 16, price: 1817, duration: '28-32h', stops: 1, via: 'Toronto (YYZ)', bagIncluded: true, rating: '⭐⭐⭐⭐', notes: 'Star Alliance, good service' },
    { airline: 'Turkish', fareType: 'Economy', departure: 'May 5', return: 'May 21', days: 16, price: 1916, duration: '30-34h', stops: 1, via: 'Istanbul (IST)', bagIncluded: true, rating: '⭐⭐⭐⭐', notes: '23kg bags always included' },
    { airline: 'Emirates', fareType: 'Economy', departure: 'Apr 22', return: 'May 8', days: 16, price: 1969, duration: '32-36h', stops: 1, via: 'Dubai (DXB)', bagIncluded: true, bag30kg: true, rating: '⭐⭐⭐⭐⭐', notes: 'Premium service, 30kg bags!' },
  ];

  const costScenarios = [
    { name: 'MVD Direct', flight: 1768, transport: 0, hotel: 0, total: 1768, savings: 0 },
    { name: 'EZE (Colonia)', flight: 1327, transport: TRANSPORT_COST, hotel: 0, total: 1327 + TRANSPORT_COST, savings: 1768 - (1327 + TRANSPORT_COST) },
    { name: 'EZE + Hotel', flight: 1327, transport: TRANSPORT_COST, hotel: 70, total: 1327 + TRANSPORT_COST + 70, savings: 1768 - (1327 + TRANSPORT_COST + 70) },
    { name: 'EZE (Buquebus)', flight: 1327, transport: 140, hotel: 0, total: 1467, savings: 301 },
  ];

  // ENHANCED: Added weather data
  const bestDates = [
    { week: 'Apr 1-10', price: 2200, crowds: 95, status: 'avoid', reason: 'Peak sakura', tempHigh: 17, tempLow: 9, rainDays: 10, humidity: '55%', weather: '🌤️ Mild, occasional rain', crowdLevel: '🔴 Extreme' },
    { week: 'Apr 11-20', price: 1600, crowds: 60, status: 'ok', reason: 'Post-sakura', tempHigh: 19, tempLow: 11, rainDays: 9, humidity: '58%', weather: '🌤️ Pleasant spring', crowdLevel: '🟡 High' },
    { week: 'Apr 21-28', price: 1450, crowds: 40, status: 'best', reason: 'Sweet spot', tempHigh: 21, tempLow: 13, rainDays: 8, humidity: '60%', weather: '☀️ Warm & sunny', crowdLevel: '🟢 Moderate' },
    { week: 'Apr 29-May 6', price: 2500, crowds: 100, status: 'avoid', reason: 'Golden Week', tempHigh: 22, tempLow: 14, rainDays: 8, humidity: '62%', weather: '☀️ Warm', crowdLevel: '🔴 Extreme (holiday)' },
    { week: 'May 7-15', price: 1400, crowds: 25, status: 'best', reason: 'Post-holiday calm', tempHigh: 23, tempLow: 15, rainDays: 9, humidity: '65%', weather: '☀️ Perfect spring', crowdLevel: '🟢 Low!' },
    { week: 'May 16-31', price: 1500, crowds: 35, status: 'good', reason: 'Pleasant weather', tempHigh: 25, tempLow: 17, rainDays: 10, humidity: '68%', weather: '🌤️ Warm, humid', crowdLevel: '🟢 Low-Medium' },
  ];

  // ============================================================
  // SECTION 2: ITINERARY DATA (In Japan)
  // ============================================================

  const cities = [
    { name: 'Tokyo', nights: 5, color: '#ef4444', highlights: ['Akihabara', 'Nintendo Tokyo', 'Shibuya (JJK)', 'Asakusa (Demon Slayer)'] },
    { name: 'Kyoto', nights: 4, color: '#8b5cf6', highlights: ['Samurai X sites', 'Fushimi Inari', 'Gion', 'Nijo Castle'] },
    { name: 'Hiroshima', nights: 2, color: '#06b6d4', highlights: ['Peace Memorial', 'Miyajima', 'Himeji (stop)'] },
    { name: 'Osaka', nights: 4, color: '#22c55e', highlights: ['Nintendo World', 'Osaka Castle', 'Den Den Town'] },
  ];

  const animeLocations = [
    { anime: 'One Piece', locations: ['Mugiwara Store Shibuya', 'Mugiwara Store Odaiba', 'Tokyo Station', 'USJ (summer)'], city: 'Tokyo/Osaka' },
    { anime: 'Demon Slayer', locations: ['Asakusa (Muzan scene)', 'Ashikaga Wisteria', 'Mt. Kumotori', 'Kamado Shrine'], city: 'Tokyo/Fukuoka' },
    { anime: 'Jujutsu Kaisen', locations: ['Shibuya Station B5F', 'Hikarie Building', 'Harajuku', 'Sendagaya Tunnel'], city: 'Tokyo' },
    { anime: 'Samurai X', locations: ['Arashiyama', 'Ikedaya Inn', 'Shinsengumi HQ', 'Ryozen Museum'], city: 'Kyoto' },
    { anime: 'Nintendo/Mario', locations: ['Super Nintendo World', 'Nintendo Tokyo', 'Pokemon Center Mega', 'Nintendo Kyoto'], city: 'Osaka/Tokyo' },
  ];

  const dailyCosts = {
    budget: { accommodation: 35, food: 20, transport: 12, attractions: 12, total: 79 },
    midRange: { accommodation: 85, food: 55, transport: 20, attractions: 35, total: 195 },
  };

  const attractions = [
    { name: 'USJ + Nintendo World', price: 60, express: 55, notes: 'Book 1 month ahead' },
    { name: 'Himeji Castle (2026)', price: 17, express: 0, notes: 'New price for foreigners' },
    { name: 'Ghibli Museum', price: 7, express: 0, notes: 'Book 10th of prior month' },
    { name: 'TeamLab Planets', price: 28, express: 0, notes: 'Book 2 months ahead' },
    { name: 'Samurai Experience', price: 70, express: 0, notes: 'Includes sword training' },
    { name: 'Nijo Castle', price: 9, express: 0, notes: 'Nightingale floors!' },
    { name: 'Pokemon Cafe', price: 25, express: 0, notes: 'Book 1 month ahead' },
  ];

  const itinerary = [
    { day: 1, city: 'Tokyo', title: 'Arrival', activities: ['Arrive Tokyo', 'Check-in Shinjuku/Asakusa', 'Explore neighborhood'] },
    { day: 2, city: 'Tokyo', title: 'Akihabara Day', activities: ['Animate 7 floors', 'Radio Kaikan', 'Mandarake', 'Super Potato'] },
    { day: 3, city: 'Tokyo', title: 'Nintendo & Gaming', activities: ['Nintendo Tokyo', 'Pokemon Center', 'Harajuku (JJK)', 'Shibuya'] },
    { day: 4, city: 'Tokyo', title: 'Demon Slayer & Samurai', activities: ['Senso-ji (Muzan scene)', 'TeamLab Planets', 'Samurai Museum'] },
    { day: 5, city: 'Tokyo', title: 'Kamakura Day Trip', activities: ['Samurai capital', 'Great Buddha', 'Zen temples', 'Return Tokyo'] },
    { day: 6, city: 'Travel', title: 'Tokyo → Kyoto', activities: ['Shinkansen 2h15m', 'Check-in', 'Pontocho evening'] },
    { day: 7, city: 'Kyoto', title: 'Higashiyama & Gion', activities: ['Kiyomizu-dera', 'Kimono rental', 'Gion geisha district'] },
    { day: 8, city: 'Kyoto', title: 'Samurai X Pilgrimage', activities: ['Arashiyama', 'Ikedaya Inn', 'Shinsengumi sites', 'Ryozen Museum'] },
    { day: 9, city: 'Kyoto', title: 'Fushimi + Nara', activities: ['Fushimi Inari early', 'Nara deer park', 'Todai-ji Buddha', 'Tea ceremony'] },
    { day: 10, city: 'Travel', title: 'Kyoto → Himeji → Hiroshima', activities: ['Himeji Castle stop', 'Continue to Hiroshima', 'Evening explore'] },
    { day: 11, city: 'Hiroshima', title: 'Peace Memorial', activities: ['Peace Museum', 'A-Bomb Dome', 'Memorial Park', 'Okonomiyaki'] },
    { day: 12, city: 'Hiroshima', title: 'Miyajima Island', activities: ['Floating torii', 'Itsukushima Shrine', 'Mt. Misen', 'Train to Osaka'] },
    { day: 13, city: 'Osaka', title: 'Nintendo World!', activities: ['USJ early arrival', 'Mario Kart', 'Yoshi Adventure', 'DK Mine Cart'] },
    { day: 14, city: 'Osaka', title: 'USJ Day 2 or Explore', activities: ['Option: More USJ', 'Or: Osaka Castle', 'Den Den Town anime'] },
    { day: 15, city: 'Osaka', title: 'Culture & Food', activities: ['Nintendo Osaka', 'Kuromon Market', 'Dotonbori', 'Shinsekai'] },
    { day: 16, city: 'Osaka', title: 'Departure', activities: ['Final shopping', 'KIX Airport', 'Fly home'] },
  ];

  const advanceBooking = [
    { item: 'Golden Week Hotels', when: '3-6 months', priority: 'critical' },
    { item: 'Ghibli Museum', when: '10th of prior month', priority: 'critical' },
    { item: 'USJ Tickets', when: '1-2 months', priority: 'high' },
    { item: 'Pokemon Cafe', when: '1 month', priority: 'high' },
    { item: 'TeamLab', when: '2 months', priority: 'high' },
    { item: 'Ryokan Stay', when: '2-3 months', priority: 'medium' },
    { item: 'Shinkansen (GW)', when: '2+ weeks', priority: 'medium' },
  ];

  // ============================================================
  // RENDER FUNCTIONS
  // ============================================================

  const renderMainNavigation = () => (
    <div style={{
      display: 'flex',
      gap: '8px',
      marginBottom: '24px',
      background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
      padding: '8px',
      borderRadius: '16px',
    }}>
      <button
        onClick={() => setMainSection('booking')}
        style={{
          flex: 1,
          padding: '16px 24px',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: '600',
          transition: 'all 0.2s ease',
          background: mainSection === 'booking' 
            ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' 
            : 'rgba(255,255,255,0.1)',
          color: mainSection === 'booking' ? '#1e1b4b' : '#e0e7ff',
          boxShadow: mainSection === 'booking' ? '0 4px 15px rgba(245, 158, 11, 0.4)' : 'none',
        }}
      >
        ✈️ Getting There
        <div style={{ fontSize: '11px', fontWeight: '400', marginTop: '4px', opacity: 0.8 }}>
          Flights • Dates • Costs
        </div>
      </button>
      <button
        onClick={() => setMainSection('itinerary')}
        style={{
          flex: 1,
          padding: '16px 24px',
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: '600',
          transition: 'all 0.2s ease',
          background: mainSection === 'itinerary' 
            ? 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' 
            : 'rgba(255,255,255,0.1)',
          color: mainSection === 'itinerary' ? 'white' : '#e0e7ff',
          boxShadow: mainSection === 'itinerary' ? '0 4px 15px rgba(239, 68, 68, 0.4)' : 'none',
        }}
      >
        🇯🇵 In Japan
        <div style={{ fontSize: '11px', fontWeight: '400', marginTop: '4px', opacity: 0.8 }}>
          Itinerary • Anime • Costs
        </div>
      </button>
    </div>
  );

  // MODIFIED: Removed transport tab
  const renderBookingTabs = () => (
    <div style={{
      display: 'flex',
      gap: '4px',
      marginBottom: '20px',
      flexWrap: 'wrap',
      background: 'rgba(0,0,0,0.2)',
      padding: '6px',
      borderRadius: '12px',
    }}>
      {[
        { id: 'overview', label: '📊 Overview', desc: 'Summary' },
        { id: 'flights', label: '✈️ Flights', desc: 'Compare' },
        { id: 'dates', label: '📅 Best Dates', desc: 'Weather' },
        { id: 'book', label: '🔗 Book Now', desc: 'Links' },
      ].map(tab => (
        <button
          key={tab.id}
          onClick={() => setBookingTab(tab.id)}
          style={{
            flex: '1 1 auto',
            minWidth: '100px',
            padding: '10px 12px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '13px',
            fontWeight: bookingTab === tab.id ? '600' : '400',
            background: bookingTab === tab.id ? 'rgba(245, 158, 11, 0.9)' : 'transparent',
            color: bookingTab === tab.id ? '#1e1b4b' : '#e0e7ff',
            transition: 'all 0.2s ease',
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );

  const renderItineraryTabs = () => (
    <div style={{
      display: 'flex',
      gap: '4px',
      marginBottom: '20px',
      flexWrap: 'wrap',
      background: 'rgba(0,0,0,0.2)',
      padding: '6px',
      borderRadius: '12px',
    }}>
      {[
        { id: 'route', label: '🗺️ Route', desc: '16 days' },
        { id: 'anime', label: '🎌 Anime Spots', desc: 'Pilgrimage' },
        { id: 'schedule', label: '📋 Day by Day', desc: 'Full plan' },
        { id: 'costs', label: '💰 Costs', desc: 'Budget' },
        { id: 'tips', label: '📝 Book Ahead', desc: 'Critical' },
      ].map(tab => (
        <button
          key={tab.id}
          onClick={() => setItineraryTab(tab.id)}
          style={{
            flex: '1 1 auto',
            minWidth: '100px',
            padding: '10px 12px',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '13px',
            fontWeight: itineraryTab === tab.id ? '600' : '400',
            background: itineraryTab === tab.id ? 'rgba(239, 68, 68, 0.9)' : 'transparent',
            color: itineraryTab === tab.id ? 'white' : '#e0e7ff',
            transition: 'all 0.2s ease',
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );

  // ============================================================
  // BOOKING SECTION CONTENT
  // ============================================================

  const renderBookingOverview = () => (
    <div>
      {/* Hero savings banner */}
      <div style={{
        background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '24px',
        textAlign: 'center',
        boxShadow: '0 8px 32px rgba(5, 150, 105, 0.3)',
      }}>
        <div style={{ fontSize: '14px', color: '#a7f3d0', marginBottom: '8px' }}>
          💡 RECOMMENDED: Fly from Buenos Aires
        </div>
        <div style={{ fontSize: '42px', fontWeight: '700', color: 'white' }}>
          Save $351
        </div>
        <div style={{ fontSize: '16px', color: '#d1fae5', marginTop: '8px' }}>
          vs flying direct from Montevideo (even with ferry costs!)
        </div>
      </div>

      {/* Quick comparison cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        <div style={{
          background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
          borderRadius: '12px',
          padding: '20px',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '12px', color: '#fecaca', marginBottom: '4px' }}>MVD Direct</div>
          <div style={{ fontSize: '28px', fontWeight: '700', color: 'white' }}>$1,768</div>
          <div style={{ fontSize: '11px', color: '#fca5a5', marginTop: '4px' }}>2+ stops, longer routes</div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
          borderRadius: '12px',
          padding: '20px',
          textAlign: 'center',
          border: '2px solid #4ade80',
        }}>
          <div style={{ fontSize: '12px', color: '#bbf7d0', marginBottom: '4px' }}>Via Buenos Aires ✓</div>
          <div style={{ fontSize: '28px', fontWeight: '700', color: 'white' }}>$1,417</div>
          <div style={{ fontSize: '11px', color: '#86efac', marginTop: '4px' }}>Flight $1,327 + Ferry ${TRANSPORT_COST}</div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
          borderRadius: '12px',
          padding: '20px',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '12px', color: '#ddd6fe', marginBottom: '4px' }}>Best Flight</div>
          <div style={{ fontSize: '28px', fontWeight: '700', color: 'white' }}>Copa</div>
          <div style={{ fontSize: '11px', color: '#c4b5fd', marginTop: '4px' }}>$1,327 • 1 stop • bag incl.</div>
        </div>
      </div>

      {/* Cost comparison chart */}
      <div style={{
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '24px',
      }}>
        <h3 style={{ color: '#f1f5f9', margin: '0 0 16px 0', fontSize: '16px' }}>
          💵 Total Cost Comparison (Round-trip with bags)
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={costScenarios} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis type="number" tick={{ fill: '#94a3b8', fontSize: 12 }} domain={[0, 2000]} />
            <YAxis dataKey="name" type="category" tick={{ fill: '#e2e8f0', fontSize: 12 }} width={100} />
            <Tooltip 
              contentStyle={{ background: '#1e293b', border: 'none', borderRadius: '8px' }}
              formatter={(value) => [`$${value}`, '']}
            />
            <Bar dataKey="total" radius={[0, 4, 4, 0]}>
              {costScenarios.map((entry, index) => (
                <Cell key={index} fill={entry.savings > 300 ? '#22c55e' : entry.savings > 0 ? '#3b82f6' : '#ef4444'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <div style={{ marginTop: '12px', fontSize: '12px', color: '#94a3b8', textAlign: 'center' }}>
          Ferry cost (~${TRANSPORT_COST} RT via Colonia Express) included in calculations
        </div>
      </div>

      {/* Best dates summary */}
      <div style={{
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '12px',
        padding: '20px',
      }}>
        <h3 style={{ color: '#f1f5f9', margin: '0 0 16px 0', fontSize: '16px' }}>
          📅 Quick Date Guide
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '12px' }}>
          <div style={{
            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
            borderRadius: '8px',
            padding: '12px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '11px', color: '#bbf7d0' }}>✓ BEST</div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: 'white' }}>Apr 21-28</div>
            <div style={{ fontSize: '12px', color: '#dcfce7' }}>~$1,450</div>
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
            borderRadius: '8px',
            padding: '12px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '11px', color: '#bbf7d0' }}>✓ BEST</div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: 'white' }}>May 7-15</div>
            <div style={{ fontSize: '12px', color: '#dcfce7' }}>~$1,400</div>
          </div>
          <div style={{
            background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
            borderRadius: '8px',
            padding: '12px',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '11px', color: '#fecaca' }}>✗ AVOID</div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: 'white' }}>Apr 29-May 6</div>
            <div style={{ fontSize: '12px', color: '#fee2e2' }}>Golden Week +50%</div>
          </div>
        </div>
      </div>
    </div>
  );

  // ENHANCED: Full table with dates, days, stops, via, duration, price, rating, notes
  const renderFlightsTab = () => (
    <div>
      {/* Buenos Aires flights - ENHANCED TABLE */}
      <div style={{
        background: 'rgba(34, 197, 94, 0.1)',
        border: '1px solid rgba(34, 197, 94, 0.3)',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '20px',
      }}>
        <h3 style={{ color: '#4ade80', margin: '0 0 16px 0', fontSize: '16px' }}>
          🇦🇷 From Buenos Aires (EZE) → Tokyo — RECOMMENDED
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid rgba(34, 197, 94, 0.3)' }}>
                <th style={{ textAlign: 'left', padding: '10px 8px', color: '#4ade80' }}>Airline</th>
                <th style={{ textAlign: 'center', padding: '10px 8px', color: '#4ade80' }}>Dates</th>
                <th style={{ textAlign: 'center', padding: '10px 8px', color: '#4ade80' }}>Days</th>
                <th style={{ textAlign: 'center', padding: '10px 8px', color: '#4ade80' }}>Stops</th>
                <th style={{ textAlign: 'left', padding: '10px 8px', color: '#4ade80' }}>Via</th>
                <th style={{ textAlign: 'center', padding: '10px 8px', color: '#4ade80' }}>Duration</th>
                <th style={{ textAlign: 'right', padding: '10px 8px', color: '#4ade80' }}>Price</th>
                <th style={{ textAlign: 'center', padding: '10px 8px', color: '#4ade80' }}>Rating</th>
                <th style={{ textAlign: 'left', padding: '10px 8px', color: '#4ade80' }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              {ezeFlights.map((flight, i) => (
                <tr key={i} style={{ 
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  background: flight.best ? 'rgba(34, 197, 94, 0.15)' : 'transparent',
                }}>
                  <td style={{ padding: '10px 8px', color: '#e2e8f0' }}>
                    <div style={{ fontWeight: '500' }}>{flight.airline}</div>
                    <div style={{ fontSize: '10px', color: '#94a3b8' }}>{flight.fareType}</div>
                  </td>
                  <td style={{ padding: '10px 8px', color: '#e2e8f0', textAlign: 'center', fontSize: '11px' }}>
                    {flight.departure} → {flight.return}
                  </td>
                  <td style={{ padding: '10px 8px', color: '#94a3b8', textAlign: 'center' }}>{flight.days}</td>
                  <td style={{ padding: '10px 8px', textAlign: 'center' }}>
                    <span style={{
                      background: flight.stops === 1 ? 'rgba(34, 197, 94, 0.3)' : 'rgba(245, 158, 11, 0.3)',
                      color: flight.stops === 1 ? '#4ade80' : '#fbbf24',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '11px',
                    }}>
                      {flight.stops}
                    </span>
                  </td>
                  <td style={{ padding: '10px 8px', color: '#94a3b8', fontSize: '11px' }}>{flight.via}</td>
                  <td style={{ padding: '10px 8px', color: '#94a3b8', textAlign: 'center', fontSize: '11px' }}>{flight.duration}</td>
                  <td style={{ padding: '10px 8px', color: '#4ade80', textAlign: 'right', fontWeight: '600', fontSize: '14px' }}>${flight.price}</td>
                  <td style={{ padding: '10px 8px', textAlign: 'center', fontSize: '11px' }}>{flight.rating}</td>
                  <td style={{ padding: '10px 8px', color: '#94a3b8', fontSize: '11px', maxWidth: '150px' }}>{flight.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Montevideo flights - ENHANCED TABLE */}
      <div style={{
        background: 'rgba(239, 68, 68, 0.1)',
        border: '1px solid rgba(239, 68, 68, 0.3)',
        borderRadius: '12px',
        padding: '20px',
      }}>
        <h3 style={{ color: '#f87171', margin: '0 0 16px 0', fontSize: '16px' }}>
          🇺🇾 From Montevideo (MVD) → Tokyo — More Expensive
        </h3>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid rgba(239, 68, 68, 0.3)' }}>
                <th style={{ textAlign: 'left', padding: '10px 8px', color: '#f87171' }}>Airline</th>
                <th style={{ textAlign: 'center', padding: '10px 8px', color: '#f87171' }}>Dates</th>
                <th style={{ textAlign: 'center', padding: '10px 8px', color: '#f87171' }}>Days</th>
                <th style={{ textAlign: 'center', padding: '10px 8px', color: '#f87171' }}>Stops</th>
                <th style={{ textAlign: 'left', padding: '10px 8px', color: '#f87171' }}>Via</th>
                <th style={{ textAlign: 'center', padding: '10px 8px', color: '#f87171' }}>Duration</th>
                <th style={{ textAlign: 'right', padding: '10px 8px', color: '#f87171' }}>Price</th>
                <th style={{ textAlign: 'center', padding: '10px 8px', color: '#f87171' }}>Rating</th>
                <th style={{ textAlign: 'left', padding: '10px 8px', color: '#f87171' }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              {mvdFlights.map((flight, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '10px 8px', color: '#e2e8f0' }}>
                    <div style={{ fontWeight: '500' }}>{flight.airline}</div>
                    <div style={{ fontSize: '10px', color: '#94a3b8' }}>{flight.fareType}</div>
                  </td>
                  <td style={{ padding: '10px 8px', color: '#e2e8f0', textAlign: 'center', fontSize: '11px' }}>
                    {flight.departure} → {flight.return}
                  </td>
                  <td style={{ padding: '10px 8px', color: '#94a3b8', textAlign: 'center' }}>{flight.days}</td>
                  <td style={{ padding: '10px 8px', textAlign: 'center' }}>
                    <span style={{
                      background: 'rgba(245, 158, 11, 0.3)',
                      color: '#fbbf24',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '11px',
                    }}>
                      {flight.stops}
                    </span>
                  </td>
                  <td style={{ padding: '10px 8px', color: '#94a3b8', fontSize: '11px' }}>{flight.via}</td>
                  <td style={{ padding: '10px 8px', color: '#94a3b8', textAlign: 'center', fontSize: '11px' }}>{flight.duration}</td>
                  <td style={{ padding: '10px 8px', color: '#f87171', textAlign: 'right', fontWeight: '600', fontSize: '14px' }}>${flight.price}</td>
                  <td style={{ padding: '10px 8px', textAlign: 'center', fontSize: '11px' }}>{flight.rating}</td>
                  <td style={{ padding: '10px 8px', color: '#94a3b8', fontSize: '11px', maxWidth: '150px' }}>{flight.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div style={{ marginTop: '12px', padding: '12px', background: 'rgba(239, 68, 68, 0.2)', borderRadius: '8px', fontSize: '12px', color: '#fca5a5' }}>
          ⚠️ All MVD flights have 2+ stops and cost $300-500 more than Buenos Aires. Take the ferry and save!
        </div>
      </div>
    </div>
  );

  // ENHANCED: Added weather data to date cards
  const renderDatesTab = () => (
    <div>
      <h3 style={{ color: '#f1f5f9', margin: '0 0 16px 0', fontSize: '16px' }}>
        📅 April-May 2026 Price, Weather & Crowd Analysis
      </h3>

      {/* Price chart */}
      <div style={{
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '20px',
      }}>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={bestDates}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="week" tick={{ fill: '#94a3b8', fontSize: 11 }} />
            <YAxis tick={{ fill: '#94a3b8', fontSize: 11 }} domain={[1000, 3000]} />
            <Tooltip 
              contentStyle={{ background: '#1e293b', border: 'none', borderRadius: '8px' }}
              formatter={(value, name) => [name === 'price' ? `$${value}` : `${value}%`, name === 'price' ? 'Price' : 'Crowds']}
            />
            <Area type="monotone" dataKey="price" stroke="#f59e0b" fill="rgba(245, 158, 11, 0.3)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Date cards with WEATHER */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
        {bestDates.map((date, i) => (
          <div key={i} style={{
            background: date.status === 'best' 
              ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(22, 163, 74, 0.15) 100%)'
              : date.status === 'avoid'
                ? 'linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(220, 38, 38, 0.15) 100%)'
                : 'rgba(255,255,255,0.05)',
            border: date.status === 'best' 
              ? '2px solid rgba(34, 197, 94, 0.5)' 
              : date.status === 'avoid'
                ? '2px solid rgba(239, 68, 68, 0.5)'
                : '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            padding: '16px',
          }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <div>
                <div style={{ fontSize: '16px', fontWeight: '600', color: '#e2e8f0' }}>{date.week}</div>
                <div style={{ fontSize: '11px', color: '#94a3b8' }}>{date.reason}</div>
              </div>
              <div style={{
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '10px',
                fontWeight: '600',
                background: date.status === 'best' ? '#22c55e' : date.status === 'avoid' ? '#ef4444' : '#6b7280',
                color: 'white',
              }}>
                {date.status === 'best' ? '✓ BEST' : date.status === 'avoid' ? '✗ AVOID' : 'OK'}
              </div>
            </div>

            {/* Price & Crowds */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '12px' }}>
              <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
                <div style={{ fontSize: '10px', color: '#94a3b8' }}>Avg Price</div>
                <div style={{ fontSize: '20px', fontWeight: '700', color: date.status === 'avoid' ? '#f87171' : '#4ade80' }}>${date.price}</div>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '10px', textAlign: 'center' }}>
                <div style={{ fontSize: '10px', color: '#94a3b8' }}>Crowds</div>
                <div style={{ fontSize: '14px', fontWeight: '500', color: '#e2e8f0' }}>{date.crowdLevel}</div>
              </div>
            </div>

            {/* Weather info */}
            <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '12px' }}>
              <div style={{ fontSize: '11px', fontWeight: '600', color: '#94a3b8', marginBottom: '8px' }}>🌡️ Weather in Japan</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '11px' }}>
                <div style={{ color: '#cbd5e1' }}>
                  <span style={{ color: '#94a3b8' }}>High/Low: </span>
                  {date.tempHigh}°/{date.tempLow}°C
                </div>
                <div style={{ color: '#cbd5e1' }}>
                  <span style={{ color: '#94a3b8' }}>Rain days: </span>
                  {date.rainDays}
                </div>
                <div style={{ color: '#cbd5e1' }}>
                  <span style={{ color: '#94a3b8' }}>Humidity: </span>
                  {date.humidity}
                </div>
                <div style={{ color: '#cbd5e1' }}>
                  {date.weather}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Top recommendations */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(22, 163, 74, 0.2) 100%)',
        border: '2px solid rgba(34, 197, 94, 0.5)',
        borderRadius: '12px',
        padding: '16px',
        marginTop: '20px',
      }}>
        <h4 style={{ color: '#4ade80', margin: '0 0 12px 0', fontSize: '14px' }}>🎯 Top 3 Date Recommendations (15-17 days)</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
          <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ fontSize: '10px', color: '#86efac' }}>🥇 Best Overall</div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: 'white' }}>May 7 → May 22</div>
            <div style={{ fontSize: '11px', color: '#a7f3d0', marginTop: '4px' }}>Post-Golden Week, lowest crowds</div>
            <div style={{ fontSize: '13px', fontWeight: '600', color: '#4ade80', marginTop: '4px' }}>~$1,365 (Copa)</div>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ fontSize: '10px', color: '#86efac' }}>🥈 Best Value</div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: 'white' }}>Apr 28 → May 14</div>
            <div style={{ fontSize: '11px', color: '#a7f3d0', marginTop: '4px' }}>Cheapest flight found</div>
            <div style={{ fontSize: '13px', fontWeight: '600', color: '#4ade80', marginTop: '4px' }}>~$1,327 (Copa)</div>
          </div>
          <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '12px' }}>
            <div style={{ fontSize: '10px', color: '#86efac' }}>🥉 Late Spring</div>
            <div style={{ fontSize: '14px', fontWeight: '600', color: 'white' }}>May 13 → May 29</div>
            <div style={{ fontSize: '11px', color: '#a7f3d0', marginTop: '4px' }}>Warm weather, wisteria</div>
            <div style={{ fontSize: '13px', fontWeight: '600', color: '#4ade80', marginTop: '4px' }}>~$1,487 (LATAM)</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBookNowTab = () => (
    <div>
      <h3 style={{ color: '#f1f5f9', margin: '0 0 16px 0', fontSize: '16px' }}>
        🔗 Live Price Checker Links
      </h3>

      {/* Flight booking links */}
      <div style={{
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '16px',
      }}>
        <h4 style={{ color: '#4ade80', margin: '0 0 12px 0', fontSize: '14px' }}>✈️ Buenos Aires → Tokyo</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {[
            { name: 'Google Flights', url: 'https://www.google.com/travel/flights?q=buenos%20aires%20to%20tokyo%20april%202026' },
            { name: 'Skyscanner', url: 'https://www.skyscanner.com/routes/buea/tyoa/buenos-aires-to-tokyo.html' },
            { name: 'Kayak', url: 'https://www.kayak.com/flights/EZE-TYO/2026-04-21/2026-05-07' },
            { name: 'Expedia', url: 'https://www.expedia.com/lp/flights/eze/hnd/buenos-aires-to-tokyo' },
          ].map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              color: 'white',
              padding: '10px 16px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: '500',
              transition: 'transform 0.2s',
            }}>
              {link.name} ↗
            </a>
          ))}
        </div>
      </div>

      {/* Ferry booking links */}
      <div style={{
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '16px',
      }}>
        <h4 style={{ color: '#60a5fa', margin: '0 0 12px 0', fontSize: '14px' }}>🚢 Ferry MVD → Buenos Aires (~${TRANSPORT_COST} RT)</h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {[
            { name: 'Buquebus', url: 'https://www.buquebus.com' },
            { name: 'Colonia Express', url: 'https://www.coloniaexpress.com' },
            { name: 'Direct Ferries', url: 'https://www.directferries.com/montevideo_buenos_aires_ferry.htm' },
          ].map((link, i) => (
            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
              color: 'white',
              padding: '10px 16px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '13px',
              fontWeight: '500',
            }}>
              {link.name} ↗
            </a>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div style={{
        background: 'rgba(245, 158, 11, 0.1)',
        border: '1px solid rgba(245, 158, 11, 0.3)',
        borderRadius: '12px',
        padding: '16px',
      }}>
        <h4 style={{ color: '#fbbf24', margin: '0 0 8px 0', fontSize: '14px' }}>💡 Booking Tips</h4>
        <ul style={{ margin: 0, paddingLeft: '16px', color: '#fde68a', fontSize: '12px', lineHeight: '1.8' }}>
          <li>Book 60-90 days ahead for best prices</li>
          <li>Search on Tuesday/Wednesday for lowest fares</li>
          <li>Use incognito mode to avoid price tracking</li>
          <li>Set price alerts on Google Flights & Skyscanner</li>
          <li>Book ferry 1-2 weeks ahead, arrive night before flight</li>
        </ul>
      </div>
    </div>
  );

  // ============================================================
  // ITINERARY SECTION CONTENT (unchanged)
  // ============================================================

  const renderRouteTab = () => (
    <div>
      {/* Trip summary */}
      <div style={{
        background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '24px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '14px', color: '#fecaca', marginBottom: '4px' }}>Your Japan Adventure</div>
        <div style={{ fontSize: '36px', fontWeight: '700', color: 'white' }}>16 Days</div>
        <div style={{ fontSize: '14px', color: '#fca5a5', marginTop: '4px' }}>
          Tokyo → Kyoto → Hiroshima → Osaka
        </div>
      </div>

      {/* City breakdown */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        {cities.map((city, i) => (
          <div key={i} style={{
            background: `linear-gradient(135deg, ${city.color}20 0%, ${city.color}10 100%)`,
            border: `2px solid ${city.color}50`,
            borderRadius: '12px',
            padding: '16px',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{ fontSize: '18px', fontWeight: '600', color: city.color }}>{city.name}</div>
              <div style={{
                background: city.color,
                color: 'white',
                padding: '4px 10px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: '600',
              }}>
                {city.nights} nights
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {city.highlights.map((h, j) => (
                <span key={j} style={{
                  background: 'rgba(255,255,255,0.1)',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '11px',
                  color: '#e2e8f0',
                }}>
                  {h}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Visual route */}
      <div style={{
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '12px',
        padding: '20px',
      }}>
        <h4 style={{ color: '#f1f5f9', margin: '0 0 16px 0', fontSize: '14px' }}>🗾 Route Flow</h4>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          {cities.map((city, i) => (
            <React.Fragment key={i}>
              <div style={{
                background: city.color,
                color: 'white',
                padding: '12px 20px',
                borderRadius: '8px',
                textAlign: 'center',
                minWidth: '80px',
              }}>
                <div style={{ fontWeight: '600' }}>{city.name}</div>
                <div style={{ fontSize: '11px', opacity: 0.8 }}>{city.nights}N</div>
              </div>
              {i < cities.length - 1 && (
                <div style={{ color: '#94a3b8', fontSize: '20px' }}>→</div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div style={{ marginTop: '16px', fontSize: '12px', color: '#94a3b8', textAlign: 'center' }}>
          💡 Pro tip: Fly into Tokyo (NRT/HND), out of Osaka (KIX) to save time!
        </div>
      </div>
    </div>
  );

  const renderAnimeTab = () => (
    <div>
      <h3 style={{ color: '#f1f5f9', margin: '0 0 16px 0', fontSize: '16px' }}>
        🎌 Anime & Gaming Pilgrimage Guide
      </h3>

      {animeLocations.map((anime, i) => (
        <div key={i} style={{
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '12px',
          padding: '16px',
          marginBottom: '12px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{ fontSize: '16px', fontWeight: '600', color: '#f59e0b' }}>{anime.anime}</div>
            <div style={{ fontSize: '11px', color: '#94a3b8', background: 'rgba(255,255,255,0.1)', padding: '4px 8px', borderRadius: '4px' }}>
              {anime.city}
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {anime.locations.map((loc, j) => (
              <div key={j} style={{
                background: 'rgba(245, 158, 11, 0.2)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                padding: '6px 12px',
                borderRadius: '6px',
                fontSize: '12px',
                color: '#fde68a',
              }}>
                📍 {loc}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Special callout */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(109, 40, 217, 0.2) 100%)',
        border: '2px solid rgba(139, 92, 246, 0.5)',
        borderRadius: '12px',
        padding: '16px',
        marginTop: '16px',
      }}>
        <div style={{ fontSize: '14px', fontWeight: '600', color: '#a78bfa', marginBottom: '8px' }}>
          🎮 Super Nintendo World - Must Do!
        </div>
        <div style={{ fontSize: '12px', color: '#c4b5fd', lineHeight: '1.6' }}>
          Located at Universal Studios Japan, Osaka. Includes Mario Kart ride, Yoshi's Adventure, and new Donkey Kong area.
          <strong style={{ color: '#a78bfa' }}> Book USJ tickets 1-2 months ahead!</strong>
        </div>
      </div>
    </div>
  );

  const renderScheduleTab = () => (
    <div>
      <h3 style={{ color: '#f1f5f9', margin: '0 0 16px 0', fontSize: '16px' }}>
        📋 Complete 16-Day Itinerary
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {itinerary.map((day, i) => {
          const cityColors = {
            'Tokyo': '#ef4444',
            'Kyoto': '#8b5cf6',
            'Hiroshima': '#06b6d4',
            'Osaka': '#22c55e',
            'Travel': '#f59e0b',
          };
          const color = cityColors[day.city] || '#94a3b8';

          return (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '8px',
              padding: '12px 16px',
              borderLeft: `4px solid ${color}`,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    background: color,
                    color: 'white',
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: '600',
                  }}>
                    {day.day}
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: '#e2e8f0' }}>{day.title}</div>
                    <div style={{ fontSize: '11px', color: color }}>{day.city}</div>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginLeft: '40px' }}>
                {day.activities.map((act, j) => (
                  <span key={j} style={{
                    background: 'rgba(255,255,255,0.1)',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    color: '#cbd5e1',
                  }}>
                    {act}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderCostsTab = () => (
    <div>
      {/* Budget comparison */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(22, 163, 74, 0.2) 100%)',
          border: '2px solid rgba(34, 197, 94, 0.5)',
          borderRadius: '12px',
          padding: '20px',
        }}>
          <div style={{ fontSize: '12px', color: '#86efac', marginBottom: '4px' }}>💰 Budget</div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#4ade80' }}>${dailyCosts.budget.total}</div>
          <div style={{ fontSize: '12px', color: '#86efac' }}>/day</div>
          <div style={{ marginTop: '16px', fontSize: '12px', color: '#a7f3d0' }}>
            <div>🏨 Hostels: ${dailyCosts.budget.accommodation}</div>
            <div>🍜 Konbini/cheap eats: ${dailyCosts.budget.food}</div>
            <div>🚃 Transit: ${dailyCosts.budget.transport}</div>
            <div>🎌 Attractions: ${dailyCosts.budget.attractions}</div>
          </div>
          <div style={{ marginTop: '16px', padding: '12px', background: 'rgba(34, 197, 94, 0.2)', borderRadius: '8px' }}>
            <div style={{ fontSize: '11px', color: '#86efac' }}>16 days total:</div>
            <div style={{ fontSize: '18px', fontWeight: '600', color: '#4ade80' }}>~$1,264 + transport</div>
          </div>
        </div>

        <div style={{
          background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(109, 40, 217, 0.2) 100%)',
          border: '2px solid rgba(139, 92, 246, 0.5)',
          borderRadius: '12px',
          padding: '20px',
        }}>
          <div style={{ fontSize: '12px', color: '#c4b5fd', marginBottom: '4px' }}>✨ Mid-Range</div>
          <div style={{ fontSize: '32px', fontWeight: '700', color: '#a78bfa' }}>${dailyCosts.midRange.total}</div>
          <div style={{ fontSize: '12px', color: '#c4b5fd' }}>/day</div>
          <div style={{ marginTop: '16px', fontSize: '12px', color: '#ddd6fe' }}>
            <div>🏨 Business hotels: ${dailyCosts.midRange.accommodation}</div>
            <div>🍜 Restaurants: ${dailyCosts.midRange.food}</div>
            <div>🚃 Transit + taxi: ${dailyCosts.midRange.transport}</div>
            <div>🎌 More attractions: ${dailyCosts.midRange.attractions}</div>
          </div>
          <div style={{ marginTop: '16px', padding: '12px', background: 'rgba(139, 92, 246, 0.2)', borderRadius: '8px' }}>
            <div style={{ fontSize: '11px', color: '#c4b5fd' }}>16 days total:</div>
            <div style={{ fontSize: '18px', fontWeight: '600', color: '#a78bfa' }}>~$3,120 + transport</div>
          </div>
        </div>
      </div>

      {/* Key attractions costs */}
      <div style={{
        background: 'rgba(255,255,255,0.05)',
        borderRadius: '12px',
        padding: '20px',
      }}>
        <h4 style={{ color: '#f1f5f9', margin: '0 0 16px 0', fontSize: '14px' }}>🎟️ Key Attraction Prices (USD)</h4>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <th style={{ textAlign: 'left', padding: '8px', color: '#94a3b8' }}>Attraction</th>
                <th style={{ textAlign: 'right', padding: '8px', color: '#94a3b8' }}>Base</th>
                <th style={{ textAlign: 'right', padding: '8px', color: '#94a3b8' }}>Express/Add-on</th>
                <th style={{ textAlign: 'left', padding: '8px', color: '#94a3b8' }}>Note</th>
              </tr>
            </thead>
            <tbody>
              {attractions.map((att, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td style={{ padding: '10px 8px', color: '#e2e8f0' }}>{att.name}</td>
                  <td style={{ padding: '10px 8px', color: '#4ade80', textAlign: 'right', fontWeight: '600' }}>${att.price}</td>
                  <td style={{ padding: '10px 8px', color: '#fbbf24', textAlign: 'right' }}>{att.express > 0 ? `+$${att.express}` : '-'}</td>
                  <td style={{ padding: '10px 8px', color: '#94a3b8', fontSize: '11px' }}>{att.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderTipsTab = () => (
    <div>
      <h3 style={{ color: '#f1f5f9', margin: '0 0 16px 0', fontSize: '16px' }}>
        📝 Advance Booking Checklist
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {advanceBooking.map((item, i) => (
          <div key={i} style={{
            background: item.priority === 'critical' 
              ? 'rgba(239, 68, 68, 0.1)' 
              : item.priority === 'high'
                ? 'rgba(245, 158, 11, 0.1)'
                : 'rgba(255,255,255,0.05)',
            border: item.priority === 'critical'
              ? '1px solid rgba(239, 68, 68, 0.3)'
              : item.priority === 'high'
                ? '1px solid rgba(245, 158, 11, 0.3)'
                : '1px solid rgba(255,255,255,0.1)',
            borderRadius: '10px',
            padding: '14px 16px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '24px',
                height: '24px',
                borderRadius: '6px',
                background: item.priority === 'critical' ? '#ef4444' : item.priority === 'high' ? '#f59e0b' : '#6b7280',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
              }}>
                {item.priority === 'critical' ? '🚨' : item.priority === 'high' ? '⚠️' : '📌'}
              </div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '500', color: '#e2e8f0' }}>{item.item}</div>
                <div style={{ fontSize: '11px', color: '#94a3b8' }}>Book {item.when} ahead</div>
              </div>
            </div>
            <div style={{
              padding: '4px 10px',
              borderRadius: '6px',
              fontSize: '11px',
              fontWeight: '600',
              textTransform: 'uppercase',
              background: item.priority === 'critical' ? 'rgba(239, 68, 68, 0.2)' : item.priority === 'high' ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255,255,255,0.1)',
              color: item.priority === 'critical' ? '#fca5a5' : item.priority === 'high' ? '#fcd34d' : '#9ca3af',
            }}>
              {item.priority}
            </div>
          </div>
        ))}
      </div>

      {/* Golden Week warning */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(220, 38, 38, 0.2) 100%)',
        border: '2px solid rgba(239, 68, 68, 0.5)',
        borderRadius: '12px',
        padding: '16px',
        marginTop: '24px',
      }}>
        <div style={{ fontSize: '14px', fontWeight: '600', color: '#f87171', marginBottom: '8px' }}>
          ⚠️ Golden Week Alert (Apr 29 - May 6, 2026)
        </div>
        <ul style={{ margin: 0, paddingLeft: '16px', color: '#fca5a5', fontSize: '12px', lineHeight: '1.8' }}>
          <li>Hotels cost 20-50% more — book by January 2026</li>
          <li>Shinkansen sells out — reserve seats 2+ weeks ahead</li>
          <li>Major attractions have 2-3x longer lines</li>
          <li>Pro tip: Stay in Tokyo/Osaka (locals leave for countryside)</li>
        </ul>
      </div>
    </div>
  );

  // ============================================================
  // MAIN RENDER
  // ============================================================

  return (
    <div style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: 'linear-gradient(180deg, #0f0a1e 0%, #1a1333 50%, #0f172a 100%)',
      minHeight: '100vh',
      padding: '24px',
      color: '#e2e8f0',
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '4px' }}>🎌 April-May 2026</div>
          <h1 style={{ 
            fontSize: '28px', 
            fontWeight: '700', 
            margin: '0',
            background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 50%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Japan Trip Planner
          </h1>
          <div style={{ fontSize: '13px', color: '#64748b', marginTop: '8px' }}>
            Anime • Samurai • Nintendo • 16 Days
          </div>
        </div>

        {/* Main section toggle */}
        {renderMainNavigation()}

        {/* Section content - MODIFIED: removed transport tab */}
        {mainSection === 'booking' && (
          <div>
            {renderBookingTabs()}
            {bookingTab === 'overview' && renderBookingOverview()}
            {bookingTab === 'flights' && renderFlightsTab()}
            {bookingTab === 'dates' && renderDatesTab()}
            {bookingTab === 'book' && renderBookNowTab()}
          </div>
        )}

        {mainSection === 'itinerary' && (
          <div>
            {renderItineraryTabs()}
            {itineraryTab === 'route' && renderRouteTab()}
            {itineraryTab === 'anime' && renderAnimeTab()}
            {itineraryTab === 'schedule' && renderScheduleTab()}
            {itineraryTab === 'costs' && renderCostsTab()}
            {itineraryTab === 'tips' && renderTipsTab()}
          </div>
        )}

        {/* Footer */}
        <div style={{
          marginTop: '32px',
          padding: '16px',
          background: 'rgba(255,255,255,0.03)',
          borderRadius: '12px',
          textAlign: 'center',
          fontSize: '12px',
          color: '#64748b',
        }}>
          Prices in USD • Round-trip with 1 checked bag included • Last updated Jan 2026
          <br />
          💡 Set price alerts on Google Flights & Skyscanner for best deals
        </div>
      </div>
    </div>
  );
};

export default JapanTripPlanner;
