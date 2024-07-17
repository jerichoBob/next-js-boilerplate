'use client';
import { useRouter } from 'next/navigation';
import AuthWrapper from '../components/AuthWrapper';
import Menubar from '../components/Menubar';

function DetailsPage() {
    const router = useRouter();

    return (
    <main className="flex min-h-screen flex-col">
      <Menubar />
      <div className="flex-grow p-4">
        <div className="mb-4">
          <a onClick={() => router.push('/home')} className="text-blue-500 cursor-pointer">&lt; BACK TO ASSETS</a>
          <h2 className="text-2xl font-bold">Home Toaster</h2>
          <button className="text-blue-500">+ VIEW ASSET INFORMATION</button>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-3/4">
            <div className="mb-4">
              <h3 className="text-xl font-semibold">T1 Sensor</h3>
              {/* Add time range selector */}
            </div>
            <div className="border p-4 mb-4">
              {/* Add map component here */}
              <div className="flex justify-between">
                <div>Map</div>
                <div>
                  <h4>Overview</h4>
                  {/* Add overview details */}
                </div>
              </div>
            </div>
            <div className="mb-4">
              {/* Add date range selector */}
            </div>
            <div className="border p-4 mb-4">
              {/* Add temperature graph component */}
            </div>
            <div className="border p-4">
              <h3 className="text-xl font-semibold">Asset History</h3>
              {/* Add asset history table or list */}
            </div>
          </div>
          <div className="w-full lg:w-1/4">
            <div className="border p-4">
              <h3 className="text-lg font-semibold">Last Readings</h3>
              {/* Add last readings list */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function WrappedDetailsPage() {
    return (
      <AuthWrapper>
        <DetailsPage />
      </AuthWrapper>
    );
}