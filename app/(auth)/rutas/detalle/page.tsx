'use client';

import { routes } from '@/app/(auth)/lib/data';
import { notFound } from 'next/navigation';

export default function RouteDetailPage({ params }: { params: { id: string } }) {
  const route = routes.find((r) => r.id === params.id);

  if (!route) {
    notFound();
  }

  const stationList = [
    route.startStation,
    'Estación intermedia 1',
    'Estación intermedia 2',
    'Estación intermedia 3',
    route.endStation,
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <a href="/rutas" className="text-green-100 hover:text-white mb-4 inline-block">
            ← Volver a rutas
          </a>
          <h1 className="text-4xl font-bold mb-2">Ruta {route.number}</h1>
          <p className="text-lg text-green-100">{route.name}</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2">
            {/* Status Card */}
            <div className="card mb-6 border-l-4 border-green-500">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-900">Estado de la Ruta</h2>
                <span
                  className={`px-4 py-2 rounded-full font-semibold text-white ${
                    route.status === 'operational'
                      ? 'bg-green-600'
                      : route.status === 'delayed'
                      ? 'bg-yellow-600'
                      : 'bg-red-600'
                  }`}
                >
                  {route.status === 'operational' && '✓ Operativo'}
                  {route.status === 'delayed' && '⚠ Retrasado'}
                  {route.status === 'closed' && '✕ Cerrado'}
                </span>
              </div>
              <p className="text-gray-600">
                {route.status === 'operational'
                  ? 'La ruta está funcionando normalmente.'
                  : route.status === 'delayed'
                  ? 'Hay retrasos en esta ruta por trabajos de mantenimiento.'
                  : 'Esta ruta está temporalmente cerrada.'}
              </p>
            </div>

            {/* Key Information */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="card">
                <p className="text-sm text-gray-600 mb-1">Paradas</p>
                <p className="text-2xl font-bold text-gray-900">{route.stops}</p>
              </div>
              <div className="card">
                <p className="text-sm text-gray-600 mb-1">Distancia</p>
                <p className="text-2xl font-bold text-gray-900">{route.distance}</p>
              </div>
              <div className="card">
                <p className="text-sm text-gray-600 mb-1">Tiempo estimado</p>
                <p className="text-2xl font-bold text-gray-900">{route.estimatedTime}</p>
              </div>
              <div className="card">
                <p className="text-sm text-gray-600 mb-1">Tipo de servicio</p>
                <p className="text-lg font-bold text-blue-600">
                  {route.type === 'trunk'
                    ? 'Troncal'
                    : route.type === 'feeder'
                    ? 'Alimentadora'
                    : 'Complementaria'}
                </p>
              </div>
            </div>

            {/* Stations List */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Estaciones</h3>
              <div className="space-y-4">
                {stationList.map((station, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {idx + 1}
                      </div>
                      {idx < stationList.length - 1 && (
                        <div className="w-1 h-8 bg-gray-300 my-1"></div>
                      )}
                    </div>
                    <div className="py-2">
                      <p className="font-semibold text-gray-900">{station}</p>
                      {idx === 0 && (
                        <p className="text-sm text-gray-600">Estación de origen</p>
                      )}
                      {idx === stationList.length - 1 && (
                        <p className="text-sm text-gray-600">Estación de destino</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Info */}
            <div className="card mb-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Información</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-gray-600">Origen</p>
                  <p className="font-semibold text-gray-900">{route.startStation}</p>
                </div>
                <div>
                  <p className="text-gray-600">Destino</p>
                  <p className="font-semibold text-gray-900">{route.endStation}</p>
                </div>
                <div>
                  <p className="text-gray-600">Línea</p>
                  <div className="flex gap-2 mt-2">
                    {route.lines.map((line) => (
                      <span
                        key={line}
                        className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold"
                      >
                        {line}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button className="w-full btn-primary">
                📍 Ver en mapa
              </button>
              <button className="w-full btn-secondary">
                🔔 Recibir alertas
              </button>
              <button className="w-full btn-secondary">
                💾 Guardar ruta
              </button>
            </div>

            {/* Help */}
            <div className="card mt-6 bg-blue-50 border-blue-200">
              <p className="text-sm text-gray-700 mb-3">
                <strong>¿Necesitas ayuda?</strong> Llamanos al 1-8000-112-287
              </p>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-semibold">
                Contactar soporte →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
