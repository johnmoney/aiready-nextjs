import type { Metadata } from "next";
import { Nunito, Montserrat } from "next/font/google";
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import '@fortawesome/fontawesome-free/css/solid.min.css';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Ready Institute | Career Preparation in an AI-Driven World",
  description:
    "Prepare students for AI-driven careers with clarity. We help schools, students, and families make decisions that reflect current economic reality.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
