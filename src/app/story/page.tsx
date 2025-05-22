import Story from "@/components/Pages/OurStory";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Discover Techinika's journey, mission, and the media features highlighting our impact in Rwanda's digital education landscape.",
  keywords: [
    "Techinika story",
    "about Techinika",
    "digital education Rwanda",
    "Techinika media features",
    "Rwanda tech initiatives",
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
