'use client';

import { useRouter } from 'next/navigation';

export default function FormPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white">
      <div className="flex flex-col items-center gap-8">
        <button
          onClick={() => window.location.href = 'https://forms.gle/xgGXP4pv2WM7moFW8'}
          className="bg-white text-blue-600 px-8 py-4 rounded-lg text-2xl font-bold hover:bg-blue-100 transition-colors"
        >
          Click here for form!
        </button>
        <button
          onClick={() => router.push('/')}
          className="bg-white text-blue-600 px-6 py-3 rounded-lg text-xl font-bold hover:bg-blue-100 transition-colors"
        >
          Back to Countdown
        </button>
      </div>
    </div>
  );
} 