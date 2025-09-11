import React from 'react';
import styles from './Roteiro.module.css';

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
            <li><a href="/servicos">Roteiro</a></li>
            <li><a href="/contato">Gastronomia</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </nav>
      </header>
      
      <footer className={styles['homepage-footer']}>
        <p>&copy; 2025 Estrela Guia. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default HomePage;