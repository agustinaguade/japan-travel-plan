# Japan Trip Planner 🇯🇵

Interactive React dashboard for planning a 16-day Japan trip from Montevideo/Buenos Aires (April-May 2026).

## Features

- ✈️ **Flight Comparison** - MVD vs EZE departure with full pricing tables
- 📅 **Best Dates** - Weather, crowds, and price analysis
- 🗺️ **16-Day Itinerary** - Tokyo → Kyoto → Hiroshima → Osaka
- 🎌 **Anime Pilgrimage** - One Piece, Demon Slayer, JJK, Samurai X locations
- 💰 **Budget Calculator** - Daily costs for budget & mid-range travel
- 📝 **Booking Checklist** - Critical advance booking reminders

## Structure

```
japan-trip-planner/
├── index.js                    # Main entry point
├── data/
│   ├── constants.js           # Shared constants & colors
│   ├── flightData.js          # Flights, prices, booking links
│   ├── itineraryData.js       # Cities, anime spots, attractions
│   └── index.js               # Data exports
└── components/
    ├── JapanTripPlanner.jsx   # Main component
    ├── common/
    │   ├── Header.jsx
    │   ├── Footer.jsx
    │   ├── MainNavigation.jsx
    │   └── TabNavigation.jsx
    ├── booking/
    │   ├── BookingOverview.jsx
    │   ├── FlightsTab.jsx
    │   ├── DatesTab.jsx
    │   └── BookNowTab.jsx
    └── itinerary/
        ├── RouteTab.jsx
        ├── AnimeTab.jsx
        ├── ScheduleTab.jsx
        ├── CostsTab.jsx
        └── TipsTab.jsx
```

## Usage

```jsx
import JapanTripPlanner from './japan-trip-planner';

function App() {
  return <JapanTripPlanner />;
}
```

## Dependencies

- React 18+
- Recharts (for charts)

```bash
npm install recharts
```

## Customization

### Update Flight Data
Edit `data/flightData.js` to update prices, dates, or add new routes.

### Update Itinerary
Edit `data/itineraryData.js` to modify cities, attractions, or daily schedule.

### Change Colors
Edit `data/constants.js` to customize the color scheme.

## Key Findings

- **Save $351** by flying from Buenos Aires instead of Montevideo
- **Best dates**: May 7-22 (post-Golden Week, lowest crowds)
- **Cheapest flight**: Copa via Panama - $1,327 round-trip
- **Fastest route**: LATAM via São Paulo - 26h

## License

MIT
