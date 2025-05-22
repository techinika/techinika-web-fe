import Request from "@/components/Pages/Request";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Free Consultancy",
  description:
    "Submit a request for free IT consultancy services from Techinika. Let's collaborate to find digital solutions tailored to your organization's goals.",
  keywords: [
    "free IT consultancy Rwanda",
    "Techinika consultancy request",
    "digital solutions Rwanda",
    "tech support Rwanda",
    "consultancy services Rwanda",
  ],
};

function page() {
  return (
    <div>
      <Request />
    </div>
  );
}

export default page;
