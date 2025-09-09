import React from 'react';
import styles from './Apiinfo.module.css';

const HomePage = () => {
  return (
    <div className={`${styles.global} ${styles.homepage}`}>
      <header className={styles['homepage-header']}>
        <div className={styles['logo-container']}>
          <img src="/icons/estrelaguia.png" alt="Estrela Guia Logo" className={styles.logo} />
        </div>
        <nav>
          <ul className={styles['nav-menu']}>
            <li><a href="/Paises">Países</a></li>
            <li><a href="/servicos">Serviços</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </nav>
      </header>
      <main className={styles['homepage-main']}>
        <section className="intro">
        <h3>Bem-vindo ao Estrela Guia</h3>
        <p>Descubra conteúdos incríveis e explore novas possibilidades.</p>
        </section>
        <section className={styles.cards}>
          <div className={styles.card}>
            <div className={styles['card-image-container']}>
              <img src="/images/destino.png" alt="Imagem Genérica" className={styles['card-image']} />
            </div>
            <div className={styles['card-content']}>
              <h4 className={styles['card-title']}>Explore o melhor país pra você fazer sua viagem dos sonhos </h4>
              <h4 className={styles['card-title']}>Descubra a população, moeda, localização e entre outros... </h4>
              <a href="/Paises" className={styles['card-button']}>Descubra Mais</a>
            </div>
            
            <div className={styles['card-image-container']}>
              <img src="/images/destino2.png" alt="Imagem Genérica" className={styles['card-image']} />
            </div>

            <div className={styles['card-content']}>
              <h4 className={styles['card-title']}>Explore o melhor país pra você fazer sua viagem dos sonhos </h4>
              <h4 className={styles['card-title']}>Descubra a população, moeda, localização e entre outros... </h4>
              <a href="/Paises" className={styles['card-button']}>Descubra Mais</a>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles['homepage-footer']}>
        <p>&copy; 2025 Estrela Guia. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default HomePage;