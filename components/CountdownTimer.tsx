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
    const targetDate = new Date('2025-05-22T00:00:00');

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
    <div className="min-h-screen bg-gradient-to-r from-pink-400 to-pink-500 flex flex-col items-center justify-center p-4">
      <button
        onClick={() => router.push('/form-page')}
        className="mb-12 bg-white/90 text-pink-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-white transition-all shadow-lg"
      >
        Go to Form Page
      </button>
      <h1 className="text-5xl font-bold mb-16 text-white text-center">Countdown to May 22nd, 2025</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
          <div className="text-6xl font-bold text-white mb-2">{timeLeft.days}</div>
          <div className="text-lg text-white/90 font-medium">Days</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
          <div className="text-6xl font-bold text-white mb-2">{timeLeft.hours}</div>
          <div className="text-lg text-white/90 font-medium">Hours</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
          <div className="text-6xl font-bold text-white mb-2">{timeLeft.minutes}</div>
          <div className="text-lg text-white/90 font-medium">Minutes</div>
        </div>
        <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
          <div className="text-6xl font-bold text-white mb-2">{timeLeft.seconds}</div>
          <div className="text-lg text-white/90 font-medium">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer; 