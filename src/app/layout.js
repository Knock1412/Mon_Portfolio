import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mon Portfolio",
  description: "Découvrez mes projets et contactez-moi.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Barre de navigation */}
        <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#111", color: "white" }}>
          <Link href="/" style={{ color: "white", textDecoration: "none" }}>Accueil</Link>
          <Link href="/projets" style={{ color: "white", textDecoration: "none" }}>Projets</Link>
          <Link href="/contact" style={{ color: "white", textDecoration: "none" }}>Contact</Link>
        </nav>

        {/* Contenu des pages */}
        <main>{children}</main>
      </body>
    </html>
  );
}
