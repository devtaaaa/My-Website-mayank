import Hero from '@/components/Hero';
import USPBanner from '@/components/USPBanner';
import StatsCredibility from '@/components/StatsCredibility';
import IndustriesMarquee from '@/components/IndustriesMarquee';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ConversionCTA from '@/components/ConversionCTA';
import ChannelPartners from '@/components/ChannelPartners';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070b12] text-slate-100 relative pt-16 sm:pt-24">
      <Hero />
      <USPBanner />
      <StatsCredibility />
      <IndustriesMarquee />
      <AboutSection />
      <TestimonialsSection />
      <ConversionCTA />
      <ChannelPartners />
    </main>
  );
}
