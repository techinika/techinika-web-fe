import React from "react";

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Techinika",
    url: "https://techinika.co.rw",
    logo: "https://techinika.co.rw/logo.png",
    description:
      "Techinika provides consulting, training, hackathons, and mentorship to empower the technology community in Rwanda.",
    sameAs: [
      "https://x.com/techinika",
      "https://instagram.com/techinika",
      "https://linkedin.com/company/techinika",
      "https://youtube.com/@techinika",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "RW",
      addressLocality: "Kigali",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "mailto:info@techinika.com",
      contactType: "customer service",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Techinika",
    url: "https://techinika.co.rw",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://techinika.co.rw/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Tech Education and Consulting",
    description:
      "Technology consulting, training, hackathons, and mentorship services in Rwanda.",
    provider: {
      "@type": "Organization",
      name: "Techinika",
      url: "https://techinika.co.rw",
    },
    areaServed: {
      "@type": "Country",
      name: "Rwanda",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
};

export default StructuredData;
