import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* En-tête */}
        <h1 className={styles.title}>Bienvenue sur mon Portfolio</h1>
        <p className={styles.description}>
          Je suis étudiant en 3ème année d'informatique à l'Université Paris8 et je suis passionné par le développement.<br /><br /> 
          Découvrez mes projets et mon parcours !
        </p>

        {/* Bouton Télécharger CV */}
        <a 
          href="/CV-LIMACHE Adrien.pdf" 
          download 
          className={styles.cvButton}
        >
          📄 Télécharger mon CV
        </a>

        {/* Liens vers les sections importantes */}
        <div className={styles.links}>
          <a href="/projets" className={styles.link}>📁 Voir mes projets</a>
          <a href="/contact" className={styles.link}>📞 Me contacter</a>
        </div>
      </main>
    </div>
  );
}
