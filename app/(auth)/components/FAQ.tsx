'use client';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: '¿Cuál es el horario de operación de Transmilenio?',
    answer:
      'Transmilenio opera 24 horas al día, 7 días a la semana. Aunque el servicio es continuo, los horarios de mayor demanda son entre las 6:00 AM y las 10:00 PM.',
  },
  {
    question: '¿Cuál es la tarifa vigente?',
    answer:
      'La tarifa estándar es de $3,900 COP. Existen tarifas especiales para estudiantes, adultos mayores y personas con discapacidad.',
  },
  {
    question: '¿Cómo recargo mi tarjeta de Transmilenio?',
    answer:
      'Puedes recargar tu tarjeta en cualquier punto de venta autorizado, a través de la aplicación móvil, o en los cajeros automáticos especialmente habilitados en estaciones.',
  },
  {
    question: '¿Qué pasa si pierdo mi tarjeta?',
    answer:
      'Comunícate al 1-8000-112-287. Si tienes registro de tu tarjeta, podemos bloquearla y transferir el saldo a una nueva tarjeta.',
  },
  {
    question: '¿Cómo reporto un incidente en Transmilenio?',
    answer:
      'Puedes reportar incidentes a través del formulario PQR (Peticiones, Quejas y Reclamos) en nuestra página web, llamando a nuestro centro de atención, o escribiendo a info@transmilenio.gov.co.',
  },
  {
    question: '¿Transmilenio conecta con otras ciudades?',
    answer:
      'Transmilenio opera principalmente en Bogotá. Para viajes intermunicipales, existen buses de larga distancia en terminales especializadas.',
  },
];

export default function FAQ() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Preguntas Frecuentes
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <details key={idx} className="card group cursor-pointer">
            <summary className="flex items-start gap-3 font-semibold text-gray-900 group-open:text-yellow-600 transition">
              <span className="text-xl">❓</span>
              <span className="flex-1 text-left">{faq.question}</span>
              <span className="text-xl flex-shrink-0 group-open:rotate-180 transition">
                ▼
              </span>
            </summary>
            <p className="mt-4 text-gray-600 ml-8">{faq.answer}</p>
          </details>
        ))}
      </div>

      <div className="mt-12 card bg-yellow-50 border-yellow-200 text-center">
        <p className="font-semibold text-gray-900 mb-3">
          ¿No encontraste tu respuesta?
        </p>
        <button className="btn-primary">
          📞 Contactar a Soporte
        </button>
      </div>
    </div>
  );
}
