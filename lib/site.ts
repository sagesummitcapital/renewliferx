export const site = {
  name: "Renew Life RX",
  shortName: "RenewLifeRX",
  tagline: "Personalized Care. Real Results.",
  description:
    "Medically supervised hormone optimization, weight loss, and peptide therapy. Lab-based, physician-reviewed treatment plans with ongoing monitoring — delivered to your door.",
  url: "https://www.renewliferx.com",
  phone: "877-722-1663",
  phoneHref: "tel:+18777221663",
  email: "info@renewliferx.com",
  address: {
    street: "14500 N Northsight Blvd, Ste 100",
    city: "Scottsdale",
    state: "AZ",
    zip: "85260",
    full: "14500 N Northsight Blvd Ste 100, Scottsdale, AZ 85260",
  },
  hubspot: {
    portalId: "4078883",
    formId: "3528a8d6-bbf1-4b04-a14d-4a38a30fb1d2",
    region: "na1",
  },
  legalEntity: "New Life Management Group",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/how-it-works" },
  {
    label: "Treatments",
    href: "/treatments",
    children: [
      { label: "Testosterone / HRT", href: "/treatments/trt-hrt-men" },
      { label: "Women's Hormone Optimization", href: "/treatments/womens-hormone-optimization" },
      { label: "Medical Weight Loss / Semaglutide", href: "/treatments/medical-weight-loss" },
      { label: "Peptide Therapy", href: "/treatments/peptide-therapy" },
    ],
  },
  { label: "Blood Work", href: "/blood-work" },
  { label: "Why Renew Life", href: "/why-renew-life" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;
