import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, Dancing_Script } from "next/font/google";
import "./globals.css";
import AuroraBackground from "./components/AuroraBackground";

// Configuração das fontes usando next/font/google
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-handwriting",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crer & Ser - Psicologia de Alto Padrão",
  description: "Clínica de psicologia especializada em cuidados de alto padrão",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorantGaramond.variable} ${plusJakartaSans.variable} ${dancingScript.variable} overflow-x-hidden scroll-smooth`} style={{ scrollPaddingTop: '7rem' }}>
      <body className="overflow-x-hidden max-w-full">
        <AuroraBackground />
        {children}
      </body>
    </html>
  );
}

