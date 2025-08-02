import Story from "@/components/Pages/OurStory";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Techinika: Our Mission, Vision, and Team",
  description:
    "Learn about Techinika's mission to empower the Rwandan technology community, our vision for innovation, and the team behind our free training, hackathons, and media initiatives.",

  openGraph: {
    title: "About Techinika: Our Mission, Vision, and Team",
    description:
      "Learn about Techinika's mission to empower the Rwandan technology community, our vision for innovation, and the team behind our free training, hackathons, and media initiatives.",
    url: "https://techinika.co.rw/story",
    siteName: "Techinika",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: "@Techinika",
    title: "About Techinika: Our Mission, Vision, and Team",
    description:
      "Learn about Techinika's mission to empower the Rwandan technology community and the team driving our initiatives.",
    images: ["https://techinika.co.rw/techinika-logo.png"],
  },
  keywords: [
    "About Techinika",
    "Techinika mission",
    "Rwandan tech company",
    "Kigali tech community",
    "free tech training Rwanda",
    "tech hackathons",
    "Techinika team",
    "company values",
    "Rwanda tech innovation",
    "Kigali tech innovation",
    "Techinika vision",

    "Rwanda tech community",
    "Kigali tech community",
    "Techinika story",
    "Rwanda tech education",
    "Kigali tech education",
    "Techinika impact",
    "Rwanda tech initiatives",
    "Kigali tech initiatives",
    "Techinika partnerships",
    "Rwanda tech partnerships",
    "Kigali tech partnerships",
    "Techinika support",
    "Rwanda tech support",
    "Kigali tech support",
    "Techinika resources",
    "Rwanda tech resources",
    "Kigali tech resources",
    "Techinika opportunities",
  ],
};

function page() {
  return (
    <div>
      <Story />
    </div>
  );
}

export default page;
