import { Metadata } from "next";
import type { Viewport } from "next";
import TechinikaLanding from "../components/Pages/MainPage";
import StructuredData from "../components/SEO/StructuredData";

export const metadata: Metadata = {
  title:
    "Techinika: Tech Consulting, Solutions, Training, Hackathons, and Community",
  description:
    "Techinika provides consulting, training, hackathons, and mentorship to empower the technology community. Join us to learn, build, and grow your career in tech.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title:
      "Techinika: Tech Consulting, Solutions, Training, Hackathons, and Community",
    description:
      "Techinika provides consulting, training, hackathons, and mentorship to empower the technology community. Join us to learn, build, and grow your career in tech.",
    url: "https://techinika.co.rw",
    siteName: "Techinika",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Techinika: Tech Consulting, Solutions, Training, Hackathons, and Community",
    description:
      "Techinika provides consulting, training, hackathons, and mentorship to empower the technology community.",
  },
  keywords: [
    "Techinika",
    "Rwandan tech community",
    "free tech training Rwanda",
    "Kigali tech hub",
    "tech hackathons",
    "web development training",
    "mobile development Rwanda",
    "IT mentorship",
    "startup support Rwanda",
    "tech jobs Rwanda",
    "Kigali tech events",
    "Rwanda tech education",
    "Kigali tech education",
    "Techinika training programs",
    "Rwanda tech solutions",
    "Kigali tech solutions",
    "Techinika hackathons",
    "Rwanda tech consulting",
    "Kigali tech consulting",
    "Techinika community",
    "Rwanda tech innovation",
    "Kigali tech innovation",
    "Techinika resources",
    "Rwanda tech resources",
    "Kigali tech resources",
    "Techinika partnerships",
    "Rwanda tech partnerships",
    "Kigali tech partnerships",
    "Techinika support",
    "Rwanda tech support",
  ],
  alternates: {
    canonical: "https://techinika.co.rw",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function Home() {
  return (
    <div>
      <StructuredData />
      <TechinikaLanding />
    </div>
  );
}
