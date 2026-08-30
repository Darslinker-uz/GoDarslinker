import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { TelegramInit } from "./telegram-init";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://go.darslinker.uz"),
  title: {
    default: "Go Darslinker — Bepul Til O‘rganish Platformasi",
    template: "%s | Go Darslinker",
  },
  description:
    "Chet tillarini noldan bepul o‘rganing — interaktiv darslar va mashqlar bilan tilda gapirishni tez va mustaqil o‘rganing.",
  openGraph: {
    type: "website",
    locale: "uz_UZ",
    siteName: "Go Darslinker",
    url: "https://go.darslinker.uz",
    title: "Go Darslinker — Bepul Til O‘rganish Platformasi",
    description:
      "Chet tillarini noldan bepul o‘rganing — interaktiv darslar va mashqlar bilan tilda gapirishni tez va mustaqil o‘rganing.",
    images: ["/hero/go-darslinker-gateway.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Go Darslinker — Bepul Til O‘rganish Platformasi",
    description:
      "Chet tillarini noldan bepul o‘rganing — interaktiv darslar va mashqlar bilan tilda gapirishni tez va mustaqil o‘rganing.",
    images: ["/hero/go-darslinker-gateway.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Go Darslinker",
  alternateName: "Go Darslinker!",
  url: "https://go.darslinker.uz",
  logo: "https://go.darslinker.uz/brand/go-darslinker-logo.svg",
  description: "Bepul, interaktiv chet tili o‘rganish platformasi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uz"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Script src="https://telegram.org/js/telegram-web-app.js" strategy="beforeInteractive" />
        <Script id="organization-jsonld" type="application/ld+json" strategy="beforeInteractive">
          {JSON.stringify(organizationJsonLd)}
        </Script>
        <TelegramInit />
        {children}
      </body>
    </html>
  );
}
