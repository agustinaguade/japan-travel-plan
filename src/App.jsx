import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const FlightComparisonMVDvsEZE = () => {
  const [activeTab, setActiveTab] = useState('comparison');
  
  // MONTEVIDEO (MVD) → JAPAN flights (with bags included)
  const mvdFlights = [
    { 
      airline: 'LATAM (Plus)',
      fareType: 'Plus',
      price: 1768,
      bagIncluded: true,
      duration: '28-32h',
      stops: '2 (São Paulo + connection)',
      route: 'MVD → GRU → Tokyo',
      source: 'Expedia',
      sourceUrl: 'https://www.expedia.com/lp/flights/mvd/nrt/montevideo-to-tokyo'
    },
    { 
      airline: 'Copa + ANA',
      fareType: 'Economy Classic',
      price: 1832,
      bagIncluded: true,
      duration: '32-38h',
      stops: '2 (Panama + connection)',
      route: 'MVD → PTY → Tokyo',
      source: 'Google Flights',
      sourceUrl: 'https://www.google.com/travel/flights/flights-from-montevideo-to-tokyo.html'
    },
    { 
      airline: 'Aerolíneas + Partners',
      fareType: 'Economy',
      price: 1793,
      bagIncluded: true,
      duration: '34-40h',
      stops: '2-3',
      route: 'MVD → EZE → connection → Tokyo',
      source: 'Expedia',
      sourceUrl: 'https://www.expedia.com/lp/flights/mvd/nrt/montevideo-to-tokyo'
    },
    { 
      airline: 'KLM',
      fareType: 'Economy',
      price: 1821,
      bagIncluded: true,
      duration: '30-36h',
      stops: '2 (Amsterdam)',
      route: 'MVD → AMS → Tokyo',
      source: 'Expedia',
      sourceUrl: 'https://www.expedia.com/lp/flights/mvd/nrt/montevideo-to-tokyo'
    },
    { 
      airline: 'Iberia',
      fareType: 'Economy',
      price: 2406,
      bagIncluded: true,
      duration: '32-38h',
      stops: '2 (Madrid)',
      route: 'MVD → MAD → Tokyo',
      source: 'Google Flights',
      sourceUrl: 'https://www.google.com/travel/flights/flights-from-montevideo-to-tokyo.html'
    },
  ];

  // BUENOS AIRES (EZE) → JAPAN flights (with bags included)
  const ezeFlights = [
    { 
      airline: 'Copa Airlines',
      fareType: 'Economy Classic',
      price: 1327,
      bagIncluded: true,
      duration: '30-34h',
      stops: '1 (Panama)',
      route: 'EZE → PTY → Tokyo',
      source: 'Skyscanner',
      sourceUrl: 'https://www.skyscanner.com/routes/buea/tyoa/buenos-aires-to-tokyo.html'
    },
    { 
      airline: 'LATAM (Plus)',
      fareType: 'Plus',
      price: 1550,
      bagIncluded: true,
      duration: '26-28h',
      stops: '1 (São Paulo)',
      route: 'EZE → GRU → Tokyo',
      source: 'Expedia',
      sourceUrl: 'https://www.expedia.com/lp/flights/eze/hnd/buenos-aires-to-tokyo'
    },
    { 
      airline: 'Avianca',
      fareType: 'Economy',
      price: 1500,
      bagIncluded: true,
      duration: '32-36h',
      stops: '1-2 (Bogotá)',
      route: 'EZE → BOG → Tokyo',
      source: 'Skyscanner',
      sourceUrl: 'https://www.skyscanner.com/routes/buea/tyoa/buenos-aires-to-tokyo.html'
    },
    { 
      airline: 'Air Canada',
      fareType: 'Economy Standard',
      price: 1817,
      bagIncluded: true,
      duration: '28-32h',
      stops: '1 (Toronto)',
      route: 'EZE → YYZ → Tokyo',
      source: 'Google Flights',
      sourceUrl: 'https://www.google.com/travel/flights/flights-from-buenos-aires-to-tokyo.html'
    },
    { 
      airline: 'Turkish Airlines',
      fareType: 'Economy',
      price: 1916,
      bagIncluded: true,
      duration: '30-34h',
      stops: '1 (Istanbul)',
      route: 'EZE → IST → Tokyo',
      source: 'Google Flights',
      sourceUrl: 'https://www.google.com/travel/flights/flights-from-buenos-aires-to-tokyo.html'
    },
  ];

  // MONTEVIDEO → BUENOS AIRES transport options
  const transportOptions = [
    {
      method: 'Buquebus Direct Ferry',
      priceMin: 86,
      priceMax: 196,
      priceAvg: 140,
      duration: '2h 30min',
      frequency: '2x daily',
      pros: 'Fastest, most comfortable, direct',
      cons: 'Most expensive option',
      source: 'Buquebus',
      sourceUrl: 'https://www.buquebus.com'
    },
    {
      method: 'Colonia Express (Bus+Ferry)',
      priceMin: 55,
      priceMax: 130,
      priceAvg: 90,
      duration: '4h 30min',
      frequency: '5x daily',
      pros: 'Cheapest, frequent departures',
      cons: 'Longer journey, transfer in Colonia',
      source: 'Colonia Express',
      sourceUrl: 'https://www.coloniaexpress.com'
    },
    {
      method: 'Bus via Colonia (separate)',
      priceMin: 58,
      priceMax: 73,
      priceAvg: 65,
      duration: '5h total',
      frequency: 'Multiple daily',
      pros: 'Budget option, can stop in Colonia',
      cons: 'Need to book bus + ferry separately',
      source: 'Rome2Rio',
      sourceUrl: 'https://www.rome2rio.com/s/Montevideo/Buenos-Aires'
    },
  ];

  // Calculate total costs for comparison
  const calculateTotalCost = (transportCost, flightCost) => transportCost + flightCost;
  
  // Chart data for price comparison
  const comparisonChartData = [
    { 
      route: 'MVD Direct', 
      price: 1768, 
      fill: '#ef4444',
      label: 'Montevideo → Japan (LATAM)'
    },
    { 
      route: 'EZE Direct', 
      price: 1327, 
      fill: '#22c55e',
      label: 'Buenos Aires → Japan (Copa)'
    },
    { 
      route: 'MVD→EZE→Japan', 
      price: 1417, 
      fill: '#3b82f6',
      label: 'MVD + Transport + EZE Flight'
    },
  ];

  // Savings calculation
  const mvdCheapest = 1768;
  const ezeCheapest = 1327;
  const transportCheapest = 90; // Colonia Express round-trip avg
  const totalViaEZE = ezeCheapest + transportCheapest;
  const savings = mvdCheapest - totalViaEZE;

  const TabButton = ({ name, label, emoji }) => (
    <button
      onClick={() => setActiveTab(name)}
      className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
        activeTab === name 
          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      <span>{emoji}</span>
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            🇺🇾 Montevideo vs 🇦🇷 Buenos Aires → 🇯🇵 Japan
          </h1>
          <p className="text-slate-600">Complete Price Comparison | April - May 2026 | Round-trip with Bags</p>
        </div>

        {/* Savings Banner */}
        <div className="mb-6 p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white shadow-lg">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="text-center">
              <p className="text-sm opacity-90">Direct from Montevideo</p>
              <p className="text-2xl font-bold">${mvdCheapest}</p>
            </div>
            <div className="text-4xl">→</div>
            <div className="text-center">
              <p className="text-sm opacity-90">Via Buenos Aires</p>
              <p className="text-2xl font-bold">${totalViaEZE}</p>
              <p className="text-xs opacity-80">(${transportCheapest} transport + ${ezeCheapest} flight)</p>
            </div>
            <div className="text-4xl">=</div>
            <div className="text-center bg-white/20 rounded-lg px-6 py-3">
              <p className="text-sm opacity-90">You Save</p>
              <p className="text-3xl font-bold">${savings}</p>
              <p className="text-xs opacity-80">🎉 Worth the trip!</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <TabButton name="comparison" label="Price Comparison" emoji="📊" />
          <TabButton name="mvd" label="From Montevideo" emoji="🇺🇾" />
          <TabButton name="eze" label="From Buenos Aires" emoji="🇦🇷" />
          <TabButton name="transport" label="MVD → EZE Transport" emoji="🚢" />
          <TabButton name="calculator" label="Cost Calculator" emoji="🧮" />
        </div>

        {/* Content */}
        {activeTab === 'comparison' && (
          <div className="space-y-6">
            {/* Visual Comparison Chart */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4">💰 Total Cost Comparison (Round-trip with 1 checked bag)</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={comparisonChartData} layout="vertical" margin={{ left: 120 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 2000]} tickFormatter={(v) => `$${v}`} />
                  <YAxis type="category" dataKey="route" width={100} />
                  <Tooltip formatter={(value) => `$${value}`} />
                  <Bar dataKey="price" radius={[0, 8, 8, 0]}>
                    {comparisonChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-red-500">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🇺🇾</span>
                  <h3 className="text-lg font-bold text-slate-800">Montevideo Direct</h3>
                </div>
                <p className="text-3xl font-bold text-red-600 mb-2">${mvdCheapest}+</p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Cheapest: LATAM Plus $1,768</li>
                  <li>• Duration: 28-32h (2 stops)</li>
                  <li>• Limited flight options</li>
                  <li>• Fewer departure times</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🇦🇷</span>
                  <h3 className="text-lg font-bold text-slate-800">Buenos Aires Direct</h3>
                </div>
                <p className="text-3xl font-bold text-green-600 mb-2">${ezeCheapest}+</p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Cheapest: Copa Classic $1,327</li>
                  <li>• Duration: 26-34h (1 stop)</li>
                  <li>• Many airline options</li>
                  <li>• Frequent departures</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🚢✈️</span>
                  <h3 className="text-lg font-bold text-slate-800">MVD → EZE → Japan</h3>
                </div>
                <p className="text-3xl font-bold text-blue-600 mb-2">${totalViaEZE}+</p>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Transport: ~$90 (Colonia Express)</li>
                  <li>• Flight: $1,327 (Copa)</li>
                  <li>• Extra travel: 4-5h to EZE</li>
                  <li className="text-green-600 font-semibold">• Saves ${savings}!</li>
                </ul>
              </div>
            </div>

            {/* Recommendation */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-800 mb-3">✅ Recommendation: Go via Buenos Aires!</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-green-700 mb-2">Why it's worth it:</p>
                  <ul className="space-y-1 text-slate-700">
                    <li>💰 Save ~${savings} on total trip cost</li>
                    <li>✈️ Better flight options (1 stop vs 2)</li>
                    <li>⏱️ Faster total flight time (26-28h vs 28-32h)</li>
                    <li>🎯 More airlines to choose from</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-green-700 mb-2">Best route:</p>
                  <ol className="space-y-1 text-slate-700">
                    <li>1️⃣ Take Colonia Express MVD → EZE (~$90 RT, 4.5h)</li>
                    <li>2️⃣ Stay overnight near EZE airport (~$50-80)</li>
                    <li>3️⃣ Fly Copa Classic EZE → Tokyo ($1,327)</li>
                    <li>4️⃣ <strong>Total: ~$1,467-1,497</strong></li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'mvd' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-slate-800 mb-4">🇺🇾 Montevideo (MVD) → Japan Flights</h2>
            <p className="text-slate-600 mb-4">Round-trip prices with 1 carry-on + 1 checked bag (23kg) included</p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gradient-to-r from-red-500 to-rose-500 text-white">
                  <tr>
                    <th className="p-3 text-left rounded-tl-lg">Airline</th>
                    <th className="p-3 text-left">Fare</th>
                    <th className="p-3 text-left">Route</th>
                    <th className="p-3 text-center">Stops</th>
                    <th className="p-3 text-center">Duration</th>
                    <th className="p-3 text-right">Price</th>
                    <th className="p-3 text-left rounded-tr-lg">Source</th>
                  </tr>
                </thead>
                <tbody>
                  {mvdFlights.map((flight, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-3 font-medium">{flight.airline}</td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                          {flight.fareType}
                        </span>
                      </td>
                      <td className="p-3 text-slate-600 text-xs">{flight.route}</td>
                      <td className="p-3 text-center">{flight.stops}</td>
                      <td className="p-3 text-center">{flight.duration}</td>
                      <td className="p-3 text-right font-bold text-lg text-red-600">${flight.price}</td>
                      <td className="p-3">
                        <a href={flight.sourceUrl} target="_blank" rel="noopener noreferrer" 
                           className="text-blue-600 hover:underline text-xs">
                          🔗 {flight.source}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="text-amber-800 text-sm">
                <strong>⚠️ Note:</strong> Montevideo has fewer direct options to Japan. Most flights require 2+ stops 
                and route through Buenos Aires, São Paulo, or European hubs. Prices are generally $300-500 higher than departing from Buenos Aires.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'eze' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-slate-800 mb-4">🇦🇷 Buenos Aires (EZE) → Japan Flights</h2>
            <p className="text-slate-600 mb-4">Round-trip prices with 1 carry-on + 1 checked bag (23kg) included</p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                  <tr>
                    <th className="p-3 text-left rounded-tl-lg">Airline</th>
                    <th className="p-3 text-left">Fare</th>
                    <th className="p-3 text-left">Route</th>
                    <th className="p-3 text-center">Stops</th>
                    <th className="p-3 text-center">Duration</th>
                    <th className="p-3 text-right">Price</th>
                    <th className="p-3 text-left rounded-tr-lg">Source</th>
                  </tr>
                </thead>
                <tbody>
                  {ezeFlights.map((flight, idx) => (
                    <tr key={idx} className={idx === 0 ? 'bg-green-50 border-2 border-green-300' : idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-3 font-medium">
                        {idx === 0 && <span className="mr-2">🏆</span>}
                        {flight.airline}
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                          {flight.fareType}
                        </span>
                      </td>
                      <td className="p-3 text-slate-600 text-xs">{flight.route}</td>
                      <td className="p-3 text-center">{flight.stops}</td>
                      <td className="p-3 text-center">{flight.duration}</td>
                      <td className="p-3 text-right font-bold text-lg text-green-600">${flight.price}</td>
                      <td className="p-3">
                        <a href={flight.sourceUrl} target="_blank" rel="noopener noreferrer" 
                           className="text-blue-600 hover:underline text-xs">
                          🔗 {flight.source}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 text-sm">
                <strong>✅ Best options:</strong> Copa Airlines Economy Classic ($1,327) or LATAM Plus ($1,550) both include baggage 
                and offer the best value. Buenos Aires has more flight options, better schedules, and significantly lower prices than Montevideo.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'transport' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-slate-800 mb-4">🚢 Montevideo → Buenos Aires Transport Options</h2>
              <p className="text-slate-600 mb-4">Getting from MVD to EZE to catch your flight</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {transportOptions.map((option, idx) => (
                  <div key={idx} className={`p-4 rounded-lg border-2 ${idx === 1 ? 'border-green-400 bg-green-50' : 'border-gray-200'}`}>
                    {idx === 1 && <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">Best Value</span>}
                    <h3 className="font-bold text-lg mt-2">{option.method}</h3>
                    <p className="text-2xl font-bold text-blue-600 my-2">
                      ${option.priceMin} - ${option.priceMax}
                    </p>
                    <p className="text-sm text-slate-600">One-way • Avg: ${option.priceAvg}</p>
                    <div className="mt-3 space-y-2 text-sm">
                      <p><strong>⏱️ Duration:</strong> {option.duration}</p>
                      <p><strong>📅 Frequency:</strong> {option.frequency}</p>
                      <p className="text-green-600"><strong>✅ Pros:</strong> {option.pros}</p>
                      <p className="text-amber-600"><strong>⚠️ Cons:</strong> {option.cons}</p>
                    </div>
                    <a href={option.sourceUrl} target="_blank" rel="noopener noreferrer"
                       className="mt-3 inline-block text-blue-600 hover:underline text-sm">
                      🔗 Book at {option.source}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-lg mb-3">📍 Logistics: MVD → EZE for your Japan flight</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Option A: Same day connection</h4>
                  <ol className="space-y-1 text-slate-700">
                    <li>1. Take early Buquebus (7:30am) from MVD</li>
                    <li>2. Arrive Buenos Aires ~10:00am</li>
                    <li>3. Transfer to EZE airport (~1h)</li>
                    <li>4. Check-in for evening Japan flight</li>
                  </ol>
                  <p className="mt-2 text-blue-600 font-semibold">Cost: ~$140-200 (transport only)</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Option B: Night before (Recommended)</h4>
                  <ol className="space-y-1 text-slate-700">
                    <li>1. Take afternoon Colonia Express</li>
                    <li>2. Arrive Buenos Aires evening</li>
                    <li>3. Stay at hotel near EZE (~$50-80)</li>
                    <li>4. Morning flight to Japan, relaxed</li>
                  </ol>
                  <p className="mt-2 text-green-600 font-semibold">Cost: ~$90-130 + hotel ($50-80)</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'calculator' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-slate-800 mb-4">🧮 Is It Worth Going to Buenos Aires?</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                  <tr>
                    <th className="p-3 text-left rounded-tl-lg">Scenario</th>
                    <th className="p-3 text-right">Transport</th>
                    <th className="p-3 text-right">Flight</th>
                    <th className="p-3 text-right">Hotel</th>
                    <th className="p-3 text-right">TOTAL</th>
                    <th className="p-3 text-right rounded-tr-lg">vs MVD Direct</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-red-50">
                    <td className="p-3 font-medium">🇺🇾 MVD Direct (LATAM)</td>
                    <td className="p-3 text-right">$0</td>
                    <td className="p-3 text-right">$1,768</td>
                    <td className="p-3 text-right">$0</td>
                    <td className="p-3 text-right font-bold text-red-600">$1,768</td>
                    <td className="p-3 text-right text-slate-400">baseline</td>
                  </tr>
                  <tr className="bg-green-50 border-2 border-green-400">
                    <td className="p-3 font-medium">🏆 Via EZE (Copa + Colonia Express)</td>
                    <td className="p-3 text-right">$90</td>
                    <td className="p-3 text-right">$1,327</td>
                    <td className="p-3 text-right">$0</td>
                    <td className="p-3 text-right font-bold text-green-600">$1,417</td>
                    <td className="p-3 text-right font-bold text-green-600">Save $351!</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="p-3 font-medium">Via EZE + Hotel night</td>
                    <td className="p-3 text-right">$90</td>
                    <td className="p-3 text-right">$1,327</td>
                    <td className="p-3 text-right">$70</td>
                    <td className="p-3 text-right font-bold text-blue-600">$1,487</td>
                    <td className="p-3 text-right font-bold text-green-600">Save $281!</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 font-medium">Via EZE (Buquebus + Copa)</td>
                    <td className="p-3 text-right">$140</td>
                    <td className="p-3 text-right">$1,327</td>
                    <td className="p-3 text-right">$0</td>
                    <td className="p-3 text-right font-bold">$1,467</td>
                    <td className="p-3 text-right font-bold text-green-600">Save $301!</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 font-medium">Via EZE (LATAM Plus)</td>
                    <td className="p-3 text-right">$90</td>
                    <td className="p-3 text-right">$1,550</td>
                    <td className="p-3 text-right">$0</td>
                    <td className="p-3 text-right font-bold">$1,640</td>
                    <td className="p-3 text-right font-bold text-green-600">Save $128</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-emerald-100 border border-green-300 rounded-lg">
              <h3 className="font-bold text-green-800 text-lg mb-2">📊 Verdict</h3>
              <p className="text-green-700">
                <strong>YES, it's worth going to Buenos Aires!</strong> Even with the most expensive transport option (Buquebus at $140 round-trip) 
                and a hotel night ($70), you still save over <strong>$200</strong> compared to flying direct from Montevideo.
              </p>
              <p className="text-green-700 mt-2">
                <strong>Best combo:</strong> Colonia Express ($90 RT) + Copa Classic ($1,327) = <strong>$1,417 total</strong> 
                (saves $351 vs MVD direct!)
              </p>
            </div>
          </div>
        )}

        {/* Footer with sources */}
        <div className="mt-8 p-4 bg-white rounded-xl shadow text-sm text-slate-600">
          <h3 className="font-bold mb-2">🔗 Sources</h3>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.skyscanner.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Skyscanner</a>
            <a href="https://www.expedia.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Expedia</a>
            <a href="https://www.google.com/travel/flights" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Flights</a>
            <a href="https://www.buquebus.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Buquebus</a>
            <a href="https://www.coloniaexpress.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Colonia Express</a>
            <a href="https://www.directferries.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Direct Ferries</a>
          </div>
          <p className="mt-2 text-xs text-slate-500">Prices researched January 2026 for April-May 2026 travel. All prices in USD, round-trip, including 1 checked bag.</p>
        </div>
      </div>
    </div>
  );
};

export default FlightComparisonMVDvsEZE;
