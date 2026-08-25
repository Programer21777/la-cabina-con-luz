import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const socialImage = `${protocol}://${host}/og.jpg`;

  return {
    title: "La Cabina con Luz | Noticias, fotos y voces de la ciudad",
    description:
      "Noticias locales, entretenimiento, cultura y fotografía con La Cabina con Luz y Carmona Pics.",
    applicationName: "La Cabina con Luz",
    icons: {
      icon: "/images/la-cabina-logo.jpeg",
      apple: "/images/la-cabina-logo.jpeg",
    },
    keywords: [
      "La Cabina con Luz",
      "noticias locales",
      "Tijuana",
      "fotografía",
      "entretenimiento",
      "Carmona Pics",
    ],
    openGraph: {
      type: "website",
      locale: "es_MX",
      siteName: "La Cabina con Luz",
      title: "La Cabina con Luz | Noticias, fotos y voces de la ciudad",
      description:
        "Noticias locales, entretenimiento, cultura y fotografía con La Cabina con Luz y Carmona Pics.",
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: "La Cabina con Luz — Noticias, fotos y ciudad",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "La Cabina con Luz",
      description: "Noticias, fotos y voces conectadas a la ciudad.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={geist.variable}>{children}</body>
    </html>
  );
}
