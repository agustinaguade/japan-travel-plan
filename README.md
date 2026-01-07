# Japan Trip Planner 🇯🇵

Interactive React dashboard for planning a 16-day Japan trip (April-May 2026).

## Vercel Deployment

### Option 1: Direct Upload
1. Extract the zip file
2. Push to GitHub
3. Import in Vercel → Select repo → Deploy

### Option 2: Vercel CLI
```bash
cd japan-trip-planner
npm install
vercel
```

## Project Structure

```
japan-trip-planner/
├── package.json              # Dependencies & scripts
├── public/
│   └── index.html           # HTML template
└── src/
    ├── index.js             # React entry point
    ├── App.jsx              # App wrapper
    ├── data/
    │   ├── index.js         # Data exports
    │   ├── constants.js     # Colors, transport cost
    │   ├── flightData.js    # Flights, prices, links
    │   └── itineraryData.js # Cities, anime, schedule
    └── components/
        ├── JapanTripPlanner.jsx  # Main component
        ├── common/
        │   ├── index.js
        │   ├── Header.jsx
        │   ├── Footer.jsx
        │   ├── MainNavigation.jsx
        │   └── TabNavigation.jsx
        ├── booking/
        │   ├── index.js
        │   ├── BookingOverview.jsx
        │   ├── FlightsTab.jsx
        │   ├── DatesTab.jsx
        │   └── BookNowTab.jsx
        └── itinerary/
            ├── index.js
            ├── RouteTab.jsx
            ├── AnimeTab.jsx
            ├── ScheduleTab.jsx
            ├── CostsTab.jsx
            └── TipsTab.jsx
```

## Quick Edits

| What to change | File to edit |
|---------------|--------------|
| Flight prices/dates | `src/data/flightData.js` |
| Itinerary days | `src/data/itineraryData.js` |
| Colors | `src/data/constants.js` |
| Header/Footer | `src/components/common/` |
| Booking tabs | `src/components/booking/` |
| Japan tabs | `src/components/itinerary/` |

## Local Development

```bash
npm install
npm start
```

Opens at http://localhost:3000

## Dependencies

- React 18
- Recharts (charts)

## Key Features

- ✈️ Flight comparison (MVD vs EZE)
- 📅 Weather & crowd analysis
- 🗺️ 16-day itinerary
- 🎌 Anime locations guide
- 💰 Budget calculator
