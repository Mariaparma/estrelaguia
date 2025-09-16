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
  const [busca, setBusca] = useState("");

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

  
  const normalizar = (texto) =>
    texto?.toString().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();


  const paisesFiltrados = paises.filter((pais) => {
    const termo = normalizar(busca);

    return (
      normalizar(pais.name).includes(termo) ||
      normalizar(pais.capital).includes(termo) ||
      normalizar(pais.currency).includes(termo) ||
      normalizar(pais.abbreviation).includes(termo) ||
      pais.phone?.toString().includes(termo) ||
      pais.population?.toString().includes(termo)
    );
  });

  // Paginação
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
        placeholder="Procure aqui..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className={styles.searchInput}
      />

      <div className={styles.divider}>
        <h1>Nessa barra de pesquisa você consegue encontrar imformações pelo </h1>
        <h1> nome de países, capital, moeda, abreviação, DDI e população.</h1>
      </div>
      
    

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
            {currentCountries.map((pais) => (
              <Card
                key={pais.id || `${pais.name}-${pais.abbreviation}`}
                className={styles.userCard}
                hoverable
                onClick={() => toggleCard(pais.id)}
              >
                <div className={styles.cardContent}>
                  <img
                    src={pais.media?.flag || "/default-flag.png"}
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
