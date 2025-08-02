import MediaPage from "@/components/Pages/MediaPage";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Techinika Media: Our Blog & YouTube Channels",
  description:
    "Explore Techinika's media initiatives, including our blog, and two YouTube channels (one in Kinyarwanda for tech education and one in English for technology and business content) to learn how things work and stay up to date.",
  openGraph: {
    title: "Techinika Media: Our Blog & YouTube Channels",
    description:
      "Explore Techinika's media initiatives, including our blog, and two YouTube channels (one in Kinyarwanda for tech education and one in English for technology and business content) to learn how things work and stay up to date.",
    url: "https://techinika.co.rw/media",
  },
  keywords: [
    "Techinika media",
    "Rwandan tech blog",
    "Kinyarwanda tech videos",
    "tech education Rwanda",
    "tech business content",
    "Kinyarwanda YouTube",
    "Techinika",
    "Kigali tech community",
    "Rwanda tech media",
    "Techinika YouTube channels",
    "Rwanda tech education",
    "Kigali tech education",
    "Techinika blog",
    "Rwanda tech news",
    "Kigali tech news",
    "Techinika content",
    "Rwanda tech insights",
    "Kigali tech insights",
    "Techinika tutorials",
    "Rwanda tech tutorials",
    "Kigali tech tutorials",
    "Techinika resources",
    "Rwanda tech resources",
    "Kigali tech resources",    
    "Techinika community",
    "Rwanda tech community",
    "Kigali tech community",
    "Techinika innovation", 
    "Rwanda tech innovation",
    "Kigali tech innovation",
    "Techinika updates",
    "Rwanda tech updates",
    "Kigali tech updates",
    "Techinika events",
    "Rwanda tech events",
    "Kigali tech events",
    "Techinika collaborations",
    "Rwanda tech collaborations",
    "Kigali tech collaborations",
    "Techinika partnerships",
    "Rwanda tech partnerships",
    "Kigali tech partnerships",
    "Techinika support",
    "Rwanda tech support",
    "Kigali tech support",
    "Techinika feedback",
    "Rwanda tech feedback",
    "Kigali tech feedback",
    "Techinika inquiries",
    "Rwanda tech inquiries",
    "Kigali tech inquiries",
    "Techinika assistance",
  ],
};

function page() {
  return (
    <div>
      <MediaPage />
    </div>
  );
}

export default page;
