'use client';
import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function AuthWrapper({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated && pathname !== '/login') {
      router.push('/login');
    } else if (isAuthenticated && pathname === '/') {
      router.push('/dashboard');
    }
  }, [router, pathname]);

  return <>{children}</>;
}