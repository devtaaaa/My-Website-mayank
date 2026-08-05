// lib/data.ts — All site content and structured data

export const BUSINESS = {
  name: "Shape 'S' Style",
  tagline: "Luxury Hair, Skin & Bridal Studio",
  phone: "+91-9876543210",
  phoneRaw: "919876543210",
  whatsapp: "919876543210",
  whatsappMsg: "Hello, I'd like to book an appointment at Shape 'S' Style.",
  address: "Ranipur More, Near Vishal Mega Mart, Opposite HDFC Bank, Haridwar, Uttarakhand",
  city: "Haridwar",
  hours: [
    { day: "Tuesday – Sunday", time: "10:00 AM – 8:00 PM" },
    { day: "Monday", time: "Closed" },
  ],
  instagram: "https://www.instagram.com/shapesstyle",
  facebook: "https://www.facebook.com/shapesstyle",
  foundedYear: 2006,
  mapUrl:
    "https://www.google.com/maps/search/Ranipur+More+Haridwar+Salon+near+Vishal+Mega+Mart",
};

export const SERVICES_CORE = [
  {
    id: "hair",
    icon: "✦",
    title: "Hair & Styling",
    subtitle: "From restoring treatments to transformative cuts",
    color: "#D29168",
    image: "/service-hair.jpg",
    whatsappMsg: "Hi! I'd like to book a Hair & Styling service at Shape 'S' Style.",
    services: [
      "Hair Cut & Styling",
      "Hair Extensions",
      "Hair Spa & Treatments",
      "Hair Colouring & Highlights",
      "Keratin & Smoothening",
      "Blow-dry & Finish",
    ],
    description:
      "Expert hair services delivered with precision. Whether you seek a refined cut, rich colour work or a restorative spa, our stylists bring craft and care to every strand.",
  },
  {
    id: "skin",
    icon: "◆",
    title: "Skin & Advanced",
    subtitle: "Clinical results with a luxury touch",
    color: "#C36F3B",
    image: "/service-skin.jpg",
    whatsappMsg: "Hi! I'd like to book a Skin Treatment at Shape 'S' Style.",
    services: [
      "Hydra Facial",
      "BB Glow Treatment",
      "Advanced Skin Treatments",
      "Fruit Facials",
      "Gold & Pearl Facials",
      "Eyebrow Threading & Shaping",
    ],
    description:
      "Premium skincare treatments using advanced techniques and trusted formulations. Achieve radiant, healthy skin — from deep-cleansing hydra facials to transformative BB Glow.",
  },
  {
    id: "nails",
    icon: "●",
    title: "Nails & Extensions",
    subtitle: "Precision artistry for flawless hands",
    color: "#B32A46",
    image: "/service-nails.jpg",
    whatsappMsg: "Hi! I'd like to book a Nail Extension service at Shape 'S' Style.",
    services: [
      "Nail Extensions",
      "Acrylic Nail Extensions",
      "Gel Polish & Nail Art",
      "Manicure & Pedicure",
      "Nail Repair & Maintenance",
      "Luxury Spa Manicure",
    ],
    description:
      "From sculptured nail extensions to detailed nail art, our nail technicians deliver salon-grade precision with premium products and impeccable hygiene standards.",
  },
  {
    id: "bridal",
    icon: "♦",
    title: "Bridal & Makeup",
    subtitle: "For your most important day",
    color: "#622615",
    image: "/service-bridal.jpg",
    whatsappMsg: "Hi! I'd like to enquire about Bridal Makeup at Shape 'S' Style.",
    services: [
      "Bridal Makeup",
      "Basic & Party Makeup",
      "Pre-Bridal Package",
      "Engagement Makeup",
      "Lash Extensions & Lash Lift",
      "Airbrush Makeup",
    ],
    description:
      "Bridal beauty crafted for lasting impressions. Our artists blend tradition with modern technique to make every bride feel entirely herself — perfected.",
  },
  {
    id: "academy",
    icon: "◇",
    title: "Makeup Academy",
    subtitle: "Professional courses for aspiring artists",
    color: "#D29168",
    image: "/service-academy.jpg",
    whatsappMsg: "Hi! I'd like to know more about the Makeup Academy courses at Shape 'S' Style.",
    services: [
      "Professional Makeup Course",
      "Bridal Makeup Diploma",
      "Nail Technician Certificate",
      "Skin Care & Facial Course",
      "Hair Styling Workshop",
      "Short-term Grooming Courses",
    ],
    description:
      "Shape your future in beauty. Our academy provides hands-on, curriculum-driven training in makeup artistry, skin care and nail techniques — with industry-recognised certification.",
  },
];


export const TOOLS_ANIMATION = [
  { id: "dryer", label: "Hair Services", serviceId: "hair" },
  { id: "scissors", label: "Hair Cut & Styling", serviceId: "hair" },
  { id: "brush", label: "Makeup & Bridal", serviceId: "bridal" },
  { id: "nail", label: "Nail Extensions", serviceId: "nails" },
  { id: "serum", label: "Hydra Facial & BB Glow", serviceId: "skin" },
  { id: "lash", label: "Lash Extensions", serviceId: "bridal" },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Haridwar",
    stars: 5,
    service: "Bridal Makeup",
    quote:
      "I was absolutely transformed on my wedding day. The team understood exactly the look I wanted — elegant, timeless and unmistakably me. Received compliments from every guest.",
    initials: "PS",
  },
  {
    id: 2,
    name: "Kavita Negi",
    location: "Rishikesh",
    stars: 5,
    service: "Hydra Facial",
    quote:
      "First time visiting for a Hydra Facial and the results were remarkable. My skin has never felt so clean and radiant. The treatment room is pristine and the staff genuinely professional.",
    initials: "KN",
  },
  {
    id: 3,
    name: "Anjali Rawat",
    location: "Haridwar",
    stars: 5,
    service: "Nail Extensions",
    quote:
      "The nail extensions are absolutely stunning — I've been coming back for months. The artistry and attention to detail here is on another level compared to other salons in Haridwar.",
    initials: "AR",
  },
  {
    id: 4,
    name: "Meena Garg",
    location: "Roorkee",
    stars: 5,
    service: "Hair Spa & Colour",
    quote:
      "Drove from Roorkee specifically for the hair spa and colour treatment. Worth every minute of travel. My hair felt replenished and the colour is exactly what I envisioned.",
    initials: "MG",
  },
  {
    id: 5,
    name: "Ritu Dobhal",
    location: "Haridwar",
    stars: 5,
    service: "BB Glow Treatment",
    quote:
      "The BB Glow treatment has genuinely changed my skin. My complexion is more even and luminous, and the team took care to explain every step. Such a premium experience.",
    initials: "RD",
  },
  {
    id: 6,
    name: "Sunita Verma",
    location: "Dehradun",
    stars: 5,
    service: "Makeup Academy",
    quote:
      "Completed the bridal makeup diploma here and it was exceptional. The trainers are seasoned professionals and the course has directly helped me build my own clientele.",
    initials: "SV",
  },
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    src: "/gallery-hair.jpg",
    alt: "Luxury hair styling and treatment at Shape S Style Haridwar",
    label: "Hair Artistry",
    category: "hair",
  },
  {
    id: 2,
    src: "/gallery-nails.jpg",
    alt: "Premium nail extensions with terracotta and gold nail art",
    label: "Nail Extensions",
    category: "nails",
  },
  {
    id: 3,
    src: "/bridal-hero.jpg",
    alt: "Bridal makeup transformation at Shape S Style",
    label: "Bridal Makeup",
    category: "bridal",
  },
  {
    id: 4,
    src: "/gallery-skin.jpg",
    alt: "Hydra facial skin treatment at luxury salon",
    label: "Hydra Facial",
    category: "skin",
  },
  {
    id: 5,
    src: "/gallery-makeup.jpg",
    alt: "Premium makeup artistry with defined eyes and contouring",
    label: "Makeup Artistry",
    category: "bridal",
  },
  {
    id: 6,
    src: "/hero-salon.jpg",
    alt: "Shape S Style luxury salon interior Haridwar",
    label: "Our Studio",
    category: "salon",
  },
];

export const FAQS = [
  {
    q: "Where is Shape 'S' Style located in Haridwar?",
    a: "We are at Ranipur More, near Vishal Mega Mart, opposite HDFC Bank, Haridwar. It's a highly accessible location, easily reachable from the main market and bus stand.",
  },
  {
    q: "How do I book an appointment?",
    a: "You can book instantly via WhatsApp or give us a call. Our team will confirm your preferred time slot within minutes. Walk-ins are also welcome, subject to availability.",
  },
  {
    q: "What are your salon timings?",
    a: "We are open Tuesday through Sunday, 10:00 AM to 8:00 PM. We are closed on Mondays.",
  },
  {
    q: "Do you offer bridal packages?",
    a: "Yes. We offer comprehensive bridal packages that include trial sessions, pre-bridal skin treatments, bridal makeup, hair styling and coordination for the full wedding function schedule.",
  },
  {
    q: "What skin treatments do you specialise in?",
    a: "Our signature skin services include Hydra Facial, BB Glow Treatment, advanced facials and customised skin care solutions — all performed with clinical-grade equipment and premium formulations.",
  },
  {
    q: "Do you run a beauty academy?",
    a: "Yes, our professional Makeup Academy offers certified training in makeup artistry, bridal makeup, nail extensions, hair styling and skin care. Courses are designed for both beginners and working professionals.",
  },
  {
    q: "What hygiene standards do you follow?",
    a: "Hygiene and client safety are foundational to everything we do. All implements are sanitised between each client, single-use tools are used where appropriate, and our studio is maintained to the highest cleanliness standards.",
  },
];

export const TRUST_STATS = [
  { value: "18+", label: "Years of Excellence" },
  { value: "10K+", label: "Happy Clients" },
  { value: "500+", label: "Brides Transformed" },
  { value: "100%", label: "Hygiene Certified" },
];
