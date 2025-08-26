"use client";
import styles from "./Home.module.css";
import { Button, Card, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import Perfil  from "../Perfil/Perfil";

export default function Home() {
  return (
    <div className={styles.backgroundGradient}>
      <Card hoverable className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            src="/images/estrelaguia.png"
            alt="Foto da Logo do Estrela Guia"
            fill
            className={styles.image}
            priority
          />
        </div>
        <h2 className={styles.textTitle}>Bem-vindo ao</h2>
         <h2 className={styles.textTitle}>Estrela Guia✯!</h2>
        <ul className={styles.text}>
          <li>
           Em cada viagem, existe um ponto de partida. Um sonho, um desejo, uma direção.
Estrela Guia nasce para ser essa luz no horizonte 

Descubra. Sinta. Viva.
Deixe a sua estrela te guiar.
          </li>
        </ul>
        <Link href="/Perfil" prefetch>
        <Button
  type="primary"
  className={styles.customButton}
  style={{ marginTop: 16, width: "100%" }}
>
  Acessar 
</Button>
        </Link>
      </Card>
    </div>
  );
}