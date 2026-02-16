import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { LocalBusinessSchema, WebSiteSchema, OrganizationSchema } from "@/components/StructuredData";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fhia.net"),
  alternates: {
    canonical: "./",
  },
  title: {
    default: "Long Island Insurance Agency - FHIA | Since 2003",
    template: "%s | First Heritage Insurance Agency",
  },
  description:
    "Licensed NY insurance broker serving Long Island since 2003. Compare auto, home, business quotes from multiple carriers. Call 631-659-0189 for savings today.",
  keywords: [
    "Long Island insurance",
    "FHIA",
    "auto insurance",
    "home insurance",
    "business insurance",
    "Melville NY",
    "commercial auto",
    "insurance agency",
  ],
  authors: [{ name: "First Heritage Insurance Agency" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fhia.net",
    siteName: "First Heritage Insurance Agency",
    title: "Long Island Insurance Agency - FHIA | Since 2003",
    description:
      "Licensed NY insurance broker serving Long Island since 2003. Compare auto, home, business quotes from multiple carriers.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "First Heritage Insurance Agency - Protecting Long Island Since 2003",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Long Island Insurance Agency - FHIA | Since 2003",
    description:
      "Licensed NY insurance broker serving Long Island since 2003. Compare auto, home, business quotes.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${openSans.variable} font-open-sans antialiased`}
      >
        <LocalBusinessSchema />
        <WebSiteSchema />
        <OrganizationSchema />
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}

