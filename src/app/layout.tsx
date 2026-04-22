import type { Metadata } from "next";
import { Poppins, Jost } from "next/font/google";
import "@/styles/globals.css";
import { generateSEO } from "@/lib/seo";
import { Toaster } from "sonner";
import WhatsappFixedIcon from "@/components/shared/WhatsappFixedIcon";
import { JsonLd } from "@/components/shared/JsonLd";
import { organizationSchema, websiteSchema } from "./home/sections/json-ld/json-ld-data";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = generateSEO({
  title: "Web Development Services & Custom Websites in Kenya",
  description:
    "ScriptTag builds custom, scalable websites for businesses across Kenya. We design fast, reliable, and SEO-optimized websites tailored to help SMEs grow online.",
  keywords: [
    "web development Kenya",
    "website design Kenya",
    "custom websites Kenya",
    "web developer Kenya",
    "business websites Kenya",
    "SME websites Kenya",
    "professional web design Kenya",
    "Next.js developer Kenya",
    "custom web solutions Kenya",
    "frontend developer Kenya",
    "backend developer Kenya",
    "affordable business websites Kenya",
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={`${poppins.variable} ${jost.variable} antialiased min-h-screen flex flex-col`}>
        {/* Organization */}
        <JsonLd data={organizationSchema} />
        {/* Website */}
        <JsonLd data={websiteSchema} />
        {children}
        <Toaster position="top-center" />
        <WhatsappFixedIcon />
      </body>
    </html>
  );
}
