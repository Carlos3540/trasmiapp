'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: 'Usuario Demo',
    email: 'usuario@example.com',
    phone: '+57 3001234567',
    address: 'Bogotá, Colombia',
    cardNumber: '**** **** **** 1234',
    cardBalance: 45000,
  });

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Mi Perfil</h1>
          <p>Gestiona tu cuenta y tarjeta de Transmilenio</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* User Info Card */}
            <div className="card mb-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    👤
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                    <p className="text-gray-600">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="btn-secondary text-sm"
                >
                  {isEditing ? 'Guardar' : '✏️ Editar'}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-200 pt-6">
                <div>
                  <p className="text-sm text-gray-600">Nombre</p>
                  <p className="font-semibold text-gray-900">{user.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-semibold text-gray-900">{user.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Teléfono</p>
                  <p className="font-semibold text-gray-900">{user.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Dirección</p>
                  <p className="font-semibold text-gray-900">{user.address}</p>
                </div>
              </div>
            </div>

            {/* Tarjeta Card */}
            <div className="mb-6">
              <div
                className="rounded-lg p-8 text-white relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                }}
              >
                <div className="absolute top-4 right-4 text-2xl">💳</div>

                <div className="mb-12">
                  <p className="text-sm opacity-80 mb-1">Número de Tarjeta</p>
                  <p className="text-2xl tracking-widest font-bold">{user.cardNumber}</p>
                </div>

                <div className="flex justify-between">
                  <div>
                    <p className="text-xs opacity-80">Titular</p>
                    <p className="font-semibold">{user.name}</p>
                  </div>
                  <div>
                    <p className="text-xs opacity-80">Válida hasta</p>
                    <p className="font-semibold">12/26</p>
                  </div>
                </div>
              </div>

              <div className="card mt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">Saldo Disponible</p>
                    <p className="text-2xl font-bold text-green-600">
                      ${user.cardBalance.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <button className="btn-primary">
                      💰 Recargar
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Trips */}
            <div className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Últimos Viajes</h3>
              <div className="space-y-4">
                {[
                  { date: 'Hoy', route: 'Centro - Calle 100', cost: 3900, time: '14:30' },
                  { date: 'Ayer', route: 'Suba - Patio Bonito', cost: 3900, time: '09:15' },
                  { date: '2 días atrás', route: 'Centro - USME', cost: 3900, time: '18:45' },
                  { date: '3 días atrás', route: 'Calle 100 - Aeropuerto', cost: 3900, time: '11:20' },
                ].map((trip, idx) => (
                  <div key={idx} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded transition">
                    <div>
                      <p className="font-semibold text-gray-900">{trip.route}</p>
                      <p className="text-sm text-gray-600">{trip.date} - {trip.time}</p>
                    </div>
                    <span className="text-green-600 font-bold">-${trip.cost}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 btn-secondary">
                Ver todos los viajes
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Quick Actions */}
            <div className="card mb-6">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Acciones Rápidas</h3>
              <div className="space-y-3">
                <button className="w-full btn-primary">
                  💰 Recargar tarjeta
                </button>
                <button className="w-full btn-secondary">
                  🗺️ Mis rutas favoritas
                </button>
                <button className="w-full btn-secondary">
                  ⚙️ Configuración
                </button>
              </div>
            </div>

            {/* Help & Support */}
            <div className="card bg-blue-50 border-blue-200 mb-6">
              <h3 className="font-bold text-gray-900 mb-3">Ayuda & Soporte</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Centro de ayuda
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Preguntas frecuentes
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Reportar problema
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Contactar soporte
                  </a>
                </li>
              </ul>
            </div>

            {/* Settings */}
            <div className="card">
              <h3 className="font-bold text-lg text-gray-900 mb-4">Configuración</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Notificaciones</span>
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Modo oscuro</span>
                  <input type="checkbox" className="w-5 h-5" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-700">Datos móviles</span>
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </div>
              </div>
              <button className="w-full mt-6 btn-danger text-sm">
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
