'use client';

import { stations, lines } from '@/app/(auth)/lib/data';

export default function MapPage() {
  return (
    <div>
      {/* Hero */}
           <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Mapa de Transmilenio</h1>
          <p>Ubicación de estaciones y líneas</p>
        </div>
      </section>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Map */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-purple-200">
              {/* IMAGEN CON RUTA CORRECTA */}
              <img
                src="/mapatrasmi.jpg"
                alt="Mapa del Sistema Transmilenio"
                className="w-full h-auto"
              />
              <div className="p-4 bg-purple-50 text-sm text-gray-600">
                Mapa del Sistema Transmilenio
              </div>
            </div>
          </div>

          {/* Sidebar - mantienes el mismo código */}
          <div className="lg:col-span-1">
            <div className="card mb-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Estaciones</h3>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {stations.map((station) => (
                  <div key={station.id} className="p-2 hover:bg-gray-100 rounded cursor-pointer transition">
                    <p className="font-semibold text-sm text-gray-900">{station.name}</p>
                    <div className="flex gap-1 flex-wrap mt-1">
                      {station.lines.map((line) => (
                        <span
                          key={line}
                          className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded"
                        >
                          {line}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Líneas</h3>
              <div className="space-y-3">
                {lines.map((line) => (
                  <div key={line.id} className="flex items-center gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex-shrink-0"
                      style={{ backgroundColor: line.color }}
                    ></div>
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-gray-900">{line.name}</p>
                      <p className="text-xs text-gray-600">{line.stations.length} estaciones</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Info Grid - mantienes el mismo código */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card text-center">
            <p className="text-3xl mb-2">📍</p>
            <p className="font-bold text-gray-900">{stations.length} Estaciones</p>
            <p className="text-sm text-gray-600">En todo Bogotá</p>
          </div>
          <div className="card text-center">
            <p className="text-3xl mb-2">🚌</p>
            <p className="font-bold text-gray-900">{lines.length} Líneas</p>
            <p className="text-sm text-gray-600">Troncales disponibles</p>
          </div>
          <div className="card text-center">
            <p className="text-3xl mb-2">🌐</p>
            <p className="font-bold text-gray-900">Cobertura Total</p>
            <p className="text-sm text-gray-600">Bogotá y alrededores</p>
          </div>
        </div>
      </div>
    </div>
  );
}