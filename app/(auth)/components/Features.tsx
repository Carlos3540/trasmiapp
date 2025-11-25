'use client';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: 'Búsqueda de Rutas',
    description:
      'Encuentra la mejor ruta entre cualquier par de estaciones con información detallada de tiempo y distancia.',
    icon: '🔍',
  },
  {
    title: 'Alertas en Tiempo Real',
    description:
      'Recibe notificaciones sobre cambios operacionales, cierres y servicio especial en tu línea favorita.',
    icon: '🚨',
  },
  {
    title: 'Mapa Interactivo',
    description:
      'Visualiza la ubicación de estaciones, líneas y planifica tu viaje de forma inteligente.',
    icon: '🗺️',
  },
  {
    title: 'Gestión de Tarjeta',
    description:
      'Consulta tu saldo, recarga tu tarjeta y visualiza tu historial de viajes desde la app.',
    icon: '💳',
  },
  {
    title: 'Información de Estaciones',
    description:
      'Descubre qué líneas pasan por cada estación y sus horarios de operación.',
    icon: '🚏',
  },
  {
    title: 'Soporte 24/7',
    description:
      'Acceso directo a nuestro centro de atención y resolucionador de preguntas frecuentes.',
    icon: '📞',
  },
];

export default function Features() {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Características de la App
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="card hover:shadow-lg transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
