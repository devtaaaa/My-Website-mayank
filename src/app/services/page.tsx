import ServicesSection from '@/components/ServicesSection';
import ProcessTimeline from '@/components/ProcessTimeline';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-transparent text-slate-900 relative pt-16 sm:pt-24">
      <ServicesSection />
      <ProcessTimeline />
    </main>
  );
}
