"use client";

import { useState, useEffect } from "react";
import styles from "./contact.module.css";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Message envoyé !");
      e.target.reset();
    } else {
      alert("Erreur d'envoi !");
    }

    setLoading(false);
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>📩 Me Contacter</h1>
      <div className={styles.card}>
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
      </div>

      <div className={styles.links}>
        <p><Mail size={18} /> Email : adrien.limache@etud.univ-paris8.fr</p>
        <p><Github size={18} /> GitHub : <a href="https://github.com/Knock1412" target="_blank" rel="noopener noreferrer">Mon GitHub</a></p>
        <p><Linkedin size={18} /> LinkedIn : <a href="https://www.linkedin.com/in/adrien-limache-65273825a/" target="_blank" rel="noopener noreferrer">Mon LinkedIn</a></p>
      </div>
    </div>
  );
}
