'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function FormPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 text-white flex items-center justify-center">
      <div className="text-center p-8">
        <div className="mb-8 flex justify-center">
          <Image 
            src="/form-icon.jpg"
            alt="Form Icon"
            width={150}
            height={150}
            className="rounded-lg shadow-lg"
          />
        </div>
        <h1 className="text-4xl font-bold mb-8 text-white">GET HYPED!!</h1>
        <div className="space-y-6">
          <button
            onClick={() => window.location.href = 'https://forms.gle/xgGXP4pv2WM7moFW8'}
            className="block mx-auto bg-yellow-400 text-black px-8 py-6 rounded-xl text-3xl font-bold hover:bg-yellow-300 transition-colors"
          >
            Click here for form!
          </button>
          <button
            onClick={() => router.push('/')}
            className="block mx-auto bg-white/30 text-white px-6 py-4 rounded-xl text-xl font-bold hover:bg-white/40 transition-colors"
          >
            Back to Countdown
          </button>
        </div>
      </div>
    </div>
  );
} 