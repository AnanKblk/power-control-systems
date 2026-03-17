import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Power Control Systems | Industrial Gas Equipment & Solutions",
  description:
    "Power Control Systems — trusted supplier of gas equipment, instrumentation, hydraulics, and industrial safety systems since 1994. Serving oil, gas & industrial sectors across the region.",
  keywords:
    "gas equipment, industrial solutions, instrumentation, hydraulics, safety systems, oil and gas, Jordan",
  openGraph: {
    title: "Power Control Systems",
    description:
      "30+ years serving oil, gas & industrial sectors across the region.",
    url: "https://power-control-systems.com",
    siteName: "Power Control Systems",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
