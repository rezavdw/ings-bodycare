import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ing's Body Care | Schoonheidssalon Vleuten Utrecht",
  description:
    "Professionele schoonheidsbehandelingen in Vleuten, Leidsche Rijn Utrecht. Gezichtsbehandelingen, massages, waxing en meer. Boek uw afspraak online.",
  keywords:
    "schoonheidssalon, Vleuten, Utrecht, Leidsche Rijn, gezichtsbehandeling, massage, waxing, beautyspecialiste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
