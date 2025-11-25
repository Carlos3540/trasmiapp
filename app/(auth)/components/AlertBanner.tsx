'use client';

import { alerts } from '@/app/(auth)/lib/data';

export default function AlertBanner() {
  const activeAlerts = alerts.slice(0, 2);

  return (
    <div className="space-y-3 mb-6">
      {activeAlerts.map((alert) => {
        const bgColors = {
          info: 'bg-blue-50 border-blue-200',
          warning: 'bg-yellow-50 border-yellow-200',
          danger: 'bg-red-50 border-red-200',
        };

        const iconColors = {
          info: 'text-blue-600',
          warning: 'text-yellow-600',
          danger: 'text-red-600',
        };

        const icons = {
          info: 'ℹ️',
          warning: '⚠️',
          danger: '🚨',
        };

        return (
          <div
            key={alert.id}
            className={`border-l-4 ${bgColors[alert.type]} p-4 rounded`}
          >
            <div className="flex gap-3">
              <span className={`text-xl ${iconColors[alert.type]} flex-shrink-0`}>
                {icons[alert.type]}
              </span>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900">{alert.title}</h3>
                <p className="text-sm text-gray-700 mt-1">{alert.description}</p>
                <div className="flex gap-2 mt-2 flex-wrap">
                  {alert.affectedLines.map((line) => (
                    <span
                      key={line}
                      className="inline-block bg-white text-xs px-2 py-1 rounded border border-gray-300"
                    >
                      Línea {line}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
