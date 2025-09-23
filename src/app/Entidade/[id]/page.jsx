"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { Spin, Card } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../Entidade.module.css";

export default function DetalhesPais() {
  const params = useParams();
  const router = useRouter();
  const idParam = params?.id;  

  const [pais, setPais] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("ID param vindo da URL:", idParam);
    if (idParam) {
      fetchPais(idParam);
    } else {
      toast.error("ID inválido na rota!");
      setLoading(false);
    }
  }, [idParam]);

  const fetchPais = async (id) => {
    try {
      const response = await axios.get("https://api.sampleapis.com/countries/countries");
      const todos = response.data;
      console.log("Dados da API:", todos.slice(0,5)); 

      const encontrado = todos.find((item) => {
        if (!item) return false;
        const idStr = item.id !== undefined && item.id !== null ? String(item.id) : null;
        const abbr = item.abbreviation ? String(item.abbreviation) : null;
        const name = item.name ? String(item.name) : null;

        const idParamLower = String(id).toLowerCase();
        if (idStr && idStr === idParamLower) return true;
        if (abbr && abbr.toLowerCase() === idParamLower) return true;
        if (name && name.toLowerCase() === idParamLower) return true;

        return false;
      });

      if (encontrado) {
        console.log("País encontrado:", encontrado);
        setPais(encontrado);
      } else {
        console.log("Nenhum país encontrado com esse id/abbreviation/nome");
        toast.error("País não encontrado!");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      toast.error("Erro ao buscar dados do país.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className={styles.loadingWrapper}>
        <Spin size="large" />
        <p className={styles.loadingText}>Carregando detalhes...</p>
      </div>
    );
  }

  if (!pais) {
    return (
      <div className={styles.container}>
        <h2>País não encontrado.</h2>
        <button onClick={() => router.push("/entidade")} className={styles.backButton}>
          ← Voltar à lista
        </button>
        <button onClick={() => router.push("/")} className={styles.backButton}>
          Voltar ao início
        </button>
        <ToastContainer />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Card className={styles.userCard}>
        <img
          src={pais.media?.flag || "/default-flag.png"}
          alt={`Bandeira de ${pais.name}`}
          className={styles.flag}
          onError={(e) => { e.target.src = "/default-flag.png"; }}
        />
        <h2>{pais.name || "Nome indisponível"}</h2>
        <div className={styles.details}>
          {pais.capital && <p><strong>Capital:</strong> {pais.capital}</p>}
          {pais.currency && <p><strong>Moeda:</strong> {pais.currency}</p>}
          {pais.abbreviation && <p><strong>Abreviação:</strong> {pais.abbreviation}</p>}
          {pais.phone && <p><strong>DDI:</strong> +{pais.phone}</p>}
          {pais.population !== undefined && (
            <p><strong>População:</strong> {pais.population.toLocaleString()}</p>
          )}
          {pais.media?.emblem && (
            <div className={styles.imageBlock}>
              <p><strong>Emblema:</strong></p>
              <img src={pais.media.emblem} alt={`Emblema de ${pais.name}`} className={styles.image} onError={(e) => { e.target.src = "/default-flag.png"; }} />
            </div>
          )}
          {pais.media?.orthographic && (
            <div className={styles.imageBlock}>
              <p><strong>Mapa:</strong></p>
              <img src={pais.media.orthographic} alt={`Mapa de ${pais.name}`} className={styles.image} onError={(e) => { e.target.src = "/default-flag.png"; }} />
            </div>
          )}
        </div>
      </Card>

      <div className={styles.buttonGroup}>
        <button onClick={() => router.push("/entidade")} className={styles.backButton}>
          ← Voltar à lista
        </button>
        <button onClick={() => router.push("/")} className={styles.backButton}>
          Voltar ao início
        </button>
      </div>

      <ToastContainer />
    </div>
  );
}
