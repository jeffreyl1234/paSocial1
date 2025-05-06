'use client';

import Image from 'next/image';
import { useState } from 'react';

// This is a placeholder type - you'll need to update this with actual brother data
type Brother = {
  name: string;
  image: string;
};

// Placeholder data - replace with actual brother data
const brothers: Brother[] = [
  {
    name: "Alex Pascu",
    image: "/headshots/Alex_Pascu_Headshot.jpg"
  },
  {
    name: "Andrew Xiao",
    image: "/headshots/Andrew_Xiao_Headshot.jpg"
  },
  {
    name: "Cameron Cocea",
    image: "/headshots/Cameron_Cocea_Headshot.jpg"
  },
  {
    name: "Erik Wang",
    image: "/headshots/Erik_Wang_Headshot.jpg"
  },
  {
    name: "Felicia Deshon",
    image: "/headshots/Felicia_Deshon_Headshot.png"
  },
  {
    name: "Izabella Chan",
    image: "/headshots/Izabella_Chan_Headshot.jpeg"
  },
  {
    name: "Jeffrey Liu",
    image: "/headshots/Jeffrey_Liu_Headshot.jpeg"
  },
  {
    name: "Karen Wang",
    image: "/headshots/Karen_Wang_Headshot.jpg"
  },
  {
    name: "Kai Sparks",
    image: "/headshots/Kai_Sparks_Headshot.JPG"
  },
  {
    name: "Masaki Zhang",
    image: "/headshots/Masaki_Zhang_Headshot.jpg"
  },
  {
    name: "Minh-Tu Phan",
    image: "/headshots/Minh_Tu_Phan_Headshot.webp"
  },
  {
    name: "Raka Sudijono",
    image: "/headshots/Raka_Sudijono_Headshot.JPG"
  },
  {
    name: "Raymond Yang",
    image: "/headshots/Ray_Yang_Headshot.jpg"
  },
  {
    name: "Renee Yan",
    image: "/headshots/Renee_Yan_Headshot.JPG"
  },
];

export default function BrothersPage() {
  const [selectedBrother, setSelectedBrother] = useState<Brother | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-black">Meet the Brothers</h1>
      
      {/* Grid of headshots */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {brothers.map((brother, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setSelectedBrother(brother)}
          >
            <div className="relative w-48 h-48 mb-3">
              <Image
                src={brother.image}
                alt={brother.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-lg font-medium text-gray-900">{brother.name}</h3>
          </div>
        ))}
      </div>

      {/* Modal for selected brother */}
      {selectedBrother && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <div className="relative w-64 h-64 mx-auto mb-4">
              <Image
                src={selectedBrother.image}
                alt={selectedBrother.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h2 className="text-2xl font-bold text-center mb-4">{selectedBrother.name}</h2>
            <button
              onClick={() => setSelectedBrother(null)}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 