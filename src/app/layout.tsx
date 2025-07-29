import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

const noto = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Instituto Do Sorriso",
  description:
    "Recupere seu sorriso com segurança, estética e qualidade. Nossa clínica odontológica é referência em implantes dentários e protocolo fixo, oferecendo tratamentos modernos com materiais de alta performance, equipe especializada e tecnologia avançada. Atendemos pacientes que buscam reabilitação oral completa, conforto ao mastigar e mais autoestima. Agende agora uma avaliação gratuita e descubra como é possível transformar sua vida com um novo sorriso.",
  icons: {
    icon: "/favicon.ico",
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
        className={`antialiased ${noto.className} ${inter.className} ${montserrat.className}`}>
        {children}
      </body>
    </html>
  );
}
