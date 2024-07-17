'use client';
import { useRouter } from 'next/navigation';
import AuthWrapper from '../components/AuthWrapper';

function HomePage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => router.push('/details')}
      >
        Details
      </button>
    </main>
  );
}

export default function WrappedHomePage() {
  return (
    <AuthWrapper>
      <HomePage />
    </AuthWrapper>
  );
}