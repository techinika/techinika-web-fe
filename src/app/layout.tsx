import "./globals.css";

// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Techinika – Empowering Rwanda Through Digital Skills",
    template: "%s | Techinika",
  },
  description:
    "Techinika provides accessible digital education in Rwanda, offering online courses, physical classes, and the Apprena platform to bridge the digital divide.",
  keywords: [
    "Techinika",
    "digital skills Rwanda",
    "online learning Rwanda",
    "Apprena platform",
    "tech education Rwanda",
    "Kinyarwanda courses",
    "digital literacy Rwanda",
  ],
  openGraph: {
    title: "Techinika – Empowering Rwanda Through Digital Skills",
    description:
      "Join Techinika to access digital education in Rwanda through online courses, physical classes, and the Apprena platform.",
    url: "https://techinika.co.rw",
    siteName: "Techinika",
    images: [
      {
        url: "https://techinika.co.rw/Techinika.png",
        width: 1200,
        height: 630,
        alt: "Techinika – Empowering Rwanda Through Digital Skills",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://techinika.co.rw"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
