import Community from "@/components/Pages/CommunityPage";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  // Primary SEO tags
  title: "Rwanda Technology Community: Programs, Events, and Collaboration",
  description:
    "Join the Rwanda Technology community. Participate in our flagship programs like Digital Discourse, Pitch & Feedback Sessions, and the Build-It Hackathon to connect, learn, and grow with fellow tech enthusiasts.",

  openGraph: {
    title: "Rwanda Technology Community: Programs, Events, and Collaboration",
    description:
      "Join the Rwanda Technology community. Participate in our flagship programs like Digital Discourse, Pitch & Feedback Sessions, and the Build-It Hackathon to connect, learn, and grow with fellow tech enthusiasts.",
    url: "https://techinika.co.rw/community",
    siteName: "Techinika",
    locale: "en_US",
    type: "website",
  },

  keywords: [
    "Techinika community",
    "Rwandan tech events",
    "Kigali tech meetups",
    "Digital Discourse",
    "Pitch and Feedback",
    "Build-It Hackathon",
    "tech collaboration Rwanda",
    "tech networking",
    "community building",
    "Rwanda tech programs",
    "Kigali tech community",
    "Rwanda tech enthusiasts",
    "Techinika events",
    "Rwanda technology initiatives",
    "Rwanda tech workshops",
    "Rwanda tech networking",
    "Kigali tech events",
    "Rwanda tech community building",
    "Techinika community programs",
    "Rwanda tech innovation",
    "Rwanda tech startups",
    "Kigali tech startups",
    "Rwanda tech mentorship", 
    "Kigali tech mentorship",
    "Rwanda tech education",
    "Kigali tech education",
    "Rwanda tech resources",
    "Kigali tech resources",
    "Rwanda tech support",
    "Kigali tech support",
    "Rwanda tech opportunities",
    "Kigali tech opportunities",
    "Rwanda tech challenges",
    "Kigali tech challenges",
    "Rwanda tech solutions",
    "Kigali tech solutions",
    "Rwanda tech community events",
    "Kigali tech community events",
  ],
};

function page() {
  return (
    <div>
      <Community />
    </div>
  );
}

export default page;
