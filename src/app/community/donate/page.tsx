import DonatePage from "@/components/Pages/DonatePage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  // Primary SEO tags
  title: "Donate to Rwanda Technology Community: Support the Cause",
  description:
    "Your donation empowers the Rwandan technology community by funding free training, hackathons, and mentorship. Support our mission to reach every Rwandan with technology education.",

  // Open Graph tags for social media sharing
  openGraph: {
    title: "Donate to Rwanda Technology Community: Support the Cause",
    description:
      "Your donation empowers the Rwandan tech community by funding free training, hackathons, and mentorship. Support our mission to reach every Rwandan with technology education.",
    url: "https://techinika.co.rw/donate",
    type: "website",
    images: [
      {
        url: "https://techinika.co.rw/community.png",
        width: 1200,
        height: 630,
        alt: "Support the Rwanda Technology Community",
      },
    ],
  },

  // Twitter Card tags for social media sharing
  twitter: {
    card: "summary_large_image",
    site: "@RwTechCommunity",
    title: "Donate to Rwanda Technology Community",
    description:
      "Your donation supports free tech training, hackathons, and mentorship across Rwanda.",
    images: ["https://techinika.co.rw/community.png"],
  },

  // Keywords for search engine context
  keywords: [
    "Techinika donation",
    "donate Rwanda tech",
    "crowdfunding tech education",
    "support Rwandan community",
    "tech hackathon funding",
    "Kigali tech education",
    "charity technology Rwanda",
    "Techinika support",
    "Rwanda tech community",
    "Rwanda technology donation",
    "Rwanda tech initiatives",
    "Kigali tech initiatives",
    "Rwanda tech training",
    "Kigali tech training",
    "Rwanda tech mentorship",
    "donate tech education",
    "donate to tech community",
    "Rwanda tech crowdfunding",
    "Kigali tech crowdfunding",
    "Rwanda tech support",
    "Kigali tech support",
    "Rwanda tech donations",
    "Kigali tech donations",
    "donate to Rwanda tech",
    "support tech education Rwanda",
    "Rwanda tech impact",
    "donate to Rwandan tech",
    "Kigali tech impact",
    "Rwanda tech growth",
    "support tech growth Rwanda",
  ],
};

function page() {
  return (
    <div>
      <DonatePage />
    </div>
  );
}

export default page;
