import type { Metadata } from "next";
import { Poppins, Jost } from "next/font/google";
import "@/styles/globals.css";
import { generateSEO } from "@/lib/seo";
import { Toaster } from "sonner";
import WhatsappFixedIcon from "@/components/shared/WhatsappFixedIcon";

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

export const metadata: Metadata = generateSEO();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={`${poppins.variable} ${jost.variable} antialiased min-h-screen flex flex-col`}>
        {children}
        <Toaster position="top-center" />
        <WhatsappFixedIcon />
      </body>
    </html>
  );
}
