import Community from "@/components/Pages/CommunityPage";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rwanda Technology Community",
  description:
    "Be part of the Rwanda Technology Community by Techinika. Engage in events, projects, and initiatives fostering tech growth and collaboration.",
  keywords: [
    "Rwanda Technology Community",
    "Techinika community",
    "tech events Rwanda",
    "tech networking Rwanda",
    "digital community Rwanda",
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
