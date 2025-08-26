import Link from "next/link";
import React from "react";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.message}>Página não encontrada.</p>
        <Link href="/" className={styles.button}>
          Voltar para Home
        </Link>
      </div>
    </div>
  );
}