'use client';

import { useState } from 'react';

export default function TarjetaPage() {
  const [cardNumber, setCardNumber] = useState('1010 0000 0000 0000');
  const [balance, setBalance] = useState(45000);
  const [showBalance, setShowBalance] = useState(false);

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Saldo y Recargas Tullave
        </h1>
        <p className="text-gray-600 text-sm">
          Tullave en la parte posterior del dispositivo o ingresa el número de la tarjeta.
        </p>
      </div>

      {/* Info Alert */}
      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6 rounded">
        <p className="text-sm text-gray-700 mb-2">
          <strong>Importante:</strong> si consultas el saldo con el número de la tarjeta, visualizarás el que tenías hace 24 horas.
        </p>
        <p className="text-sm text-gray-700">
          <strong>No aplica si:</strong>
        </p>
        <ol className="text-sm text-gray-700 ml-4 mt-1 space-y-1">
          <li>1. La tarjeta es nueva y no ha sido cargada ni utilizada.</li>
          <li>2. Llevas más de un año sin utilizar tu tarjeta.</li>
        </ol>
      </div>

      {/* Card Search */}
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Ingresa número de tarjeta"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
          />
          <button
            onClick={() => setCardNumber('')}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Balance Card */}
      <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-3xl p-8 mb-8 text-white relative overflow-hidden">
        {/* Background decorative */}
        <div className="absolute top-0 right-0 opacity-10">
          <div className="text-9xl">💳</div>
        </div>

        {/* Card Content */}
        <div className="relative z-10">
          <div className="mb-8">
            <p className="text-sm opacity-80 mb-2">Número de Tarjeta</p>
            <p className="text-2xl tracking-widest font-mono">{cardNumber}</p>
          </div>

          {/* Balance Circle */}
          <div className="flex justify-center mb-8">
            <div className="relative w-40 h-40">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeDasharray={`${(balance / 100000) * 251.3} 251.3`}
                  className="text-lime-400"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-sm opacity-80">SALDO</p>
                <p className="text-3xl font-bold">
                  ${(balance / 1000).toFixed(1)}K
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs opacity-80 mb-1">Titular</p>
              <p className="font-semibold">USUARIO DEMO</p>
            </div>
            <div className="text-right">
              <p className="text-xs opacity-80 mb-1">Válida hasta</p>
              <p className="font-semibold">12/26</p>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3 mb-8">
        <button
          onClick={() => setShowBalance(!showBalance)}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition"
        >
          {showBalance ? '✓ Saldo Consultado' : 'Ver Saldo'}
        </button>
        <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-3 rounded-lg transition">
          Recargar Tarjeta
        </button>
      </div>

      {/* Menu Options */}
      <div className="space-y-2">
        <div className="bg-white border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition flex items-center justify-between">
          <span className="font-semibold text-gray-900">Valor del pasaje y transbordos</span>
          <span className="text-gray-400">›</span>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition flex items-center justify-between">
          <span className="font-semibold text-gray-900">Recarga web</span>
          <span className="text-gray-400">›</span>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition flex items-center justify-between">
          <span className="font-semibold text-gray-900">Puntos de recarga</span>
          <span className="text-gray-400">›</span>
        </div>
      </div>
    </div>
  );
}
