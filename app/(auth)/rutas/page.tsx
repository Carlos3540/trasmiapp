'use client';

import TroncalZones from '@/app/(auth)/components/TroncalZones';
import { useState } from 'react';

export default function RoutesPage() {
  const [view, setView] = useState<'zones' | 'routes'>('zones');

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-6 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-2">Rutas, Paradas y Estaciones</h1>
          <p>Consulta todas nuestras rutas disponibles</p>
        </div>
      </section>

      {/* Tab Selection */}
      <div className="max-w-2xl mx-auto px-4 py-4 border-b border-gray-200">
        <div className="flex gap-4">
          <button
            onClick={() => setView('zones')}
            className={`px-4 py-2 font-semibold border-b-2 transition ${
              view === 'zones'
                ? 'border-red-600 text-red-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Zonas Troncales
          </button>
          <button
            onClick={() => setView('routes')}
            className={`px-4 py-2 font-semibold border-b-2 transition ${
              view === 'routes'
                ? 'border-red-600 text-red-600'
                : 'border-transparent text-gray-600 hover:text-gray-900'
            }`}
          >
            Todas las Rutas
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-6">
        {view === 'zones' ? (
          <TroncalZones />
        ) : (
          <div className="space-y-3">
            <p className="text-gray-600 text-center py-8">
              Aquí se mostrarán todas las rutas disponibles
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
