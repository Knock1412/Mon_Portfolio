import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenue sur mon Portfolio</h1>
      <p className={styles.subtitle}>
        Étudiant informatique passionné par la création de logiciels et d'applications.
      </p>

      <div className={styles.sections}>
        {/* Formation */}
        <section className={styles.section}>
          <h2>🎓 Formations </h2><br />
          <ul className={styles.listeSansPoint}>
            <li><strong>3ème Année Licence Informatique (ISEI)</strong> - Université Paris8 (2024-2025)</li><br />
            <li><strong>BUT GEII (Génie électrique et informatique industrielle)</strong> - L'IUT CERGY-PARIS (2022 - 2024)</li>
          </ul>
        </section>

        {/* Compétences */}
        <section className={styles.section}>
          <h2>💡 Compétences</h2><br />
          <ul className={`${styles.skills} ${styles.listeSansPoint}`}>
            <li>Next.js / React</li>
            <li>JavaScript / TypeScript</li>
            <li>Python / C++</li>
            <li>Développement Mobile (Kotlin, Jetpack Compose)</li>
            <li>Git / GitHub</li>
          </ul>
        </section>

        {/* Expériences */}
        <section className={styles.section}>
          <h2>💼 Expériences Professionnelles</h2><br />
          <ul className={styles.listeSansPoint}>
            <li><strong>Développeur Web</strong> - Stage chez XYZ (Été 2024)</li><br />
            <li><strong>Projet Android</strong> - Jeu mobile avec Jetpack Compose</li><br />
            <li><strong>Projet Arduino</strong> - Capteur ultrason avec MySQL & JpGraph</li>
          </ul>
        </section>
      </div>

      <div className={styles.buttons}>
        <a href="/CV-LIMACHE Adrien.pdf" download>
          <button className={styles.button}>📄 Télécharger mon CV</button>
        </a>
        <Link href="/projets">
          <button className={styles.button}>Voir mes projets 📁</button>
        </Link>
        <Link href="/contact">
          <button className={styles.button}>Me contacter 📞</button>
        </Link>
      </div>
    </div>
  );
}
