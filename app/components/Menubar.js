'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaUser } from 'react-icons/fa';

export default function Menubar() {
  const router = useRouter();

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/built-logo.png" alt="Company Logo" width={120} height={40} />
          <nav className="ml-6">
            <a href="#" className="text-white mr-4 hover:text-gray-300">Dashboard</a>
            <a href="#" className="text-white mr-4 hover:text-gray-300">Assets</a>
            <a href="#" className="text-white hover:text-gray-300">Gateways</a>
          </nav>
        </div>
        <div className="flex items-center">
          <FaUser className="text-white bg-blue-600 rounded-full p-1 w-8 h-8" />
        </div>
      </div>
    </header>
  );
}