'use client';

import { useState } from 'react';

interface CarouselItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  color: string;
  icon: string;
}

const items: CarouselItem[] = [
  {
    id: '1',
    title: 'Recarga la tarjeta Tullave',
    description: 'Recarga la tarjeta tullave desde el celular. Opción recarga.',
    color: 'bg-gradient-to-r from-blue-900 to-gray-900',
    icon: '📱',
  },
  {
    id: '2',
    title: 'Viaja con tranquilidad',
    description: 'Consulta tus rutas y alertas en tiempo real.',
    color: 'bg-gradient-to-r from-green-600 to-blue-900',
    icon: '🚌',
  },
  {
    id: '3',
    title: 'Planea tu viaje',
    description: 'Encuentra la mejor ruta entre estaciones.',
    color: 'bg-gradient-to-r from-purple-600 to-blue-900',
    icon: '🗺️',
  },
];

export default function CarouselBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
  };

  const item = items[currentSlide];

  return (
    <div className="relative w-full">
      {/* Carousel */}
      <div className={`${item.color} text-white py-8 px-6 rounded-2xl overflow-hidden relative`}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-sm text-gray-100">{item.description}</p>
          </div>
          <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
            Antes
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between absolute -left-4 -right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition hidden md:block"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition hidden md:block"
        >
          ❯
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition ${
              idx === currentSlide ? 'bg-red-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
