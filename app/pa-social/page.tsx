'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function PASocialPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Infographic Section */}
        <div className="mb-12 flex justify-center">
          <div className="w-full max-w-2xl">
            <Image
              src="/infographic.PNG"
              alt="PA Social Infographic"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8 text-black">PA Social</h1>
          <p className="text-lg text-gray-700 mb-8">
            Join us for an exciting social event! Fill out the form below to register.
          </p>
          <Link
            href="/form-page"
            className="inline-block bg-blue-500 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-blue-600 transition-colors"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
} 