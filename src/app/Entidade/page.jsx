"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { Pagination, Spin, Card } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Entidade.module.css";

export default function Paises() {
  const [paises, setPaises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [busca, setBusca] = useState("");

  useEffect(() => {
    fetchPaises();
  }, []);

  const fetchPaises = async () => {
    try {
      const response = await axios.get("https://api.sampleapis.com/countries/countries");
      setPaises(response.data);
      toast.success("Países carregados com sucesso!", { toastId: "success-load" });
    } catch (error) {
      toast.error("Erro ao carregar países.", { toastId: "error-load" });
    } finally {
      setLoading(false);
    }
  };

  const normalizar = (texto) =>
    texto?.toString().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const paisesFiltrados = paises.filter((pais) => {
    const termo = normalizar(busca);
    return (
      (pais.name && normalizar(pais.name).includes(termo)) ||
      (pais.capital && normalizar(pais.capital).includes(termo))
    );
  });

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentCountries = paisesFiltrados.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (current, size) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lista de Países</h1>

      <input
        type="text"
        placeholder="Buscar por nome ou capital..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className={styles.searchInput}
      />

      {loading ? (
        <div className={styles.loadingWrapper}>
          <Spin size="large" />
          <p className={styles.loadingText}>Carregando países...</p>
        </div>
      ) : (
        <>
          <div className={styles.controlsWrapper}>
            <Pagination
              total={paisesFiltrados.length}
              showTotal={(total) => `Total ${total} países`}
              pageSize={pageSize}
              current={currentPage}
              showSizeChanger
              pageSizeOptions={["5", "10", "20"]}
              onChange={handlePageChange}
              onShowSizeChange={handlePageSizeChange}
            />
          </div>

          <div className={styles.cardsContainer}>
            {currentCountries.map((pais) => {
              const identificador =
                pais.id !== undefined && pais.id !== null
                  ? String(pais.id)
                  : pais.abbreviation
                  ? String(pais.abbreviation)
                  : null;

              return (
                <Card
                  key={identificador || pais.name}
                  className={styles.userCard}
                  hoverable
                >
                  <div className={styles.cardContent}>
                    <img
                      src={pais.media?.flag || "/default-flag.png"}
                      alt={`Bandeira de ${pais.name}`}
                      className={styles.flag}
                      onError={(e) => (e.target.src = "/default-flag.png")}
                    />

                    <h3 className={styles.userName}>{pais.name || "Nome indisponível"}</h3>

                    {pais.capital && <p><strong>Capital:</strong> {pais.capital}</p>}

                    {identificador ? (
                      <Link
                        href={`/Entidade/${encodeURIComponent(identificador)}`}
                        className={styles.detailsLink}
                      >
                        Ver detalhes →
                      </Link>
                    ) : (
                      <p className={styles.noDetails}>Detalhes indisponíveis</p>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </>
      )}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        pauseOnHover
      />
    </div>
  );
}
