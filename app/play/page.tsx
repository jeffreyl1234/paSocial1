'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function PlayPage() {
  const [score, setScore] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [timeLeft, setTimeLeft] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);

  const moveLogo = () => {
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 100;
    setPosition({
      x: Math.random() * maxX,
      y: Math.random() * maxY
    });
  };

  const handleClick = () => {
    setScore(prev => prev + 1);
    moveLogo();
  };

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setIsPlaying(true);
    moveLogo();
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsPlaying(false);
    }
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-black">Catch the Mr. Patel!</h1>
      
      {!isPlaying && timeLeft === 30 && (
        <button
          onClick={startGame}
          className="mb-8 bg-blue-500 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-blue-600 transition-colors"
        >
          Start Game
        </button>
      )}

      {isPlaying && (
        <div className="text-center mb-8">
          <p className="text-2xl font-bold mb-2">Score: {score}</p>
          <p className="text-xl">Time Left: {timeLeft}s</p>
        </div>
      )}

      {timeLeft === 0 && (
        <div className="text-center mb-8">
          <p className="text-3xl font-bold mb-4">Game Over!</p>
          <p className="text-2xl mb-4">Final Score: {score}</p>
          <button
            onClick={startGame}
            className="bg-blue-500 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-blue-600 transition-colors"
          >
            Play Again
          </button>
        </div>
      )}

      {isPlaying && (
        <div
          onClick={handleClick}
          className="absolute cursor-pointer transition-all duration-100"
          style={{
            left: position.x,
            top: position.y,
            width: '100px',
            height: '100px',
          }}
        >
          <Image
            src="/patel.png"
            alt="Patel"
            width={100}
            height={100}
            className="rounded-full"
          />
        </div>
      )}
    </div>
  );
}