// src/components/JapanTripPlanner.jsx
import React, { useState } from 'react';
import { Header, Footer, MainNavigation, TabNavigation, CrewSelect } from './common';
import { BookingOverview, FlightsTab, DatesTab, BookNowTab } from './booking';
import { RouteTab, AnimeTab, ScheduleTab, CostsTab, TipsTab } from './itinerary';

const BOOKING_TABS = [
  { id: 'overview', label: '📊 Overview' },
  { id: 'flights', label: '✈️ Flights' },
  { id: 'dates', label: '📅 Best Dates' },
  { id: 'book', label: '🔗 Book Now' },
];

const ITINERARY_TABS = [
  { id: 'route', label: '🗺️ Route' },
  { id: 'anime', label: '🎌 Anime Spots' },
  { id: 'schedule', label: '📋 Day by Day' },
  { id: 'costs', label: '💰 Costs' },
  { id: 'tips', label: '📝 Book Ahead' },
];

const JapanTripPlanner = () => {
  const [mainSection, setMainSection] = useState('booking');
  const [bookingTab, setBookingTab] = useState('overview');
  const [itineraryTab, setItineraryTab] = useState('route');

  // ✅ gate
  const [hasStarted, setHasStarted] = useState(false);
  const [selectedFighter, setSelectedFighter] = useState(null);

  const renderBookingContent = () => {
    switch (bookingTab) {
      case 'overview': return <BookingOverview />;
      case 'flights': return <FlightsTab />;
      case 'dates': return <DatesTab />;
      case 'book': return <BookNowTab />;
      default: return <BookingOverview />;
    }
  };

  const renderItineraryContent = () => {
    switch (itineraryTab) {
      case 'route': return <RouteTab />;
      case 'anime': return <AnimeTab />;
      case 'schedule': return <ScheduleTab />;
      case 'costs': return <CostsTab />;
      case 'tips': return <TipsTab />;
      default: return <RouteTab />;
    }
  };

  return (
    <div
      style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        background: 'linear-gradient(180deg, #0f0a1e 0%, #1a1333 50%, #0f172a 100%)',
        minHeight: '100vh',
        padding: '24px',
        color: '#e2e8f0',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* ✅ banner only on first screen */}
        <Header showBanner={!hasStarted} />

        {!hasStarted ? (
          <div style={{ marginTop: '10px' }}>
            <CrewSelect
              selectedId={selectedFighter?.id ?? null}
              onSelect={setSelectedFighter}
            />

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '14px' }}>
              <button
                onClick={() => setHasStarted(true)}
                disabled={!selectedFighter}
                style={{
                  border: '1px solid rgba(255,255,255,0.12)',
                  background: selectedFighter ? 'rgba(37, 99, 235, 0.28)' : 'rgba(2,6,23,0.45)',
                  color: selectedFighter ? '#e2e8f0' : '#94a3b8',
                  borderRadius: '14px',
                  padding: '12px 16px',
                  fontWeight: 900,
                  cursor: selectedFighter ? 'pointer' : 'not-allowed',
                  boxShadow: selectedFighter ? '0 18px 50px rgba(37,99,235,0.18)' : 'none',
                }}
              >
                Next →
              </button>
            </div>

            <div style={{ marginTop: '10px', color: '#64748b', fontSize: '12px', fontWeight: 700 }}>
              Pick your fighter to start the run.
            </div>
          </div>
        ) : (
          <>
            <MainNavigation activeSection={mainSection} onSectionChange={setMainSection} />

            {mainSection === 'booking' && (
              <div>
                <TabNavigation
                  tabs={BOOKING_TABS}
                  activeTab={bookingTab}
                  onTabChange={setBookingTab}
                  activeColor="rgba(245, 158, 11, 0.9)"
                />
                {renderBookingContent()}
              </div>
            )}

            {mainSection === 'itinerary' && (
              <div>
                <TabNavigation
                  tabs={ITINERARY_TABS}
                  activeTab={itineraryTab}
                  onTabChange={setItineraryTab}
                  activeColor="rgba(239, 68, 68, 0.9)"
                />
                {renderItineraryContent()}
              </div>
            )}

            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default JapanTripPlanner;
