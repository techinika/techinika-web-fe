import ConsultancyApply from "@/components/Pages/ConsultancyPage";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultancy Services",
  description:
    "Explore Techinika's IT and digital consultancy services, showcasing our portfolio and commitment to driving technological advancement in Rwanda.",
  keywords: [
    "Techinika consultancy",
    "IT services Rwanda",
    "digital consultancy Rwanda",
    "tech solutions Rwanda",
    "Techinika portfolio",
  ],
};

function page() {
  return (
    <div>
      <ConsultancyApply />
    </div>
  );
}

export default page;
