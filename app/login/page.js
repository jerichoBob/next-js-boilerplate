import LoginForm from '../components/LoginForm';
import Image from 'next/image';
import styles from './LoginPage.module.css';

export default function LoginPage() {
  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logoContainer}>
          <div className={styles.divider}></div>
          <Image src="/built-b-logo.png" alt="Built B Logo" width={100} height={100} className={styles.logo} />
        </div>
        <LoginForm />
        <div className={styles.linkContainer}>
          <a href="#" className={styles.link}>Use my company's login</a>
          <a href="#" className={styles.link}>Forgot password</a>
        </div>
      </div>
    </main>
  );
}