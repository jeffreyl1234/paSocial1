'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const CountdownTimer = () => {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // May 17, 2025 at 6:00 PM PST
    const targetDate = new Date('2025-05-17T18:00:00-07:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        setTimeLeft({
          days,
          hours,
          minutes,
          seconds
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <button
        onClick={() => router.push('/form-page')}
        className="mb-12 bg-white/90 text-pink-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-white transition-all shadow-lg"
      >
        Go to Form Page
      </button>
      <h1 className="text-5xl font-bold mb-16 text-gray-800 text-center">Countdown to PA SOCIAL!! :O</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="bg-gray-100 p-8 rounded-2xl shadow">
          <div className="text-6xl font-bold text-gray-800 mb-2">{timeLeft.days}</div>
          <div className="text-lg text-gray-600 font-medium">Days</div>
        </div>
        <div className="bg-gray-100 p-8 rounded-2xl shadow">
          <div className="text-6xl font-bold text-gray-800 mb-2">{timeLeft.hours}</div>
          <div className="text-lg text-gray-600 font-medium">Hours</div>
        </div>
        <div className="bg-gray-100 p-8 rounded-2xl shadow">
          <div className="text-6xl font-bold text-gray-800 mb-2">{timeLeft.minutes}</div>
          <div className="text-lg text-gray-600 font-medium">Minutes</div>
        </div>
        <div className="bg-gray-100 p-8 rounded-2xl shadow">
          <div className="text-6xl font-bold text-gray-800 mb-2">{timeLeft.seconds}</div>
          <div className="text-lg text-gray-600 font-medium">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer; 