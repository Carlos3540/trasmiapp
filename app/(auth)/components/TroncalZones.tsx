'use client';

interface TroncalZone {
  letter: string;
  name: string;
  color: string;
}

const troncalZones: TroncalZone[] = [
  { letter: 'A', name: 'Caracas', color: 'bg-red-600' },
  { letter: 'B', name: 'Autonorte', color: 'bg-green-600' },
  { letter: 'C', name: 'Suba', color: 'bg-yellow-500' },
  { letter: 'D', name: 'Calle 80', color: 'bg-purple-600' },
  { letter: 'E', name: 'NQS Central', color: 'bg-amber-700' },
  { letter: 'F', name: 'Américas', color: 'bg-red-700' },
  { letter: 'G', name: 'NQS Sur', color: 'bg-cyan-600' },
  { letter: 'H', name: 'Caracas Sur', color: 'bg-yellow-600' },
  { letter: 'J', name: 'Eje Ambiental', color: 'bg-pink-400' },
  { letter: 'K', name: 'Calle 26', color: 'bg-yellow-700' },
  { letter: 'L', name: 'Carrera 10', color: 'bg-teal-600' },
];

export default function TroncalZones() {
  return (
    <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <h3 className="text-lg font-bold text-gray-900">Zonas Troncales</h3>
      </div>

      <div className="divide-y divide-gray-200">
        {troncalZones.map((zone, idx) => (
          <div key={idx} className="flex items-center p-4 hover:bg-gray-50 transition cursor-pointer">
            <div className={`${zone.color} w-6 h-12 rounded-sm mr-4 flex-shrink-0`}></div>
            <div className="flex-1">
              <p className="font-bold text-lg text-gray-900">{zone.letter}</p>
              <p className="text-sm text-gray-600">{zone.name}</p>
            </div>
            <span className="text-gray-400">›</span>
          </div>
        ))}
      </div>
    </div>
  );
}
