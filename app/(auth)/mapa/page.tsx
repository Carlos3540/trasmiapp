'use client';

import { stations, lines } from '@/app/(auth)/lib/data';
import { useEffect, useRef } from 'react';

export default function MapPage() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simular un canvas simple para mostrar estaciones
    const canvas = mapRef.current?.querySelector('canvas') as HTMLCanvasElement;
    if (canvas && canvas.getContext) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // Dibujar fondo
        ctx.fillStyle = '#f5f5f5';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Dibujar estaciones
        stations.forEach((station) => {
          const x = (station.longitude + 74.1) * 1000;
          const y = (4.9 - station.latitude) * 1000;
          ctx.fillStyle = '#FFD700';
          ctx.beginPath();
          ctx.arc(x, y, 6, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = '#333';
          ctx.lineWidth = 2;
          ctx.stroke();
        });
      }
    }
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Mapa de Transmilenio</h1>
          <p>Ubicación de estaciones y líneas</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Map */}
          <div className="lg:col-span-3">
            <div
              ref={mapRef}
              className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-purple-200"
            >
              <canvas
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="p-4 bg-purple-50 text-sm text-gray-600">
                Mapa interactivo de Transmilenio (Aproximado)
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Estaciones */}
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

            {/* Líneas */}
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

        {/* Info Grid */}
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
