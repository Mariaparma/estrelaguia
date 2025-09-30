"use client";

import styles from "./Gastronomia.module.css";
import { FaGlobeAmericas, FaUtensils, FaLeaf } from "react-icons/fa";

const continentes = [
  {
    nome: "África",
    pratos: ["Injera", "Tagine", "Jollof Rice"],
    ingredientes: ["Milho", "Mandioca", "Cordeiro", "Amendoim"],
    curiosidade: "Sabores intensos e técnicas ancestrais marcam a culinária africana.",
    cor: "#f39c12",
  },
  {
    nome: "América",
    pratos: ["Feijoada", "Tacos", "Ceviche", "Clam Chowder"],
    ingredientes: ["Milho", "Feijão", "Carne bovina", "Frutos do mar"],
    curiosidade: "Mistura de culturas indígenas, europeias e africanas.",
    cor: "#e74c3c",
  },
  {
    nome: "Ásia",
    pratos: ["Sushi", "Curry", "Pho", "Bibimbap"],
    ingredientes: ["Arroz", "Gengibre", "Soja", "Pimenta"],
    curiosidade: "Equilíbrio entre doce, salgado, azedo e picante.",
    cor: "#27ae60",
  },
  {
    nome: "Europa",
    pratos: ["Paella", "Pizza", "Goulash", "Ratatouille"],
    ingredientes: ["Trigo", "Azeite", "Queijos", "Ervas"],
    curiosidade: "Sofisticação e valorização de ingredientes locais.",
    cor: "#2980b9",
  },
  {
    nome: "Oceania",
    pratos: ["Meat Pie", "Hangi", "Lamington"],
    ingredientes: ["Cordeiro", "Batata-doce", "Peixes", "Coco"],
    curiosidade: "Mistura de tradições indígenas com influências britânicas.",
    cor: "#8e44ad",
  },
  {
    nome: "Antártida",
    pratos: ["Alimentos industrializados e congelados"],
    ingredientes: ["Comida enlatada", "Produtos importados"],
    curiosidade: "Não há culinária típica, mas cada base leva pratos de seu país.",
    cor: "#7f8c8d",
  },
];

export default function Gastronomia() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        <FaGlobeAmericas className={styles.icon} /> Gastronomia de Cada Continente
      </h1>

      <div className={styles.grid}>
        {continentes.map((c, index) => (
          <div key={index} className={styles.card} style={{ borderColor: c.cor }}>
            <h2 style={{ color: c.cor }}>{c.nome}</h2>
            <p>
              <FaUtensils /> <strong>Pratos típicos:</strong> {c.pratos.join(", ")}
            </p>
            <p>
              <FaLeaf /> <strong>Ingredientes comuns:</strong> {c.ingredientes.join(", ")}
            </p>
            <p><strong>Curiosidade:</strong> {c.curiosidade}</p>
          </div>
        ))}
      </div>
    </main>
  );
}