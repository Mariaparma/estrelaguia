import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles['homepage-header']}>
      <div className={styles['logo-container']}>
        <img src="/icons/estrelaguia.png" alt="Estrela Guia Logo" className={styles.logo} />
      </div>
      <nav>
        <ul className={styles['nav-menu']}>
          <li><a href="/Entidade">Países</a></li>
          <li><a href="/Roteiro">Roteiro</a></li>
          <li><a href="/Gastronomia">Gastronomia</a></li>
          <li><a href="/Home">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
