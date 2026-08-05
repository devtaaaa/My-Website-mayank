import SolarFocus from '@/components/SolarFocus';
import SolarCalculator from '@/components/SolarCalculator';

export default function SolarPage() {
  return (
    <main className="min-h-screen bg-[#070b12] text-slate-100 relative pt-16 sm:pt-24">
      <SolarFocus />
      <SolarCalculator />
    </main>
  );
}
