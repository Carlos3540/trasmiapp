'use client';

import FAQ from '@/app/(auth)/components/FAQ';

export default function SupportPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Centro de Ayuda</h1>
          <p>Resolvemos tus dudas sobre Transmilenio</p>
        </div>
      </section>

      {/* Quick Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="card border-t-4 border-teal-600 text-center hover:shadow-lg transition">
            <div className="text-4xl mb-3">📞</div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Llamar</h3>
            <p className="text-gray-600 mb-4">
              Contáctanos directamente por teléfono
            </p>
            <a href="tel:1-8000-112-287" className="text-teal-600 font-semibold hover:text-teal-700">
              1-8000-112-287
            </a>
          </div>

          <div className="card border-t-4 border-teal-600 text-center hover:shadow-lg transition">
            <div className="text-4xl mb-3">📧</div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 mb-4">
              Envíanos tu consulta por correo electrónico
            </p>
            <a href="mailto:info@transmilenio.gov.co" className="text-teal-600 font-semibold hover:text-teal-700">
              info@transmilenio.gov.co
            </a>
          </div>

          <div className="card border-t-4 border-teal-600 text-center hover:shadow-lg transition">
            <div className="text-4xl mb-3">💬</div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Chat</h3>
            <p className="text-gray-600 mb-4">
              Chatea con nuestro equipo de soporte
            </p>
            <button className="text-teal-600 font-semibold hover:text-teal-700">
              Iniciar chat →
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <FAQ />

        {/* Contact Form */}
        <section className="mt-16 max-w-2xl mx-auto card bg-teal-50 border-teal-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Envía tu consulta
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                placeholder="Tu nombre"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Asunto
              </label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500">
                <option>Selecciona un asunto</option>
                <option>Problema con mi tarjeta</option>
                <option>Información de rutas</option>
                <option>Reporte de incidente</option>
                <option>Sugerencia</option>
                <option>Otro</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Mensaje
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500"
                placeholder="Cuéntanos cómo podemos ayudarte..."
              ></textarea>
            </div>

            <button type="submit" className="w-full btn-primary">
              ✉️ Enviar mensaje
            </button>
          </form>
        </section>

        {/* Info Banner */}
        <div className="mt-16 card bg-gradient-to-r from-teal-50 to-blue-50 border-teal-200 p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Horario de atención
          </h3>
          <p className="text-gray-700 mb-6">
            Nuestro equipo de soporte está disponible 24/7 para asistirte
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div>
              <p className="text-sm text-gray-600">Lunes a Viernes</p>
              <p className="font-bold text-gray-900">24 horas</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Sábados</p>
              <p className="font-bold text-gray-900">24 horas</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Domingos</p>
              <p className="font-bold text-gray-900">24 horas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
