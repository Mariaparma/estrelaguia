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
          <h2>Descubra o melhor conteúdo</h2>
          <p>Explore nossos serviços e encontre o que você precisa para alcançar seus objetivos.</p>
        </section>
      </main>
      <footer className={styles['homepage-footer']}>
        <p>&copy; 2025 Estrela Guia. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default HomePage;