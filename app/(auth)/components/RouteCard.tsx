'use client';

import { Route } from '@/app/(auth)/lib/data';
import Link from 'next/link';

interface RouteCardProps {
  route: Route;
}

export default function RouteCard({ route }: RouteCardProps) {
  const statusColors = {
    operational: 'bg-green-100 text-green-800',
    delayed: 'bg-yellow-100 text-yellow-800',
    closed: 'bg-red-100 text-red-800',
  };

  const typeLabels = {
    trunk: 'Línea Troncal',
    feeder: 'Línea Alimentadora',
    complementary: 'Servicio Complementario',
  };

  return (
    <Link href={`/rutas/${route.id}`}>
      <div className="card-hover">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{route.number}</h3>
            <p className="text-gray-600 text-sm">{route.name}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[route.status]}`}>
            {route.status === 'operational' && '✓ Operativo'}
            {route.status === 'delayed' && '⚠ Retrasado'}
            {route.status === 'closed' && '✕ Cerrado'}
          </span>
        </div>

        <div className="space-y-2 text-sm text-gray-600 mb-3">
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>{route.startStation} → {route.endStation}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🛑</span>
            <span>{route.stops} paradas</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📏</span>
            <span>{route.distance}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>⏱️</span>
            <span>{route.estimatedTime}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-gray-200">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            {typeLabels[route.type]}
          </span>
          <span className="text-yellow-600 font-semibold">Ver detalles →</span>
        </div>
      </div>
    </Link>
  );
}
