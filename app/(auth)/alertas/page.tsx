'use client';

import { alerts } from '@/app/(auth)/lib/data';

export default function AlertsPage() {
  const getAlertColor = (type: 'info' | 'warning' | 'danger') => {
    switch (type) {
      case 'info':
        return 'bg-blue-50 border-blue-200 text-blue-900';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-900';
      case 'danger':
        return 'bg-red-50 border-red-200 text-red-900';
    }
  };

  const getAlertIcon = (type: 'info' | 'warning' | 'danger') => {
    switch (type) {
      case 'info':
        return 'ℹ️';
      case 'warning':
        return '⚠️';
      case 'danger':
        return '🚨';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('es-CO', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Centro de Alertas</h1>
          <p>Información sobre el estado del servicio</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="card text-center">
            <p className="text-3xl mb-2">🔴</p>
            <p className="font-bold text-red-600">{alerts.filter(a => a.type === 'danger').length}</p>
            <p className="text-sm text-gray-600">Alertas críticas</p>
          </div>
          <div className="card text-center">
            <p className="text-3xl mb-2">🟡</p>
            <p className="font-bold text-yellow-600">{alerts.filter(a => a.type === 'warning').length}</p>
            <p className="text-sm text-gray-600">Advertencias</p>
          </div>
          <div className="card text-center">
            <p className="text-3xl mb-2">🔵</p>
            <p className="font-bold text-blue-600">{alerts.filter(a => a.type === 'info').length}</p>
            <p className="text-sm text-gray-600">Información</p>
          </div>
          <div className="card text-center">
            <p className="text-3xl mb-2">✓</p>
            <p className="font-bold text-green-600">5 Líneas</p>
            <p className="text-sm text-gray-600">Operativas normalmente</p>
          </div>
        </div>

        {/* Alerts List */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Alertas Activas</h2>

          {alerts.length > 0 ? (
            alerts.map((alert) => (
              <div
                key={alert.id}
                className={`card border-l-4 ${getAlertColor(alert.type)}`}
              >
                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">
                    {getAlertIcon(alert.type)}
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{alert.title}</h3>
                      <span className="text-xs text-gray-600">
                        {formatDate(alert.timestamp)}
                      </span>
                    </div>

                    <p className="text-gray-700 mb-4">{alert.description}</p>

                    <div className="flex gap-2 flex-wrap">
                      <span className="text-sm font-semibold text-gray-700 mr-2">
                        Líneas afectadas:
                      </span>
                      {alert.affectedLines.map((line) => (
                        <span
                          key={line}
                          className="inline-block bg-white border-2 border-current px-3 py-1 rounded-full font-bold text-sm"
                        >
                          {line}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <button className="text-gray-600 hover:text-gray-900">
                      ✕
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12 card">
              <p className="text-2xl mb-2">✓</p>
              <p className="text-gray-600">
                No hay alertas activas. El sistema está funcionando normalmente.
              </p>
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="mt-12 card bg-blue-50 border-blue-200">
          <h3 className="font-bold text-lg text-gray-900 mb-4">¿Qué significan las alertas?</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="text-2xl">🔵</div>
              <div>
                <p className="font-semibold text-gray-900">Información</p>
                <p className="text-sm text-gray-700">Avisos sobre nuevos servicios, cambios operacionales o noticias importantes.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">🟡</div>
              <div>
                <p className="font-semibold text-gray-900">Advertencia</p>
                <p className="text-sm text-gray-700">Problemas operacionales que pueden afectar la ruta, como trabajos de mantenimiento.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">🔴</div>
              <div>
                <p className="font-semibold text-gray-900">Crítica</p>
                <p className="text-sm text-gray-700">Cierre de estaciones o rutas completas que requieren atención inmediata.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="mt-8 card bg-yellow-50 border-yellow-200">
          <h3 className="font-bold text-lg text-gray-900 mb-4">Recibe notificaciones</h3>
          <p className="text-gray-700 mb-4">
            Suscríbete para recibir alertas sobre tus líneas favoritas
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400"
            />
            <button className="btn-primary">
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
