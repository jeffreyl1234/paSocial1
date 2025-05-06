'use client';

import { useRouter } from 'next/navigation';

const Navigation = () => {
  const router = useRouter();

  return (
    <nav className="bg-transparent p-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex gap-4">
          <button 
            onClick={() => router.push('/')}
            className="px-4 py-2 text-black hover:bg-gray-100 rounded font-medium"
          >
            Home
          </button>
          <button 
            onClick={() => router.push('/about')}
            className="px-4 py-2 text-black hover:bg-gray-100 rounded font-medium"
          >
            About
          </button>
          <button 
            onClick={() => router.push('/form-page')}
            className="px-4 py-2 text-black hover:bg-gray-100 rounded font-medium"
          >
            PA Social
          </button>
          <button 
            onClick={() => router.push('/play')}
            className="px-4 py-2 text-black hover:bg-gray-100 rounded font-medium"
          >
            Play
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 