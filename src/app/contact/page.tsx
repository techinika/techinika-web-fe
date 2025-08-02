import Contact from "@/components/Pages/ContactForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  // Primary SEO tags
  title: "Contact Techinika: Inquiries, Partnerships, and Support",
  description:
    "Get in touch with the Techinika team for questions about our programs, partnership proposals, media inquiries, or technical support. We are here to help the Rwandan tech community thrive.",

  openGraph: {
    title: "Contact Techinika for Inquiries & Support",
    description:
      "Get in touch with the Techinika team for questions about our programs, partnership proposals, media inquiries, or technical support. We are here to help the Rwandan tech community thrive.",
    url: "https://techinika.co.rw/contact",
    siteName: "Techinika",
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "Contact Techinika",
    "Techinika email",
    "Techinika phone number",
    "Kigali tech company contact",
    "Rwanda tech support",
    "tech partnership proposal",
    "media inquiries",
    "community program questions",
    "Techinika location",
    "get in touch",
    "Rwanda tech community contact",
    "Kigali tech community contact",
    "Techinika contact form",
    "Rwanda tech inquiries",
    "Kigali tech inquiries",
    "Techinika support",
    "Rwanda tech partnerships",
    "Kigali tech partnerships",
    "Techinika feedback",
    "Rwanda tech feedback",
    "Kigali tech feedback",
    "Techinika collaborations",
    "Rwanda tech collaborations",
    "Kigali tech collaborations",
    "Techinika events",
    "Rwanda tech events",
    "Kigali tech events",
    "Techinika community support",
    "Rwanda tech community support",
    "Kigali tech community support",
    "Techinika inquiries",
    "Rwanda tech inquiries",
    "Kigali tech inquiries",
    "Techinika assistance",
    "Rwanda tech assistance",
    "Kigali tech assistance",
    "Techinika resources",
    "Rwanda tech resources",
    "Kigali tech resources",
    "Techinika opportunities",
    "Rwanda tech opportunities",
    "Kigali tech opportunities",
    "Techinika challenges",
    "Rwanda tech challenges",
    "Kigali tech challenges",
    "Techinika solutions",
    "Rwanda tech solutions",
    "Kigali tech solutions",  
    "Techinika community inquiries",
    "Rwanda tech community inquiries",
    "Kigali tech community inquiries",
  ],
};

function page() {
  return (
    <div>
      <Contact />
    </div>
  );
}

export default page;
