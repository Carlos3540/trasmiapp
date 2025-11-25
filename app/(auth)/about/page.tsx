'use client';

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Sobre Transmilenio</h1>
          <p className="text-xl">
            El sistema de transporte masivo que conecta a Bogotá
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* History */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Nuestra Historia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 leading-7 mb-4">
                Transmilenio es un sistema de transporte masivo de Bogotá, Colombia,
                que comenzó a operar el 4 de diciembre de 2000. Se basa en autobuses
                de tamaño estándar que operan en carriles especiales con prioridad
                sobre otros vehículos.
              </p>
              <p className="text-gray-700 leading-7 mb-4">
                Con más de 20 años de operación, Transmilenio se ha convertido en
                un referente de transporte en América Latina, transportando a más de
                1.8 millones de pasajeros anuales y expandiendo continuamente su red.
              </p>
            </div>
            <div className="card bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">📅</span>
                  <div>
                    <p className="text-sm text-gray-600">Inicio de operaciones</p>
                    <p className="font-bold text-gray-900">Diciembre 4, 2000</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🏙️</span>
                  <div>
                    <p className="text-sm text-gray-600">Ciudades operando</p>
                    <p className="font-bold text-gray-900">Bogotá, Colombia</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">👥</span>
                  <div>
                    <p className="text-sm text-gray-600">Pasajeros anuales</p>
                    <p className="font-bold text-gray-900">1,800+ millones</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Misión y Visión */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misión</h3>
              <p className="text-gray-700 leading-7">
                Proporcionar un servicio de transporte masivo eficiente, seguro y
                accesible que conecte a todos los bogotanos, mejorando su calidad
                de vida y contribuyendo al desarrollo sostenible de la ciudad.
              </p>
            </div>
            <div className="card border-l-4 border-green-600">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Visión</h3>
              <p className="text-gray-700 leading-7">
                Ser el sistema de transporte masivo líder en América Latina,
                reconocido por su calidad, innovación y compromiso con la
                sostenibilidad ambiental y el bienestar de sus usuarios.
              </p>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Excelencia',
                description:
                  'Buscamos constantemente mejorar la calidad de nuestro servicio',
                icon: '⭐',
              },
              {
                title: 'Seguridad',
                description: 'La seguridad de nuestros pasajeros es prioritaria',
                icon: '🛡️',
              },
              {
                title: 'Sostenibilidad',
                description:
                  'Comprometidos con el cuidado del medio ambiente',
                icon: '🌱',
              },
              {
                title: 'Inclusión',
                description: 'Transporte accesible para todos los bogotanos',
                icon: '♿',
              },
              {
                title: 'Innovación',
                description: 'Utilizamos tecnología para mejorar la experiencia',
                icon: '💡',
              },
              {
                title: 'Responsabilidad',
                description:
                  'Comprometidos con la comunidad y el desarrollo social',
                icon: '🤝',
              },
            ].map((valor, idx) => (
              <div key={idx} className="card text-center hover:shadow-lg transition">
                <div className="text-4xl mb-3">{valor.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  {valor.title}
                </h3>
                <p className="text-gray-600 text-sm">{valor.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Por los Números
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Estaciones', value: '140+' },
              { label: 'Kilómetros de red', value: '140+' },
              { label: 'Buses en operación', value: '2,200+' },
              { label: 'Empleados', value: '5,000+' },
              { label: 'Pasajeros diarios', value: '5.4M' },
              { label: 'Rutas disponibles', value: '150+' },
              { label: 'Años de operación', value: '23+' },
              { label: 'Líneas troncales', value: '5' },
            ].map((stat, idx) => (
              <div key={idx} className="card text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                🚌 Líneas Troncales
              </h3>
              <p className="text-gray-700 mb-3">
                Rutas principales que conectan diferentes zonas de la ciudad.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Línea A: Centro - Usaquén</li>
                <li>✓ Línea B: Suba - Patio Bonito</li>
                <li>✓ Línea C: La Candelaria - Centro</li>
                <li>✓ Línea D: Centro - USME</li>
                <li>✓ Línea K: Calle 100 - Aeropuerto</li>
              </ul>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                🚌 Servicios Especiales
              </h3>
              <p className="text-gray-700 mb-3">
                Opciones adicionales para mayor comodidad y flexibilidad.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✓ Líneas Alimentadoras</li>
                <li>✓ Servicio Complementario</li>
                <li>✓ Horarios Extended</li>
                <li>✓ Tarifas Especiales</li>
                <li>✓ Información en Tiempo Real</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="card bg-gradient-to-r from-orange-600 to-orange-700 text-white text-center p-12">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para tu próximo viaje?
          </h2>
          <p className="text-lg mb-6">
            Descubre todas las rutas disponibles y planifica tu viaje ahora
          </p>
          <button className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition">
            Buscar Ruta
          </button>
        </section>
      </div>
    </div>
  );
}
