import styles from "./projets.module.css";

const projects = [
  {
    title: "Projet Arduino - Capteur Ultrason",
    description: "Un projet utilisant un capteur ultrason et la gestion des mesures dans une base de donnée.",
    github: "https://github.com/Knock1412/Arduino_data/tree/Arduino_datav1", // Remplace avec ton vrai lien
  },
  {
    title: "Jeu 3D en Python",
    description: "Un jeu en 3D inspiré de Minecraft, développé avec Ursina.",
    github: "https://github.com/Knock1412/Projet-MINECUBE",
  },
  {
    title: "Application Android - Jetpack Joyride",
    description: "Un jeu mobile inspiré de Jetpack Joyride, codé en Kotlin avec LibGDX.",
    github: "https://github.com/Knock1412/ProjetAdroid_Runner/tree/master",
  }
];

export default function Projets() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>📂 Mes Projets</h1>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <p className={styles.projectDescription}>{project.description}</p>
            <a 
              href={project.github} 
              className={styles.githubButton} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              🔗 Voir sur GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
