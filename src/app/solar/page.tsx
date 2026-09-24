import SolarFocus from '@/components/SolarFocus';
import SolarCalculator from '@/components/SolarCalculator';

export default function SolarPage() {
  return (
    <main className="min-h-screen bg-transparent text-slate-900 relative pt-16 sm:pt-24">
      <SolarFocus />
      <SolarCalculator />
    </main>
  );
}
