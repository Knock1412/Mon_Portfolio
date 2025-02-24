"use client";
import styles from "./projets.module.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Projets() {
  const [hoveredProject, setHoveredProject] = useState(null);

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

  const projects = [
    { title: "Jeu 3D en Python", description: "Un jeu en 3D inspiré de Minecraft, développé avec Ursina.", link: "https://github.com/Knock1412/Projet-MINECUBE" },
    { title: "Jeu Mobile Android", description: "Un jeu mobile inspiré de Jetpack Joyride, codé en Kotlin avec LibGDX.", link: "https://github.com/Knock1412/ProjetAdroid_Runner/tree/master" },
    { title: "Arduino_Data", description: "Système de capteur connecté avec Arduino et base de données MySQL.", link: "https://github.com/Knock1412/Arduino_data/tree/Arduino_datav1" },
    { title: "Portfolio Web", description: "Création d'un portfolio interactif avec Next.js et React.", link: "https://github.com/Knock1412/Mon_Portfolio" }
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🚀 Mes Projets</h1>
      <p className={styles.subtitle}>
        Voici quelques projets que j'ai réalisés au cour de mon Année académique.
      </p>

      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`${styles.projectCard} ${hoveredProject !== null && hoveredProject !== index ? styles.blurred : ""}`}
            onMouseEnter={() => setHoveredProject(index)}
            onMouseLeave={() => setHoveredProject(null)}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>GitHub ➜</a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
