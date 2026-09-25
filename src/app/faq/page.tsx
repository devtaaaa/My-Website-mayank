import React from 'react';
import FAQAccordion from '@/components/FAQAccordion';
import { HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'Frequently Asked Questions | Mayank Industries',
  description: 'Find answers to frequently asked questions about Solar Power Systems, Transformers, Servo Stabilizers, and DG Sets.',
};

const faqData = [
  {
    title: 'Solar Power Systems',
    faqs: [
      {
        question: 'How does a solar power system work?',
        answer: 'Solar panels absorb sunlight and convert it into direct current (DC) electricity. An inverter then converts this DC electricity into alternating current (AC), which is used to run home appliances or feed back into the power grid.',
      },
      {
        question: 'What are the main types of solar systems?',
        answer: 'There are three primary types: On-Grid (tied to the utility grid without batteries), Off-Grid (independent with battery storage), and Hybrid (grid-tied with battery backup).',
      },
      {
        question: 'How long do solar panels last?',
        answer: 'Most high-quality solar panels come with a performance warranty of 25 to 30 years, typically retaining at least 80% of their original generation efficiency by the end of that period.',
      },
      {
        question: 'Do solar panels work during cloudy days or at night?',
        answer: 'They still generate electricity on cloudy days, though at a reduced capacity (roughly 10% to 25% of normal output). They do not produce power at night unless paired with a battery storage system.',
      },
      {
        question: 'What maintenance do solar systems require?',
        answer: 'Solar systems are low-maintenance. Panels generally need to be cleaned with water to remove dust and debris a few times a year, and the inverter and wiring should be inspected annually.',
      },
      {
        question: 'How is the right solar system capacity calculated?',
        answer: 'Capacity is calculated based on your average monthly electricity consumption (in kWh) found on your utility bill, factoring in local sunlight hours and panel efficiency.',
      },
      {
        question: 'What is net metering?',
        answer: 'Net metering is a billing mechanism that credits solar system owners for the excess electricity they send back to the local utility grid.',
      },
      {
        question: 'Can I run heavy appliances like ACs on solar power?',
        answer: 'Yes, provided the system capacity (both inverter rating and panel output) is large enough to handle the surge and continuous load of heavy appliances.',
      },
      {
        question: 'What happens to a solar system during a power grid outage?',
        answer: 'Standard on-grid systems automatically shut down during a grid outage for safety reasons (anti-islanding). Only off-grid or hybrid systems with batteries can supply power during blackouts.',
      },
      {
        question: 'What government incentives are available for solar installation?',
        answer: 'Many governments offer subsidies, tax credits, accelerated depreciation for businesses, and net-metering policies to lower the initial capital cost.',
      },
    ],
  },
  {
    title: 'Transformers',
    faqs: [
      {
        question: 'What is the primary function of a transformer?',
        answer: 'A transformer transfers electrical energy between two or more circuits through electromagnetic induction, either stepping voltage up for transmission or stepping it down for safe distribution and consumption.',
      },
      {
        question: 'What is the difference between a step-up and a step-down transformer?',
        answer: 'A step-up transformer increases the output voltage while decreasing the current. A step-down transformer decreases the voltage to safe levels for end-user appliances or machinery.',
      },
      {
        question: 'Why are transformers rated in kVA instead of kW?',
        answer: 'Transformers are rated in kilovolt-amps (kVA) because the load power factor is unknown to the manufacturer. kVA measures total apparent power, which determines the thermal and current limits of the transformer windings.',
      },
      {
        question: 'What causes losses in a transformer?',
        answer: 'Losses are broadly split into core losses (hysteresis and eddy current losses in the steel core, which occur continuously when energized) and copper losses (resistance losses in the windings that vary with load).',
      },
      {
        question: 'What is the significance of CRCO steel in transformers?',
        answer: 'Cold Rolled Grain Oriented (CRCO) steel is used for the core because its magnetic properties minimize core losses and maximize operational efficiency.',
      },
      {
        question: 'How often should transformer oil be tested?',
        answer: 'Dissolved Gas Analysis (DGA) and dielectric breakdown voltage tests on transformer oil should ideally be performed every 6 to 12 months to detect internal faults or moisture ingress.',
      },
      {
        question: 'What is the purpose of a breather in an oil-cooled transformer?',
        answer: 'A breather contains silica gel to absorb moisture from the air that enters or leaves the transformer tank during temperature fluctuations, protecting the insulating oil.',
      },
      {
        question: 'Why does a transformer hum?',
        answer: 'The humming sound is caused by magnetostriction, a phenomenon where the iron core slightly changes shape and vibrates in response to the alternating magnetic field.',
      },
      {
        question: 'What is transformer impedance?',
        answer: 'Impedance is the internal opposition to current flow, expressed as a percentage. It dictates how the transformer handles short-circuit currents and how voltage drops under load.',
      },
      {
        question: 'What factors determine the lifespan of a transformer?',
        answer: 'Lifespan is heavily dictated by operating temperature. Proper loading, prevention of overloads, effective cooling, and clean oil can allow a transformer to last 30 to 40 years.',
      },
    ],
  },
  {
    title: 'Servo Stabilizers',
    faqs: [
      {
        question: 'What is a servo stabilizer and how does it work?',
        answer: 'A servo stabilizer is an automatic voltage regulator that uses a buck-boost transformer, a motor-driven variable autotransformer (dimmer), and a servo motor to correct input voltage fluctuations in real time.',
      },
      {
        question: 'How does a servo stabilizer differ from a relay-type stabilizer?',
        answer: 'Relay stabilizers use electronic switches (relays) resulting in step-by-step voltage correction with switching delays. Servo stabilizers provide smooth, continuous, and high-accuracy (± 1% to ± 3%) voltage correction using a motor.',
      },
      {
        question: 'Why do I need a servo stabilizer?',
        answer: 'They protect sensitive and expensive industrial, commercial, or residential equipment from the damaging effects of chronic low or high voltage supply.',
      },
      {
        question: 'How do I calculate the required capacity (kVA) for a servo stabilizer?',
        answer: 'Sum up the wattage or current requirements of all loads to be protected, convert total power into kVA, and add a safety margin of 20% to 30% for future expansion or startup surges.',
      },
      {
        question: 'What is the difference between air-cooled and oil-cooled servo stabilizers?',
        answer: 'Air-cooled models use fans for ventilation and are typically used for lower capacities or indoor environments. Oil-cooled models use transformer oil for insulation and cooling, making them ideal for heavy-duty, dusty, or outdoor industrial applications.',
      },
      {
        question: 'Can a servo stabilizer handle short circuits and overloads?',
        answer: 'Yes, modern servo stabilizers come equipped with built-in protection circuits that trigger cut-offs or bypass options during severe overloads and short circuits.',
      },
      {
        question: 'What input voltage range should I choose?',
        answer: 'The input range depends on your location\'s specific grid conditions (e.g., wide ranges like 140V–280V for single phase or 300V–460V for three phase). Measure your peak low/high fluctuations before purchasing.',
      },
      {
        question: 'Does a servo stabilizer consume electricity when no load is connected?',
        answer: 'It has a very small no-load loss due to the standby control circuit and transformer core magnetization, but overall power consumption is minimal.',
      },
      {
        question: 'What maintenance does a servo stabilizer require?',
        answer: 'Routine upkeep includes clearing dust from vents, checking carbon brushes for wear, ensuring tight terminal connections, and monitoring oil levels (for oil-cooled units).',
      },
      {
        question: 'Does a servo stabilizer reduce electricity bills?',
        answer: 'Indirectly, yes. By supplying appliances with their rated operational voltage, it prevents energy wastage caused by under-voltage inefficiencies and extends motor and compressor lifespans.',
      },
    ],
  },
  {
    title: 'DG Sets',
    faqs: [
      {
        question: 'How does a DG set generate electricity?',
        answer: 'A diesel engine burns fuel to produce mechanical energy, which then turns an alternator (generator rotor) to produce electrical energy through electromagnetic induction.',
      },
      {
        question: 'How do I select the right capacity for a DG set?',
        answer: 'Calculate the total running wattage of all connected loads and add startup surge requirements (especially for inductive loads like motors and pumps), typically sizing the DG set for 70%–80% maximum capacity utilization.',
      },
      {
        question: 'What is the ideal load percentage for running a DG set?',
        answer: 'A DG set operates most efficiently when loaded between 60% to 80% of its capacity. Running it on very low loads can cause "wet stacking" (unburnt fuel accumulation).',
      },
      {
        question: 'What is "wet stacking" in diesel generators?',
        answer: 'Wet stacking occurs when a generator runs under light loads for extended periods, causing unburnt fuel, carbon, and oil to build up in the exhaust system.',
      },
      {
        question: 'How often does a DG set require servicing?',
        answer: 'Standard servicing (oil change, filter replacements, and coolant checks) is typically recommended every 250 to 500 operating hours or at least once a year.',
      },
      {
        question: 'What is an AMF panel?',
        answer: 'An Automatic Mains Failure (AMF) panel automatically detects a grid power failure, starts the DG set, transfers the load to the generator, and shuts it down once main grid power is restored.',
      },
      {
        question: 'How long can a DG set run continuously?',
        answer: 'Modern DG sets can run continuously for many hours or days, provided they have an uninterrupted fuel supply, proper ventilation, and scheduled checks for oil and coolant levels.',
      },
      {
        question: 'What fuel is best for a DG set?',
        answer: 'High-speed diesel (HSD) compliant with local emission and sulfur standards is the standard fuel for industrial and commercial diesel generators.',
      },
      {
        question: 'How can I reduce noise levels from a DG set?',
        answer: 'DG sets are enclosed in acoustic enclosures (soundproof canopies) designed to dampen engine noise to comply with local environmental pollution control boards.',
      },
      {
        question: 'What are the primary safety checks before starting a DG set?',
        answer: 'Check engine oil levels, coolant levels, fuel availability, battery health, and ensure that the output circuit breaker is in the OFF position before cranking the engine.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-transparent text-slate-900 relative pt-24 sm:pt-32 pb-24">
      {/* Background Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-amber-500 text-xs font-mono uppercase tracking-widest mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>Knowledge Base</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 uppercase tracking-tight">
            Frequently Asked <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">
              Questions
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Find detailed answers about our products and services. Whether you\'re looking for technical specifications or general information, we\'ve got you covered.
          </p>
        </div>

        <FAQAccordion categories={faqData} />
        
      </div>
    </main>
  );
}
