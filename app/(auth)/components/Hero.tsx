'use client';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundGradient?: string;
}

export default function Hero({
  title,
  subtitle,
  backgroundGradient = 'from-yellow-400 to-yellow-500',
}: HeroProps) {
  return (
    <section className={`bg-gradient-to-r ${backgroundGradient} text-gray-900 py-12 px-4`}>
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-xl">{subtitle}</p>}
      </div>
    </section>
  );
}
