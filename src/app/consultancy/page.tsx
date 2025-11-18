import React from "react";
import type { Metadata } from "next";
import UbunifuRedirect from "@/components/Redirect/UbunifuRedirect";

export const metadata: Metadata = {
  title: "Technology Consultancy Services in Rwanda | Techinika",
  description:
    "Explore Techinika's IT and digital consultancy services, showcasing our portfolio and commitment to driving technological advancement in Rwanda.",
  keywords: [
    "Techinika consultancy",
    "IT services Rwanda",
    "digital consultancy Rwanda",
    "tech solutions Rwanda",
    "Techinika portfolio",
    "Rwanda tech consulting",
    "Kigali tech consultancy",
    "Rwanda IT solutions",
    "Kigali IT services",
    "Rwanda digital transformation",
    "Kigali digital solutions",
    "consultancy services Rwanda",
    "Rwanda tech projects",
    "Kigali tech projects",
    "Rwanda technology consulting",
    "Kigali technology consulting",
    "Rwanda tech innovation", 
    "ai consultancy Rwanda",
    "ai solutions Rwanda",
    "Rwanda tech startups",
    "Kigali tech startups",
    "ai in business Rwanda",
    "Rwanda tech partnerships",
    "Kigali tech partnerships",
  ],
};

function page() {
  return (
    <div>
      <UbunifuRedirect />
    </div>
  );
}

export default page;
