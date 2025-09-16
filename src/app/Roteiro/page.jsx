'use client';
import styles from './Roteiro.module.css';

const continentes = {
  América: [
    {
      pais: 'Brasil',
      imagem: 'https://i.pinimg.com/736x/60/a4/41/60a441e92c2ab28d715e99ee3a616b72.jpg',
      descricao: 'Explore o Rio de Janeiro, Amazônia e a cultura vibrante brasileira.',
      link: '/Roteirobrasil',
    },
    {
      pais: 'Canadá',
      imagem: 'https://i.pinimg.com/1200x/58/66/39/586639ad258db9d4ea96536f01b6be5d.jpg',
      descricao: 'Descubra lagos glaciais, florestas e cidades modernas como Toronto e Vancouver.',
       link: '/Roteirocanada',
    },
  ],
  Europa: [
    {
      pais: 'França',
      imagem: 'https://i.pinimg.com/736x/c9/f9/71/c9f97196a840c491609435e9a4b283d3.jpg',
      descricao: 'Roteiros românticos por Paris, vinhedos e castelos medievais.',
    },
    {
      pais: 'Itália',
      imagem: 'https://i.pinimg.com/1200x/ec/b8/89/ecb889f8e809934f5868a84cdf37ff36.jpg',
      descricao: 'Arte, história e gastronomia em Roma, Florença e Veneza.',
    },
  ],
  Ásia: [
    {
      pais: 'Japão',
      imagem: 'https://i.pinimg.com/736x/08/60/67/086067476addb6479f7be446d02d2d57.jpg',
      descricao: 'Templos, tecnologia e tradição em Tóquio, Kyoto e Osaka.',
      link: '/Roteirojapao',
    },
    {
      pais: 'Tailândia',
      imagem: 'https://i.pinimg.com/736x/91/ab/22/91ab2281edaad46dd43d245fccc3d9a0.jpg',
      descricao: 'Praias paradisíacas, templos budistas e culinária exótica.',
    },
  ],
  África: [
    {
      pais: 'Marrocos',
      imagem: 'https://i.pinimg.com/736x/ef/76/05/ef760512cc4b39da5b6cd80c9e63ee00.jpg',
      descricao: 'Mercados coloridos, desertos e arquitetura islâmica em Marrakech.',
    },
    {
      pais: 'África do Sul',
      imagem: 'https://i.pinimg.com/736x/bb/af/01/bbaf01c52567fbda291954a9302b5eed.jpg',
      descricao: 'Safáris, vinícolas e paisagens deslumbrantes em Cape Town.',
    },
  ],
  Oceania: [
    {
      pais: 'Austrália',
      imagem: 'https://i.pinimg.com/1200x/73/02/92/7302921d1a65a81a04f57181321a9b14.jpg',
      descricao: 'Praias, vida selvagem e cultura urbana em Sydney e Melbourne.',
    },
    {
      pais: 'Nova Zelândia',
      imagem: 'https://i.pinimg.com/1200x/04/56/45/0456456dc6255801746bec74a656aab8.jpg',
      descricao: 'Montanhas, lagos e aventuras ao ar livre em Queenstown e Rotorua.',
    },
  ],
};
export default function DescubraMais() {
  return (
    <div className={`${styles.global} ${styles.homepage}`}>
      <header className={styles['homepage-header']}>
        <div className={styles['logo-container']}>
          <img src="/icons/estrelaguia.png" alt="Estrela Guia Logo" className={styles.logo} />
        </div>
        <nav>
          <ul className={styles['nav-menu']}>
            <li><a href="/Paises">Países</a></li>
            <li><a href="/Roteiro">Roteiro</a></li>
            <li><a href="/contato">Gastronomia</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      <main className={styles.page}>
        <section className={styles.header}>
          <h1>Descubra os Melhores Destinos</h1>
          <p>
            Os roteiros estão organizados por continente. Cada país oferece uma experiência única — da natureza selvagem à cultura milenar, da gastronomia exótica à arquitetura deslumbrante.
          </p>
        </section>

        {Object.entries(continentes).map(([continente, paises]) => (
          <section key={continente} className={styles.continente}>
            <h2>{continente}</h2>
            <div className={styles.cards}>
              {paises.map((pais, index) => (
                <div key={index} className={styles.card}>
                  <img src={pais.imagem} alt={pais.nome} className={styles.image} />
                  <div className={styles.content}>
                    <h3>{pais.nome}</h3>
                    <p>{pais.descricao}</p>
                    <a href={pais.link} className={styles.button}>Ver Roteiro</a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}