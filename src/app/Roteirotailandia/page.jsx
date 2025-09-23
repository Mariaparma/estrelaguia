'use client';
import styles from './Roteirotailandia.module.css';

const roteiroTailandia = [
  {
    dia: 'Dia 1–2',
    destino: 'Bangkok',
    atividades: [
      'Grand Palace e Templo do Buda Esmeralda',
      'Wat Pho — Buda Reclinado',
      'Mercado noturno de Khao San Road',
    ],
    gastronomia: 'Pad Thai, curry verde, frutas tropicais',
    hospedagem: 'Hotel em Sukhumvit ou Riverside',
    deslocamento: 'Chegada internacional pelo Aeroporto Suvarnabhumi (BKK)',
  },
  {
    dia: 'Dia 3',
    destino: 'Ayutthaya',
    atividades: [
      'Ruínas históricas e templos como Wat Mahathat',
      'Passeio de barco pelo rio Chao Phraya',
    ],
    gastronomia: 'Comida de rua tailandesa e pratos locais',
    hospedagem: 'Pousada tradicional ou hotel boutique',
    deslocamento: 'Trem ou van de Bangkok (1h30)',
  },
  {
    dia: 'Dia 4–5',
    destino: 'Chiang Mai',
    atividades: [
      'Templo Wat Phra That Doi Suthep',
      'Mercado noturno e aula de culinária tailandesa',
      'Visita a santuário ético de elefantes',
    ],
    gastronomia: 'Khao Soi, sticky rice com manga, chás locais',
    hospedagem: 'Hotel nas montanhas ou no centro histórico',
    deslocamento: 'Voo doméstico de Bangkok (1h15)',
  },
  {
    dia: 'Dia 6–7',
    destino: 'Krabi e Ilhas Phi Phi',
    atividades: [
      'Praia Railay e passeio de barco pelas ilhas',
      'Snorkel e trilhas entre falésias',
    ],
    gastronomia: 'Frutos do mar grelhados, saladas picantes, sucos naturais',
    hospedagem: 'Resort à beira-mar ou bangalô ecológico',
    deslocamento: 'Voo de Chiang Mai para Krabi (via Bangkok)',
  },
];

export default function RoteiroTailandia() {
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
          <h1>🇹🇭 Roteiro de 7 Dias pela Tailândia</h1>
          <p>
            Uma jornada entre templos dourados, mercados vibrantes, santuários de elefantes e praias paradisíacas. Ideal para quem busca cultura, natureza e sabores exóticos.
          </p>
        </section>

        <section className={styles.cards}>
          {roteiroTailandia.map((dia, index) => (
            <div key={index} className={styles.card}>
              <h2>{dia.dia} — {dia.destino}</h2>
              <div className={styles.section}>
                <strong>Atividades:</strong>
                <ul>
                  {dia.atividades.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <p><strong>Gastronomia:</strong> {dia.gastronomia}</p>
              <p><strong>Hospedagem:</strong> {dia.hospedagem}</p>
              <p><strong>Deslocamento:</strong> {dia.deslocamento}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
