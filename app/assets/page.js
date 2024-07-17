'use client';
import { useRouter } from 'next/navigation';
import AuthWrapper from '../components/AuthWrapper';
import Menubar from '../components/Menubar';
import { FaMapMarkedAlt, FaTable, FaDownload } from 'react-icons/fa';

function Assets() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Menubar />
      <main className="flex-grow p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Assets</h1>
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              <FaMapMarkedAlt className="inline mr-2" /> Map
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
              <FaTable className="inline mr-2" /> Sara Test
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <MapComponent />
          </div>
          <div>
            <OverviewCard />
          </div>
        </div>
        <AssetTable />
      </main>
    </div>
  );
}

function MapComponent() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 h-96">
      <h2 className="text-xl font-semibold mb-4">Map</h2>
      {/* Add map component here */}
      <div className="bg-gray-200 h-full flex items-center justify-center">
        Map placeholder
      </div>
    </div>
  );
}

function OverviewCard() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">Overview</h2>
      <p><strong>Site:</strong> Sara Test</p>
      <p><strong>Sensors Reported:</strong> 194/321</p>
      <p><strong>Total Assets:</strong> 163</p>
      <h3 className="font-semibold mt-4 mb-2">Map Key</h3>
      {/* Add map key items here */}
    </div>
  );
}

function AssetTable() {
  const assets = [
    { id: 1, name: 'A1', location: 'Sara Test', activeAlarms: '', lastReading: '', current: '', hr24: '' },
    { id: 2, name: 'Add Dept asset test edited', location: 'Sara Test', activeAlarms: '', lastReading: '', current: '', hr24: '' },
    { id: 3, name: 'AM-1075 Test (do not touch)', location: 'Sara Test', activeAlarms: 'High Humidity', lastReading: '2 minutes ago', current: '71.06°F / 43.58%', hr24: '70.36°F / 71.83°F' },
    // Add more assets as needed
  ];

  return (
    <div className="mt-6 bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-semibold">Assets</h2>
        <div className="flex space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            <FaDownload className="inline mr-2" /> Open Floor Plan
          </button>
          <select className="border rounded px-2 py-1">
            <option>Last Reading</option>
            {/* Add more options */}
          </select>
          <select className="border rounded px-2 py-1">
            <option>View as: List</option>
            {/* Add more options */}
          </select>
        </div>
      </div>
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Asset</th>
            <th className="px-4 py-2 text-left">Location</th>
            <th className="px-4 py-2 text-left">Active Alarms</th>
            <th className="px-4 py-2 text-left">Last Reading</th>
            <th className="px-4 py-2 text-left">Current</th>
            <th className="px-4 py-2 text-left">24 HR MIN/MAX</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset) => (
            <tr key={asset.id} className="border-b">
              <td className="px-4 py-2 text-blue-500">{asset.name}</td>
              <td className="px-4 py-2">{asset.location}</td>
              <td className="px-4 py-2 text-orange-500">{asset.activeAlarms}</td>
              <td className="px-4 py-2">{asset.lastReading}</td>
              <td className="px-4 py-2">{asset.current}</td>
              <td className="px-4 py-2">{asset.hr24}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-4 flex justify-between items-center">
        <p>1 - 20 of 26</p>
        {/* Add pagination controls here */}
      </div>
    </div>
  );
}

export default function WrappedHomePage() {
  return (
    <AuthWrapper>
      <Assets />
    </AuthWrapper>
  );
}