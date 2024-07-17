'use client';
import { useRouter } from 'next/navigation';
import AuthWrapper from '../components/AuthWrapper';
import styles from './HomePage.module.css';
import Menubar from '../components/Menubar';

function HomePage() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    router.push('/login');
  };

  return (
    <div className={styles.pageContainer}>
      <Menubar />

      <main className={styles.mainContent}>
        <h1 className={styles.title}>Home Page</h1>
        <div className={styles.buttonContainer}>
          <button
            className={styles.button}
            onClick={() => router.push('/details')}
          >
            Details
          </button>
          <button
            className={`${styles.button} ${styles.logoutButton}`}
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </main>
    </div>
  );
}

export default function WrappedHomePage() {
  return (
    <AuthWrapper>
      <HomePage />
    </AuthWrapper>
  );
}