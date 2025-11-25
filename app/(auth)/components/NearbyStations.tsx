'use client';

import Link from 'next/link';

interface NearbyStation {
  code: string;
  name: string;
  distance: string;
  lines: string[];
}

interface NearbyStationsProps {
  stations?: NearbyStation[];
}

export default function NearbyStations({ stations }: NearbyStationsProps) {
  const defaultStations: NearbyStation[] = [
    {
      code: '143A08',
      name: 'Br. Brasilia',
      distance: '250m',
      lines: ['A', 'C'],
    },
    {
      code: '143A09',
      name: 'Carrera 7',
      distance: '450m',
      lines: ['B', 'D'],
    },
  ];

  const stationsToShow = stations || defaultStations;

  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-gray-900 mb-4">
        Estás cerca al paradero:
      </h3>
      <div className="space-y-3">
        {stationsToShow.map((station, idx) => (
          <div key={idx} className="bg-white rounded-lg p-4 border-l-4 border-red-600">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="font-bold text-gray-900">{station.name}</p>
                <p className="text-sm text-gray-600 font-mono">{station.code}</p>
              </div>
              <span className="text-sm font-semibold text-blue-600">
                {station.distance}
              </span>
            </div>
            <div className="flex gap-2 flex-wrap">
              {station.lines.map((line) => (
                <span
                  key={line}
                  className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-bold"
                >
                  {line}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
