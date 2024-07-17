import LoginForm from './components/LoginForm';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <LoginForm />
    </main>
  );
}