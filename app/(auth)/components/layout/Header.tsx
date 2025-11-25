'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/app/lib/supabaseClient';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import type { User } from '@supabase/supabase-js';

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  useEffect(() => {
    // Obtener sesión actual
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();

    // Escuchar cambios en la autenticación
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Cerrar menú de perfil al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (showProfileMenu && !target.closest('.profile-menu-container')) {
        setShowProfileMenu(false);
      }
    };

    if (showProfileMenu) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [showProfileMenu]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setShowProfileMenu(false);
    router.push('/');
    router.refresh();
  };

  // Ocultar header en páginas de login y registro
  if (pathname === '/login' || pathname === '/registro') {
    return null;
  }

  return (
    <header className="bg-white border-b-4 border-red-600 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <div className="text-2xl">🚌</div>
            <span className="text-gray-900">Transmilenio</span>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex gap-8 text-gray-700 font-semibold items-center">
            <Link href="/" className="hover:text-red-600 transition">
              Inicio
            </Link>
            <Link href="/rutas" className="hover:text-red-600 transition">
              Rutas
            </Link>
            <Link href="/tarjeta" className="hover:text-red-600 transition">
              Tarjeta
            </Link>
            <Link href="/planear-viaje" className="hover:text-red-600 transition">
              Planear Viaje
            </Link>
            <Link href="/alertas" className="hover:text-red-600 transition">
              Alertas
            </Link>

            {/* Auth Section Desktop */}
            {loading ? (
              <div className="text-gray-400">...</div>
            ) : user ? (
              <div className="profile-menu-container relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowProfileMenu(!showProfileMenu);
                  }}
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
                >
                  {/* Avatar */}
                  <div className="w-8 h-8 bg-white text-red-600 rounded-full flex items-center justify-center font-bold text-sm">
                    {user.email?.charAt(0).toUpperCase()}
                  </div>
                  
                  {/* Email */}
                  <span className="text-sm max-w-[120px] truncate">
                    {user.email}
                  </span>
                  
                  {/* Flecha */}
                  <svg 
                    className={`w-4 h-4 transition-transform ${showProfileMenu ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
                    {/* User Info */}
                    <div className="px-4 py-3 bg-gray-50 border-b">
                      <p className="text-sm font-semibold text-gray-900">Usuario</p>
                      <p className="text-xs text-gray-600 truncate">{user.email}</p>
                    </div>

                    {/* Menu Items */}
                    <div className="py-1">
                      <button
                        onClick={() => {
                          setShowProfileMenu(false);
                          router.push('/perfil');
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>Mi Perfil</span>
                      </button>
                    </div>

                    {/* Logout */}
                    <div className="border-t">
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition flex items-center gap-2 font-medium"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span>Cerrar Sesión</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link 
                href="/login"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition"
              >
                Iniciar Sesión
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2 text-gray-700 font-semibold border-t pt-4">
            <Link href="/" className="hover:text-red-600 py-2">
              Inicio
            </Link>
            <Link href="/rutas" className="hover:text-red-600 py-2">
              Rutas
            </Link>
            <Link href="/tarjeta" className="hover:text-red-600 py-2">
              Tarjeta
            </Link>
            <Link href="/planear-viaje" className="hover:text-red-600 py-2">
              Planear Viaje
            </Link>
            <Link href="/alertas" className="hover:text-red-600 py-2">
              Alertas
            </Link>

            {/* Auth Section Mobile */}
            <div className="border-t pt-4 mt-2">
              {loading ? (
                <div className="text-gray-400 py-2">Cargando...</div>
              ) : user ? (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 px-2 py-2 bg-gray-50 rounded">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {user.email?.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm text-gray-700 truncate flex-1">{user.email}</span>
                  </div>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      router.push('/perfil');
                    }}
                    className="w-full text-left hover:text-red-600 py-2"
                  >
                    Mi Perfil
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      router.push('/mis-viajes');
                    }}
                    className="w-full text-left hover:text-red-600 py-2"
                  >
                    Mis Viajes
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left text-red-600 hover:text-red-700 py-2 font-semibold"
                  >
                    Cerrar Sesión
                  </button>
                </div>
              ) : (
                <Link 
                  href="/login"
                  className="block text-center bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Iniciar Sesión
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}