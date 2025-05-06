'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link
              href="/"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                pathname === '/' ? 'text-blue-600' : 'text-black hover:text-blue-500'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                pathname === '/about' ? 'text-blue-600' : 'text-black hover:text-blue-500'
              }`}
            >
              About
            </Link>
            <Link
              href="/pa-social"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                pathname === '/pa-social' ? 'text-blue-600' : 'text-black hover:text-blue-500'
              }`}
            >
              PA Social
            </Link>
            <Link
              href="/play"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                pathname === '/play' ? 'text-blue-600' : 'text-black hover:text-blue-500'
              }`}
            >
              Play
            </Link>
            <Link
              href="/brothers"
              className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                pathname === '/brothers' ? 'text-blue-600' : 'text-black hover:text-blue-500'
              }`}
            >
              Brothers
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 