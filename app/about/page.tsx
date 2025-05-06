'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="text-center py-16">
        <h1 className="text-6xl font-bold text-gray-800 mb-8">Eta Chi</h1>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Pledge Class Vision</h2>
          <p className="text-xl text-gray-600 italic leading-relaxed">
            "To be a close-knit and confident group of daring business leaders maneuvering risk and adversity with curiosity and enthusiasm."
          </p>
        </div>
      </div>

      {/* Pictures Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative aspect-square">
            <Image
              src="/pic1.png"
              alt="Eta Chi Photo 1"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/pic2.png"
              alt="Eta Chi Photo 2"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/pic3.png"
              alt="Eta Chi Photo 3"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/pic4.png"
              alt="Eta Chi Photo 4"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/pic5.png"
              alt="Eta Chi Photo 5"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/pic6.png"
              alt="Eta Chi Photo 6"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 