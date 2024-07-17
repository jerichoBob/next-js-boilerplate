'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'bobse' && password === 'its-a-secret') {
      localStorage.setItem('isAuthenticated', 'true');
      router.push('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-300">
        Login
      </button>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </form>
  );
}