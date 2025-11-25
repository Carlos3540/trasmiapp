'use client';

import CarouselBanner from './(auth)/components/CarouselBanner';
import MainMenu from './(auth)/components/MainMenu';
import NearbyStations from './(auth)/components/NearbyStations';
import PlanJourneyButton from './(auth)/components/PlanJourneyButton';
import TroncalZones from './(auth)/components/TroncalZones';
import AlertBanner from './(auth)/components/AlertBanner';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-6 px-4 sticky top-16 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Transmilenio</h1>
            <span className="text-2xl">🚌</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Carousel Banner */}
        <section className="mb-8">
          <CarouselBanner />
        </section>

        {/* Main Menu Grid */}
        <section className="mb-8">
          <MainMenu />
        </section>

        {/* Nearby Stations */}
        <section className="mb-8">
          <NearbyStations />
        </section>

        {/* Plan Journey Button */}
        <section className="mb-8">
          <PlanJourneyButton />
        </section>

        {/* Alerts */}
        <section className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Alertas Activas</h3>
          <AlertBanner />
        </section>

        {/* Troncal Zones */}
        <section className="mb-8">
          <TroncalZones />
        </section>

        {/* Info Cards */}
        <section className="mt-12 grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <div className="text-3xl mb-2">📱</div>
            <p className="text-xs font-semibold text-gray-700">App Móvil</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <div className="text-3xl mb-2">🔔</div>
            <p className="text-xs font-semibold text-gray-700">Notificaciones</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <div className="text-3xl mb-2">💰</div>
            <p className="text-xs font-semibold text-gray-700">Recargas</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center border border-gray-200">
            <div className="text-3xl mb-2">⭐</div>
            <p className="text-xs font-semibold text-gray-700">Favoritos</p>
          </div>
        </section>
      </div>
    </div>
  );
}
