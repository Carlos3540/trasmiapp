'use client';

import Link from 'next/link';

export default function PlanJourneyButton() {
  return (
    <Link href="/planear-viaje">
      <div className="bg-red-600 hover:bg-red-700 text-white rounded-2xl py-4 px-6 font-bold text-center cursor-pointer transition shadow-lg hover:shadow-xl mb-8">
        <div className="flex items-center justify-center gap-3">
          <span className="text-xl">Planea tu viaje</span>
          <span className="text-2xl">→</span>
        </div>
      </div>
    </Link>
  );
}
