import React from "react";
import type { Metadata } from "next";
import MasterClassRedirect from "@/components/Parts/MasterClassRedirect";

export const metadata: Metadata = {
  title: "Technology Training for Teams in Rwanda | Techinika",
  description:
    "Join Techinika's masterclasses and training programs designed to enhance digital competencies, tailored for individuals and organizations in Rwanda.",
  keywords: [
    "Techinika masterclass",
    "digital training Rwanda",
    "tech workshops Rwanda",
    "online courses Rwanda",
    "skill development Rwanda",
    "Kigali tech training",
    "Rwanda tech education",
    "Kigali digital skills",
    "Rwanda tech workshops",
    "ai training Rwanda",
    "Kigali ai courses",
    "Rwanda tech masterclasses",
    "ai masterclass Rwanda",
    "Kigali tech education",
    "ai skills Rwanda",
    "ai for teams Rwanda",
    "Rwanda tech training programs",
    "Kigali digital training",
    "Rwanda tech skills",
    "Kigali tech workshops",
    "Rwanda digital transformation",
  ],
};

function page() {
  return (
    <div>
      <MasterClassRedirect />
    </div>
  );
}

export default page;
