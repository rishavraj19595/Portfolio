import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import KeepAlive from "@/components/KeepAlive";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata = {
  title: "Rishav Raj | Full-Stack Developer & Aspiring Software Engineer",
  description:
    "Official developer portfolio of Rishav Raj, Full-Stack Developer and Computer Science student. Specialized in Java Spring Boot, React, Next.js, REST APIs, MongoDB, and 13 verified certifications.",
  keywords: [
    "Rishav Raj",
    "Full-Stack Developer",
    "Aspiring Software Engineer",
    "Java Spring Boot Developer",
    "Next.js Developer",
    "React Developer",
    "Lovely Professional University",
    "Data Structures & Algorithms",
    "Portfolio",
  ],
  authors: [{ name: "Rishav Raj" }],
  creator: "Rishav Raj",
  openGraph: {
    title: "Rishav Raj | Full-Stack Developer & Aspiring Software Engineer",
    description: "Building scalable backend architectures, modern web applications, and resilient systems.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050505",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`dark scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#050505] text-[#F5F5F5] antialiased selection:bg-red-900/40 selection:text-red-200">
        <KeepAlive />
        {children}
      </body>
    </html>
  );
}
