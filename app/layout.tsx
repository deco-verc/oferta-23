import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import CaktoUtmTracker from "@/components/CaktoUtmTracker";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "+300 Moldes de Natal Prontos para Imprimir | Folhas A4 & Doces Simples",
  description:
    "Transforme Folhas A4 e Doces Simples em Lembrancinhas de Natal Inesquecíveis em Poucos Minutos! Mais de 300 moldes prontos para imprimir.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={jakarta.variable}>
      <body className="bg-[#E5E7EB] text-[#1F2937] font-sans antialiased min-h-screen">
        <CaktoUtmTracker />
        {children}
      </body>
    </html>
  );
}
