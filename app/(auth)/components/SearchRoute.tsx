'use client';

import { stations } from '@/app/(auth)/lib/data';
import { useState } from 'react';

interface SearchRouteProps {
  onSearch?: (from: string, to: string) => void;
}

export default function SearchRoute({ onSearch }: SearchRouteProps) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(from, to);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-yellow-400">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        ¿A dónde deseas ir?
      </h2>
      
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* From */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Estación de Origen
            </label>
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
            >
              <option value="">Selecciona una estación</option>
              {stations.map((station) => (
                <option key={station.id} value={station.name}>
                  {station.name}
                </option>
              ))}
            </select>
          </div>

          {/* To */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Estación de Destino
            </label>
            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200"
            >
              <option value="">Selecciona una estación</option>
              {stations.map((station) => (
                <option key={station.id} value={station.name}>
                  {station.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={!from || !to}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          🔍 Buscar Ruta
        </button>
      </form>

      {/* Quick Links */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-600 mb-3 font-semibold">Rutas populares:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {[
            { from: 'Centro', to: 'Calle 100' },
            { from: 'Suba', to: 'Patio Bonito' },
            { from: 'Calle 100', to: 'Aeropuerto' },
            { from: 'Centro', to: 'USME' },
          ].map((route, idx) => (
            <button
              key={idx}
              onClick={() => {
                setFrom(route.from);
                setTo(route.to);
              }}
              className="text-left p-2 text-sm text-blue-600 hover:bg-blue-50 rounded transition"
            >
              {route.from} → {route.to}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
