'use client';

import { lines } from '@/app/(auth)/lib/data';

export default function LinesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {lines.map((line) => (
        <div
          key={line.id}
          className="card border-l-4"
          style={{ borderLeftColor: line.color }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
              style={{ backgroundColor: line.color }}
            >
              {line.name.split(' ')[1]}
            </div>
            <h3 className="font-bold text-lg text-gray-900">{line.name}</h3>
          </div>
          
          <p className="text-sm text-gray-600 mb-3">
            {line.stations.length} estaciones
          </p>

          <div className="space-y-2">
            <p className="text-xs font-semibold text-gray-700 mb-2">
              Estaciones principales:
            </p>
            <ul className="space-y-1">
              {line.stations.map((station, idx) => (
                <li key={idx} className="text-xs text-gray-600 flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: line.color }}
                  ></span>
                  {station}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
