import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from 'sonner';
import "./globals.css";
import { siteConfig } from "./page";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://devletter.vercel.app"),
  title: {
    default: siteConfig.name,
    template: `%s - Newsletter for dev's`,
  },
  description: siteConfig.description,

  // added new keywords for seo
  keywords: [
    "devletter","newsletter", "dev","letter","Dev","Letter","@Taquiimam14","Taqui imam","Md","Taqui", "imam", "Md Taqui Imam", "programmer", "web developer","nextjs", "react"
  ],
  authors: [
    {
      name: "Md Taqui Imam",
      url: "https://github.com/taqui-786",
    },
  ],
  creator: "Md Taqui imam",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: "@Taquiimam14",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <Toaster/>
          {children}
      </body>
    </html>
  );
}

