'use client';

export default function Statistics() {
  const stats = [
    { label: 'Millones de pasajeros/año', value: '1800+', icon: '👥' },
    { label: 'Estaciones', value: '140+', icon: '🚏' },
    { label: 'Kilómetros de red', value: '140+', icon: '📍' },
    { label: 'Buses en operación', value: '2200+', icon: '🚌' },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, idx) => (
        <div key={idx} className="card text-center hover:shadow-lg transition">
          <div className="text-4xl mb-3">{stat.icon}</div>
          <div className="text-2xl font-bold text-yellow-600 mb-1">
            {stat.value}
          </div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
