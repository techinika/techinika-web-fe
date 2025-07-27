import Masterclass from "@/components/Pages/MasterclassPage";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Masterclasses & Training",
  description:
    "Join Techinika's masterclasses and training programs designed to enhance digital competencies, tailored for individuals and organizations in Rwanda.",
  keywords: [
    "Techinika masterclass",
    "digital training Rwanda",
    "tech workshops Rwanda",
    "online courses Rwanda",
    "skill development Rwanda",
  ],
};

function page() {
  return (
    <div>
      <Masterclass />
    </div>
  );
}

export default page;
