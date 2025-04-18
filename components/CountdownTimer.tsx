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
    console.log('Target Date:', targetDate);
    console.log('Current Date:', new Date());

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      console.log('Time difference (ms):', difference);

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        console.log('Calculated time:', { days, hours, minutes, seconds });
        
        setTimeLeft({
          days,
          hours,
          minutes,
          seconds
        });
      } else {
        console.log('Countdown has ended');
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white">
      <button
        onClick={() => router.push('/form-page')}
        className="mb-8 bg-white text-blue-600 px-6 py-3 rounded-lg text-xl font-bold hover:bg-blue-100 transition-colors"
      >
        Go to Form Page
      </button>
      <h1 className="text-4xl font-bold mb-8">Countdown to May 22nd, 2025</h1>
      <div className="grid grid-cols-4 gap-4 text-center">
        <div className="bg-white/20 p-6 rounded-lg">
          <div className="text-4xl font-bold">{timeLeft.days}</div>
          <div className="text-sm">Days</div>
        </div>
        <div className="bg-white/20 p-6 rounded-lg">
          <div className="text-4xl font-bold">{timeLeft.hours}</div>
          <div className="text-sm">Hours</div>
        </div>
        <div className="bg-white/20 p-6 rounded-lg">
          <div className="text-4xl font-bold">{timeLeft.minutes}</div>
          <div className="text-sm">Minutes</div>
        </div>
        <div className="bg-white/20 p-6 rounded-lg">
          <div className="text-4xl font-bold">{timeLeft.seconds}</div>
          <div className="text-sm">Seconds</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer; 