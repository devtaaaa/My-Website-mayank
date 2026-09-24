import type { Metadata } from 'next';
import './globals.css';
import LoaderScreen from '@/components/LoaderScreen';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  metadataBase: new URL('https://mayankindustries.org'),
  title: 'Mayank Industries | Solar & Electrical Solutions',
  description: 'Turnkey industrial solar plants, electrical & mechanical engineering, fabrication, fire systems, and AMC services in Haridwar, Uttarakhand.',
  keywords: [
    'Industrial solar company in Haridwar',
    'Solar EPC company in Uttarakhand',
    'Rooftop solar for factories',
    'Solar power plant installation',
    'Electrical and mechanical industrial services',
    'Industrial fabrication and machining',
    'Fire hydrant system installation',
    'Industrial AMC services',
    'GOGOAL Hydro partner'
  ],
  authors: [{ name: 'Mayank Industries' }],
  openGraph: {
    title: 'Mayank Industries | Industrial Solar & Engineering Solutions',
    description: 'Turnkey solar power plant solutions, electrical & mechanical installation, heavy fabrication, fire systems, and AMC support in Haridwar, Uttarakhand.',
    url: 'https://mayankindustries.org',
    siteName: 'Mayank Industries',
    locale: 'en_IN',
    type: 'website',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'IndustrialBusiness',
    name: 'Mayank Industries',
    description: 'Turnkey industrial solar power plant solutions, electrical and mechanical engineering services in Haridwar, Uttarakhand.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'E-60, Industrial Area Haridwar, Near Income Tax Office',
      addressLocality: 'Haridwar',
      addressRegion: 'Uttarakhand',
      postalCode: '249401',
      addressCountry: 'IN',
    },
    telephone: '+91-8799999920',
    email: 'sales@mayankindustries.org',
    url: 'https://mayankindustries.org',
    openingHours: 'Mo-Sa 09:00-18:00',
    sameAs: [
      'https://mayankindustries.org',
      'https://www.instagram.com/mayank.industries?stkn=MTI1MXI3NWNyamtvYw==',
      'https://www.linkedin.com/in/mayank-industries-50a5a634b',
      'https://www.facebook.com/profile.php?id=100082619857415'
    ],
  };

  return (
    <html lang="en" className="light scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-slate-50 text-slate-900 antialiased selection:bg-amber-500 selection:text-black">
        <LoaderScreen />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
