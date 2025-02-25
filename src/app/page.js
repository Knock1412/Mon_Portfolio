"use client";
import styles from "./page.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const [activeSection, setActiveSection] = useState(null);
  const [hoveredSection, setHoveredSection] = useState(null);
  const {scrollY} = useScroll();
  const y = useTransform(scrollY, [0,300], [0, -100]);

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

  const skills = [
    "Next.js / Vercel",
    "Python",
    "C / C++",
    "Développement Mobile (Kotlin, LibGDX)",
    "Git / GitHub",
    "PhP / MySQL"
  ];

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.parallax}
        style=
        {{      y,
          background: "linear-gradient(135deg, #1f1c2c, #928dab)",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          width: "100%",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <h1 className={styles.title}>Bienvenue sur mon Portfolio</h1>
      <p className={styles.subtitle}>Étudiant informatique passionné par la création de logiciels et d'applications.</p>

      <div className={styles.sections}>
        {/* Formation */}
        <motion.section 
          className={`${styles.section} ${activeSection?.id === "formations" ? styles.activeSection : ""}`} 
          id="formations"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onMouseEnter={() => setHoveredSection("formations")}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <h2>🎓 Formations</h2><br />
          <ul className={styles.listeSansPoint}>
            <li><strong>3ème Année de Licence Informatique(ISEI)</strong> - Université Paris8 (2024 - 2025)</li><br />
            <li><strong>BUT GEII (Génie électrique et informatique industrielle)</strong> - L'IUT CERGY-PARIS (2022 - 2024)</li><br />
            <li><strong>Licence Droit</strong> - Université Paris-Saclay (2020 - 2022)</li>
          </ul>
        </motion.section>

        {/* Compétences */}
        <motion.section 
          className={`${styles.section} ${activeSection?.id === "competences" ? styles.activeSection : ""}`} 
          id="competences"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onMouseEnter={() => setHoveredSection("competences")}
          onMouseLeave={() => setHoveredSection(null)}
        >
          <h2>💡 Compétences</h2><br />
          <ul className={`${styles.skills} ${styles.listeSansPoint}`}>
            {skills.map((skill, index) => (
              <motion.li 
                key={index} 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: index * 0.1 }}
              >
                {skill}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Expériences */}
        <motion.section 
          className={`${styles.section} ${activeSection?.id === "experiences" ? styles.activeSection : ""}`} 
          id="experiences"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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

      <div className={styles.buttons}>
        <a href="/CV-LIMACHE Adrien.pdf" download>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={styles.button}>
            📄 Télécharger mon CV
          </motion.button>
        </a>
        <Link href="/projets">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={styles.button}>
            🚀 Voir mes projets
          </motion.button>
        </Link>
        <Link href="/contact">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={styles.button}>
            📞 Me contacter
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
