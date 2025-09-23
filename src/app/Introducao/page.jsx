"use client";

import styles from "./Introducao.module.css";
import { Button, Card } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.backgroundGradient}>
      <Card hoverable className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/estrelaguia.png"
            alt="Logo do Estrela Guia"
            fill
            className={styles.image}
            priority
          />
        </div>

        <h2 className={styles.textTitle}>Bem-vindo ao</h2>
        <h2 className={styles.textTitle}>Estrela Guia ✯</h2>

        <p className={styles.text}>
          Em cada viagem, existe um ponto de partida. Um sonho, um desejo, uma direção.  
          Estrela Guia nasce para ser essa luz no horizonte.  
          <br /><br />
          Descubra. Sinta. Viva.  
          <br />
          Deixe a sua estrela te guiar.
        </p>

        <Link href="/Apiinfo" passHref>
          <Button
            type="primary"
            className={styles.customButton}
            style={{ marginTop: 16, width: "100%" }}
            aria-label="Acessar página de perfil"
          >
            Acessar
          </Button>
        </Link>
      </Card>
    </div>
  );
}
