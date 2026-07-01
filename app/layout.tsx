import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ali Haitham — Backend Developer & Software Engineer",
  description:
    "Portfolio of Ali Haitham Ali Alashkar — Computer Science student at Ain Shams University specializing in Backend Development, Software Testing, and Full-Stack Engineering.",
  keywords: [
    "Ali Haitham",
    "Ali Alashkar",
    "Backend Developer",
    "Software Engineer",
    "Software Tester",
    "Spring Boot",
    "Node.js",
    "React",
    "Java",
    "Cairo",
    "Egypt",
    "Ain Shams University",
    "Portfolio",
  ],
  authors: [{ name: "Ali Haitham Ali Alashkar" }],
  creator: "Ali Haitham Ali Alashkar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ali-alashkar.dev",
    title: "Ali Haitham — Backend Developer & Software Engineer",
    description:
      "Portfolio of Ali Haitham Ali Alashkar — Computer Science student at Ain Shams University.",
    siteName: "Ali Haitham Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Haitham — Backend Developer & Software Engineer",
    description:
      "Portfolio of Ali Haitham Ali Alashkar — Backend Developer, Software Tester, CS Student.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
