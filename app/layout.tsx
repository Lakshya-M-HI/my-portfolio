import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Lakshya Mittal — Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, and PostgreSQL. Building fast, scalable web applications.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "Lakshya Mittal"],
  openGraph: {
    title: "Lakshya Mittal — Full Stack Developer",
    description: "Building fast, scalable web apps from pixel-perfect UIs to robust APIs.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 font-body antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
