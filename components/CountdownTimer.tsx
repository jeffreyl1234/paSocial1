'use client';

import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2024-05-22T00:00:00');

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white">
      <h1 className="text-4xl font-bold mb-8">Countdown to May 22nd</h1>
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