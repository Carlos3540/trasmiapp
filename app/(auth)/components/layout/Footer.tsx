'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Transmilenio</h3>
            <p className="text-gray-400">
              Sistema de Transporte Masivo de Bogotá D.C.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Navegación</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-yellow-400 transition">Inicio</a></li>
              <li><a href="/rutas" className="hover:text-yellow-400 transition">Rutas</a></li>
              <li><a href="/mapa" className="hover:text-yellow-400 transition">Mapa</a></li>
              <li><a href="/alertas" className="hover:text-yellow-400 transition">Alertas</a></li>
              <li><a href="/about" className="hover:text-yellow-400 transition">Acerca de</a></li>
            </ul>
          </div>

          {/* Service */}
          <div>
            <h4 className="font-bold mb-4">Servicio</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/ayuda" className="hover:text-yellow-400 transition">Ayuda</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">PQR</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Tarifas</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Seguridad</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>📞 1-8000-112-287</li>
              <li>📧 info@transmilenio.gov.co</li>
              <li>🕐 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Transmilenio S.A. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
