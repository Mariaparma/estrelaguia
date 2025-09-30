"use client";

import { useState } from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styles from "./Home.module.css";

export default function Home() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setMessageSent(true);
        form.reset();
        setTimeout(() => setMessageSent(false), 5000);
      } else {
        alert("Ocorreu um erro. Tente novamente.");
      }
    } catch {
      alert("Ocorreu um erro. Tente novamente.");
    }
  };

  return (
    <main className={styles.container}>
      {/* Informações principais */}
      <section className={styles.infoSection}>
        <h2 className={styles.info}>Maria Eduarda da Silva Parma</h2>
        <h2 className={styles.info}>TDS1</h2>
        <h2 className={styles.info}>SENAI VALINHOS</h2>
      </section>

      {/* Foto */}
      <div className={styles.photo}>
        <Image
          src="/mariaparma.png"
          alt="Foto do aluno"
          width={220}
          height={220}
          className={styles.photoImg}
          priority
        />
      </div>

      {/* Frase inspiradora */}
      <p className={styles.quote}>
        “Só quem sonha consegue alcançar.” – Luan Santana
      </p>

      {/* Contatos */}
      <div className={styles.contacts}>
        <a
          href="https://www.instagram.com/_mahparma"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactLink}
        >
          <FaInstagram className={styles.icon} /> Instagram
        </a>
        <a
          href="https://www.linkedin.com/in/_mahparma"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactLink}
        >
          <FaLinkedin className={styles.icon} /> LinkedIn
        </a>
        <a
          href="https://github.com/mahparma"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactLink}
        >
          GitHub
        </a>
        <a
          href="mailto:mariaparma@email.com"
          className={styles.contactLink}
        >
          <FaEnvelope className={styles.icon} /> Email
        </a>
      </div>

      {/* Formulário de mensagens */}
      <div className={styles.messageBox}>
        <h3>📩 Mande uma mensagem</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            className={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu email"
            className={styles.input}
            required
          />
          <textarea
            name="message"
            placeholder="Escreva sua mensagem..."
            className={styles.textarea}
            required
          ></textarea>
          <button type="submit" className={styles.button}>
            Enviar
          </button>
        </form>

        {messageSent && (
          <p className={styles.successMessage}>
            ✅ Sua mensagem foi enviada com sucesso!
          </p>
        )}
      </div>
    </main>
  );
}