'use client';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { FaUser } from 'react-icons/fa';

export default function Menubar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const isActive = (path) => pathname === path;


  const handleLogout = () => {
    localStorage.removeItem('user'); // Remove the user item from local storage
    router.push('/login'); // Redirect to login page after logout
  };

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image src="/built-logo.png" alt="Company Logo" width={120} height={40} />
            <nav className="ml-6 h-full">
              <ul className="flex h-full">
                {['Dashboard', 'Assets', 'Gateways'].map((item) => (
                  <li key={item} className="relative h-full flex items-center">
                    <a
                      onClick={() => router.push(`/${item.toLowerCase()}`)}
                      className={`px-4 py-2 cursor-pointer h-full flex items-center
                        ${isActive(`/${item.toLowerCase()}`)
                          ? 'text-bright-blue font-semibold'
                          : 'text-white hover:text-gray-300'}`}
                    >
                      {item}
                    </a>
                    {isActive(`/${item.toLowerCase()}`) && (
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-bright-blue"></div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="focus:outline-none"
            >
              <FaUser className="text-white bg-blue-600 rounded-full p-1 w-8 h-8" />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Account Details</a>
                <hr className="my-1" />
                <button 
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>


        </div>
      </div>
    </header>
  );
}