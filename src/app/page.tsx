import { Metadata } from "next";
import MainPage from "../components/Pages/MainPage";

export const metadata: Metadata = {
  title:
    "Techinika: Tech Consulting, Solutions, Training, Hackathons, and Community",
  description:
    "Techinika provides consulting, training, hackathons, and mentorship to empower the technology community. Join us to learn, build, and grow your career in tech.",
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
};

export default function Home() {
  return (
    <div>
      <MainPage />
    </div>
  );
}
