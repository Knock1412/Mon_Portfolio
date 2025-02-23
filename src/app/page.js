"use client";
import styles from "./page.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    // Appliquer l'arrière-plan global au body
    document.body.style.background = "linear-gradient(135deg, #1f1c2c, #928dab)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.margin = "0";
    document.body.style.padding = "0";

    return () => {
      // Nettoyer le style quand on quitte la page
      document.body.style.background = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundAttachment = "";
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
          currentSection = section;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenue sur mon Portfolio</h1>
      <p className={styles.subtitle}>Étudiant informatique passionné par la création de logiciels et d'applications.</p>

      <div className={styles.sections}>
        {/* Formation */}
        <motion.section 
          className={`${styles.section} ${activeSection?.id === "formations" ? styles.activeSection : ""}`} 
          id="formations"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>🎓 Formations</h2><br />
          <ul className={styles.listeSansPoint}>
            <li><strong>Licence Informatique</strong> - ISEI (2023 - 2026)</li><br />
            <li><strong>Baccalauréat Scientifique</strong> - Lycée XYZ (2020 - 2023)</li>
          </ul>
        </motion.section>

        {/* Compétences */}
        <motion.section 
          className={`${styles.section} ${activeSection?.id === "competences" ? styles.activeSection : ""}`} 
          id="competences"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>💡 Compétences</h2><br />
          <ul className={`${styles.skills} ${styles.listeSansPoint}`}>
            <li>Next.js / Vercel</li>
            <li>Python </li>
            <li>C / C++</li>
            <li>Développement Mobile (Kotlin, LibGDX)</li>
            <li>Git / GitHub</li>
            <li>PhP / MySQL</li>
          </ul>
        </motion.section>

        {/* Expériences */}
        <motion.section 
          className={`${styles.section} ${activeSection?.id === "experiences" ? styles.activeSection : ""}`} 
          id="experiences"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>💼 Expériences Professionnelles</h2><br />
          <ul className={styles.listeSansPoint}>
            <li><strong>Maintenance informatique</strong> - Stage chez Atelier du Mac (Avril.2024 - Juin.2024 )</li><br />
            <li><strong>Ouvrier Qualifié</strong> - chez Société LA BIENVENUE (Juil.2023 - Août.2023)</li>
          </ul>
        </motion.section>
      </div>

      {/* 🔥 Boutons */}
      <div className={styles.buttons}>
        <a href="/CV-LIMACHE Adrien.pdf" download>
          <button className={styles.button}>📄 Télécharger mon CV</button>
        </a>
        <Link href="/projets">
          <button className={styles.button}>📁 Voir mes projets</button>
        </Link>
        <Link href="/contact">
          <button className={styles.button}>📞 Me contacter</button>
        </Link>
      </div>
    </div>
  );
}
