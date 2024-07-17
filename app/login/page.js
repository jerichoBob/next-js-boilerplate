import LoginForm from '../components/LoginForm';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-[556px]">
        <div className="flex justify-center mb-6 relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300"></div>
          <Image src="/built-b-logo.png" alt="Built B Logo" width={100} height={100} className="relative z-10" />
        </div>
        <LoginForm />
        <div className="flex justify-between mt-4 text-sm">
          <a href="#" className="text-blue-600 hover:underline">Use my company's login</a>
          <a href="#" className="text-blue-600 hover:underline">Forgot password</a>
        </div>
      </div>
    </main>
  );
}