'use client';
import { useRouter } from 'next/navigation';
import AuthWrapper from '../components/AuthWrapper';
import Menubar from '../components/Menubar';
import { FaCube, FaNetworkWired, FaChartLine, FaExclamationTriangle } from 'react-icons/fa';

function Gateways() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    router.push('/login');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Menubar />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-6">Gateways</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SummaryCard title="Total Assets" value="156" icon={<FaCube />} color="bg-blue-500" />
          <SummaryCard title="Active Gateways" value="23" icon={<FaNetworkWired />} color="bg-green-500" />
          <SummaryCard title="Data Points Today" value="1.2M" icon={<FaChartLine />} color="bg-purple-500" />
          <SummaryCard title="Alerts" value="3" icon={<FaExclamationTriangle />} color="bg-red-500" />
        </div>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentAssets />
          <RecentAlerts />
        </div>
      </main>
    </div>
  );
}

function SummaryCard({ title, value, icon, color }) {
  return (
    <div className={`${color} text-white rounded-lg shadow-md p-6`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm uppercase">{title}</p>
          <p className="text-3xl font-bold mt-1">{value}</p>
        </div>
        <div className="text-4xl opacity-80">{icon}</div>
      </div>
    </div>
  );
}

function RecentAssets() {
  const assets = [
    { id: 1, name: 'Home Toaster', status: 'Online', lastReading: '98°F' },
    { id: 2, name: 'Factory Sensor A', status: 'Offline', lastReading: 'N/A' },
    { id: 3, name: 'Warehouse Temp', status: 'Online', lastReading: '72°F' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Assets</h2>
      <ul>
        {assets.map((asset) => (
          <li key={asset.id} className="border-b last:border-b-0 py-3 flex justify-between items-center">
            <div>
              <p className="font-medium">{asset.name}</p>
              <p className={`text-sm ${asset.status === 'Online' ? 'text-green-500' : 'text-red-500'}`}>{asset.status}</p>
            </div>
            <p className="text-gray-600">{asset.lastReading}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function RecentAlerts() {
  const alerts = [
    { id: 1, asset: 'Factory Sensor A', message: 'Offline for 2 hours', severity: 'High' },
    { id: 2, asset: 'Warehouse Temp', message: 'Temperature above threshold', severity: 'Medium' },
    { id: 3, asset: 'Home Toaster', message: 'Unusual activity detected', severity: 'Low' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Alerts</h2>
      <ul>
        {alerts.map((alert) => (
          <li key={alert.id} className="border-b last:border-b-0 py-3">
            <p className="font-medium">{alert.asset}</p>
            <p className="text-sm text-gray-600">{alert.message}</p>
            <p className={`text-sm mt-1 ${
              alert.severity === 'High' ? 'text-red-500' : 
              alert.severity === 'Medium' ? 'text-yellow-500' : 'text-blue-500'
            }`}>
              {alert.severity} Priority
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function WrappedHomePage() {
  return (
    <AuthWrapper>
      <Gateways />
    </AuthWrapper>
  );
}