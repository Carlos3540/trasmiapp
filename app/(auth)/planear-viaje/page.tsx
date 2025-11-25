'use client';

import { useState } from 'react';

export default function PlanearViajePage() {
  const [origin, setOrigin] = useState('Ubicación Actual');
  const [destination, setDestination] = useState('Elige punto de destino');
  const [showMap, setShowMap] = useState(true);

  return (
    <div className="h-screen flex flex-col">
      {/* Map Area */}
      <div className="flex-1 bg-gradient-to-br from-blue-200 to-blue-400 relative">
        {/* Map Background */}
        <div className="absolute inset-0 overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 400 600">
            {/* Grid pattern like a map */}
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="400" height="600" fill="url(#grid)" />

            {/* Street names */}
            <text x="50" y="50" fontSize="10" fill="rgba(0,0,0,0.3)">
              Carrera 7
            </text>
            <text x="20" y="150" fontSize="10" fill="rgba(0,0,0,0.3)" transform="rotate(-90 20 150)">
              Calle 85
            </text>

            {/* Landmark */}
            <circle cx="350" cy="400" r="20" fill="#8B5CF6" opacity="0.3" />
            <text x="320" y="430" fontSize="12" fill="#5B21B6" fontWeight="bold">
              GIMNASIO LOS
            </text>
            <text x="330" y="445" fontSize="12" fill="#5B21B6" fontWeight="bold">
              SAUCES DE BOSA
            </text>
          </svg>
        </div>

        {/* Origin Point */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">📍</div>
            <div className="text-white font-bold text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
              Origen
            </div>
          </div>
        </div>

        {/* Coverage Circle */}
        <svg className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
          <circle
            cx="128"
            cy="128"
            r="100"
            fill="#22C55E"
            opacity="0.2"
            strokeWidth="2"
            stroke="#22C55E"
            strokeDasharray="5,5"
          />
          <text x="128" y="138" textAnchor="middle" fill="#15803D" fontSize="14" fontWeight="bold">
            5 min.
          </text>
        </svg>

        {/* Destination Marker */}
        <div className="absolute bottom-1/3 right-1/4">
          <div className="flex flex-col items-center">
            <div className="text-2xl mb-1">📍</div>
            <div className="text-white font-bold text-xs bg-black bg-opacity-50 px-2 py-1 rounded">
              Destino
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button className="absolute top-4 left-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:shadow-xl transition">
          ‹
        </button>

        {/* Location Button */}
        <button className="absolute top-4 right-4 bg-white rounded-lg px-3 py-2 shadow-lg hover:shadow-xl transition flex items-center gap-2">
          <span>📍</span>
          <span className="text-xs font-semibold">Ubica punto</span>
        </button>
      </div>

      {/* Bottom Sheet */}
      <div className="bg-white rounded-t-3xl shadow-2xl">
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
        </div>

        {/* Content */}
        <div className="px-6 py-4 max-h-64 overflow-y-auto">
          {/* Location Info */}
          <div className="flex gap-3 mb-4">
            <div className="text-2xl">🏠</div>
            <div className="flex-1">
              <p className="text-sm text-gray-600">Ubicación Actual</p>
              <p className="text-lg font-bold text-gray-900">Gim. Los Sauces de Bosa</p>
            </div>
          </div>

          {/* Origin Input */}
          <div className="mb-4">
            <div className="bg-gray-100 rounded-lg p-3 border-2 border-gray-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-600">Origen</p>
                  <p className="text-sm font-semibold text-gray-900">{origin}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Destination Input */}
          <div className="mb-6">
            <div className="bg-gray-100 rounded-lg p-3 border-2 border-gray-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-600">Destino</p>
                  <p className="text-sm font-semibold text-gray-600">{destination}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="text-right">
            <button className="text-blue-600 font-semibold text-sm hover:text-blue-700">
              Preferencias ▼
            </button>
          </div>

          {/* Help Text */}
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-center">
            <p className="text-xs text-yellow-900">
              Selecciona tu origen y destino en el mapa o dígitalos
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 px-6 py-4">
        <div className="flex justify-around text-center">
          <div className="flex flex-col items-center gap-1">
            <span className="text-xl">🏠</span>
            <span className="text-xs text-gray-600">Inicio</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-xl">💼</span>
            <span className="text-xs text-gray-600">Favoritos</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-xl">🕐</span>
            <span className="text-xs text-gray-600">Historial</span>
          </div>
        </div>
      </div>
    </div>
  );
}
