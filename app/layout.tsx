import type { Metadata, Viewport } from "next";
import { Anton, Archivo } from "next/font/google";
import "./globals.css";
import { CIDADES } from "@/lib/dados";

// next/font baixa a fonte e serve do nosso proprio dominio.
// Isso corta uma conexao externa e o display swap evita que o
// texto suma enquanto a fonte carrega.
const display = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--fonte-display",
});

const corpo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--fonte-corpo",
});

// Endereco de producao, confirmado no deploy de 09/10/2026.
// Alimenta o canonical, a previa do Open Graph e o JSON-LD do
// negocio. Se um dia a TS registrar dominio proprio, troca aqui
// e os tres acompanham.
const siteUrl = "https://ts-transportes.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "TS Transportes | Transporte de bandas e encomendas em Salgueiro-PE",
  description:
    "Transporte de bandas e artistas para todo o Brasil e coleta de encomendas em Salgueiro, Petrolina, Serra Talhada, Cabrobó, Ouricuri e Araripina-PE.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "TS Transportes",
    title: "TS Transportes | Salgueiro-PE",
    description:
      "Transporte para bandas e equipes de show e entrega de encomendas em Salgueiro-PE e região.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TS Transportes — transporte para bandas e artistas, coleta e envio em Salgueiro",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

// Dados estruturados: e assim que o Google entende que a TS e um
// negocio local, com endereco, telefone e area de atendimento.
const dadosDoNegocio = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: "TS Transportes",
  url: siteUrl,
  telephone: "+5587998100459",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua 8, 66 - Cohab",
    addressLocality: "Salgueiro",
    addressRegion: "PE",
    addressCountry: "BR",
  },
  // Pais e estado cobrem o translado de bandas, que roda o Brasil
  // inteiro. As cidades cobrem a coleta de encomendas, que tem
  // alcance definido. O Google usa isso para saber onde mostrar.
  areaServed: [
    { "@type": "Country", name: "Brasil" },
    { "@type": "State", name: "Pernambuco" },
    ...CIDADES.map((nome) => ({ "@type": "City", name: nome })),
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${corpo.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosDoNegocio) }}
        />
      </body>
    </html>
  );
}
