"use client";
import styles from "./page.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [activeSection, setActiveSection] = useState(null);
  const [hoveredSection, setHoveredSection] = useState(null);

  useEffect(() => {
    document.body.style.background = "linear-gradient(135deg, #1f1c2c, #928dab)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.margin = "0";
    document.body.style.padding = "0";

    return () => {
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
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{
            opacity: hoveredSection && hoveredSection !== "formations" ? 0.5 : 1,
            scale: hoveredSection === "formations" ? 1.1 : 1
          }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => setHoveredSection("formations")}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <h2>🎓 Formations</h2><br />
          <ul className={styles.listeSansPoint}>
            <li><strong>3ème Année de Licence Informatique(ISEI)</strong> - Univeersité Paris8 (2024 - 2025)</li><br />
            <li><strong>BUT GEII (Génie électrique et informatique industrielle)</strong> - L'IUT CERGY-PARIS (2022 - 2024)</li><br />
            <li><strong>Licence Droit</strong> - Université Paris-Saclay (2020 - 2022)</li>
          </ul>
        </motion.section>

        {/* Compétences */}
        <motion.section 
          className={`${styles.section} ${activeSection?.id === "competences" ? styles.activeSection : ""}`} 
          id="competences"
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{
            opacity: hoveredSection && hoveredSection !== "competences" ? 0.5 : 1,
            scale: hoveredSection === "competences" ? 1.1 : 1
          }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => setHoveredSection("competences")}
          onMouseLeave={() => setHoveredSection(null)}
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
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{
            opacity: hoveredSection && hoveredSection !== "experiences" ? 0.5 : 1,
            scale: hoveredSection === "experiences" ? 1.1 : 1
          }}
          transition={{ duration: 0.3 }}
          onMouseEnter={() => setHoveredSection("experiences")}
          onMouseLeave={() => setHoveredSection(null)}
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
