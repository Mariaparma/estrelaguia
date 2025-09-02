"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Pagination, Spin, Card } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Paises.module.css";

export default function Paises() {
  const [paises, setPaises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [aberto, setAberto] = useState({});

  // Busca os países ao carregar
  useEffect(() => {
    fetchPaises();
  }, []);

  const fetchPaises = async () => {
    try {
      const response = await axios.get("https://api.sampleapis.com/countries/countries");
      setPaises(response.data);
      toast.success("Países carregados com sucesso!", {
        toastId: "success-load",
      });
    } catch (error) {
      console.error("Erro ao buscar países:", error);
      toast.error("Erro ao carregar países.", {
        toastId: "error-load",
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleCard = (id) => {
    setAberto((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Paginação
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentCountries = paises.slice(startIndex, endIndex);

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

      {loading ? (
        <div className={styles.loadingWrapper}>
          <Spin size="large" />
          <p className={styles.loadingText}>Carregando países...</p>
        </div>
      ) : (
        <>
          <div className={styles.controlsWrapper}>
            <Pagination
              total={paises.length}
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
            {currentCountries.map((pais) => (
              <Card
                key={pais.id}
                className={styles.userCard}
                hoverable
                onClick={() => toggleCard(pais.id)}
              >
                <div className={styles.cardContent}>
                  <img
                    src={pais.media?.flag}
                    alt={`Bandeira de ${pais.name}`}
                    className={styles.flag}
                  />
                  <h3 className={styles.userName}>{pais.name}</h3>

                  {aberto[pais.id] && (
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
                          <img
                            src={pais.media.emblem}
                            alt={`Emblema de ${pais.name}`}
                            className={styles.image}
                          />
                        </div>
                      )}
                      {pais.media?.orthographic && (
                        <div className={styles.imageBlock}>
                          <p><strong>Mapa:</strong></p>
                          <img
                            src={pais.media.orthographic}
                            alt={`Mapa de ${pais.name}`}
                            className={styles.image}
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </>
      )}

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
