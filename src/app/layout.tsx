import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://joat.yuktikula.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090a0f",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jack of All Trades | Yuktikula | GL Bajaj Institute of Technology & Management",
    template: "%s | Jack of All Trades – Yuktikula",
  },
  description:
    "Jack of All Trades – A 120-minute offline multi-domain technical sprint by Yuktikula, Department of Data Science at GL Bajaj Institute of Technology & Management (GLBITM), Greater Noida. SQL, Python debugging, data analysis, competitive programming – only 5 earn the title. Register now.",
  keywords: [
    "Jack of All Trades",
    "JOAT",
    "Yuktikula",
    "Yuktikula Club",
    "GL Bajaj",
    "GLBITM",
    "GL Bajaj Institute of Technology and Management",
    "Greater Noida",
    "Data Science",
    "Department of Data Science",
    "coding competition",
    "hackathon",
    "technical sprint",
    "programming contest",
    "CP Arena",
    "SQL investigation",
    "Python debugging",
    "data detective",
    "competitive programming",
    "BTech",
    "engineering event",
    "college tech event",
    "offline coding contest",
    "VS Code extension",
    "multi-domain challenge",
    "college hackathon Greater Noida",
    "GLBITM events",
    "Yuktikula GLBITM",
    "Jack of All Trades badge",
    "coding sprint India",
    "tech event 2025",
  ],
  authors: [{ name: "Yuktikula Club – Technical Team", url: "https://yuktikulaglb.in" }],
  creator: "Yuktikula Club",
  publisher: "Yuktikula Club, GL Bajaj Institute of Technology & Management",
  applicationName: "Jack of All Trades",
  category: "technology",
  openGraph: {
    title: "Jack of All Trades | Yuktikula | GL Bajaj Greater Noida",
    description:
      "A 120-minute offline technical gauntlet across SQL, Python, data analysis and competitive programming. Only 5 will earn the title Jack of All Trades. Register before seats fill up.",
    url: siteUrl,
    siteName: "Jack of All Trades – Yuktikula",
    images: [
      {
        url: "/assets/card-front.png",
        width: 1200,
        height: 630,
        alt: "Jack of All Trades by Yuktikula – GL Bajaj Institute of Technology & Management",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yuktikulaglbitm",
    creator: "@yuktikulaglbitm",
    title: "Jack of All Trades | Yuktikula | GLBITM",
    description:
      "Are you competent enough? Join the ultimate 120-minute offline coding gauntlet at GL Bajaj, Greater Noida. Only 5 earn the title.",
    images: ["/assets/card-front.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "google-site-verification": process.env.GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Jack of All Trades",
    description:
      "A 120-minute offline multi-domain technical sprint by Yuktikula, Department of Data Science at GL Bajaj Institute of Technology & Management. Participants compete across SQL, Python debugging, data analysis, and competitive programming. Only 5 earn the title.",
    startDate: "2025-10-07T13:30:00+05:30",
    endDate: "2025-10-07T15:30:00+05:30",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "AB3 Block A, GL Bajaj Institute of Technology & Management",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Knowledge Park III",
        addressLocality: "Greater Noida",
        addressRegion: "Uttar Pradesh",
        postalCode: "201306",
        addressCountry: "IN",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Yuktikula Club",
      url: "https://yuktikulaglb.in",
    },
    performer: {
      "@type": "Organization",
      name: "Yuktikula Club – Department of Data Science, GLBITM",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      availability: "https://schema.org/LimitedAvailability",
      url: `${siteUrl}/register`,
      validFrom: "2025-09-20T00:00:00+05:30",
    },
    image: `${siteUrl}/assets/card-front.png`,
    maximumAttendeeCapacity: 150,
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased bg-bg-base text-text-primary`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-bg-base overflow-x-hidden selection:bg-accent-500/30 selection:text-text-primary">
        {children}
      </body>
    </html>
  );
}
