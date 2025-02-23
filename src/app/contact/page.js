"use client"; // Ajoute ceci en haut du fichier si tu es en app router Next.js
import { useState } from "react";
import styles from "./contact.module.css";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message envoyé !");
      e.target.reset(); // Réinitialise le formulaire
    } else {
      alert("Erreur d'envoi !");
    }

    setLoading(false);
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>📩 Me Contacter</h1>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <label>
          Nom :
          <input type="text" name="name" required />
        </label>
        <label>
          Email :
          <input type="email" name="email" required />
        </label>
        <label>
          Message :
          <textarea name="message" rows="5" required></textarea>
        </label>
        <button type="submit" className={styles.button} disabled={loading}>
          {loading ? "Envoi en cours..." : "Envoyer"}
        </button>
      </form>

      <div className={styles.links}>
        <p>📧 Email : adrien.limache@etud.univ-paris8.fr</p>
        <p>🔗 GitHub : <a href="https://github.com/Knock1412" target="_blank">Mon GitHub</a></p>
        <p>💼 LinkedIn : <a href="https://www.linkedin.com/in/adrien-limache-65273825a/" target="_blank">Mon LinkedIn</a></p>
      </div>
    </div>
  );
}
