'use client';

import Link from 'next/link';

interface MenuOption {
  icon: string;
  label: string;
  href: string;
  description?: string;
}

const menuOptions: MenuOption[] = [
  {
    icon: '🚌',
    label: 'Rutas, paradas y estaciones',
    href: '/rutas',
    description: 'Consulta todas nuestras rutas',
  },
  {
    icon: '💳',
    label: 'Recarga y consulta de saldo',
    href: '/tarjeta',
    description: 'Gestiona tu tarjeta Tullave',
  },
  {
    icon: '🗺️',
    label: 'Mapa',
    href: '/mapa',
    description: 'Ubicación de estaciones',
  },
  {
    icon: '💬',
    label: 'Canal WhatsApp',
    href: 'https://wa.me/573001234567',
    description: 'Soporte directo',
  },
];

export default function MainMenu() {
  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      {menuOptions.map((option, idx) => (
        <Link
          key={idx}
          href={option.href}
          target={option.href.startsWith('http') ? '_blank' : undefined}
        >
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition cursor-pointer border-2 border-gray-100 hover:border-red-400">
            <div className="text-4xl mb-3 text-center">{option.icon}</div>
            <p className="text-sm font-semibold text-gray-900 text-center">
              {option.label}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
