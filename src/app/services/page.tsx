import ServicesSection from '@/components/ServicesSection';
import ProcessTimeline from '@/components/ProcessTimeline';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#070b12] text-slate-100 relative pt-16 sm:pt-24">
      <ServicesSection />
      <ProcessTimeline />
    </main>
  );
}
