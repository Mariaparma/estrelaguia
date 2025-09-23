'use client';
import styles from './Roteiroitalia.module.css';

const roteiroItalia = [
  {
    dia: 'Dia 1–3',
    destino: 'Roma',
    atividades: [
      'Coliseu, Fórum Romano e Palatino',
      'Fontana di Trevi e Pantheon',
      'Museus do Vaticano e Capela Sistina',
      'Jantar em Trastevere e gelato na Giolitti',
    ],
    gastronomia: 'Pasta carbonara, pizza romana, tiramisu',
    hospedagem: 'Hotel no centro histórico ou Trastevere',
    deslocamento: 'Chegada internacional pelo Aeroporto Fiumicino (FCO)',
  },
  {
    dia: 'Dia 4–5',
    destino: 'Florença',
    atividades: [
      'Catedral Santa Maria del Fiore e Piazza del Duomo',
      'Ponte Vecchio e Galleria Uffizi',
      'Bate-volta para Pisa e Torre Inclinada',
    ],
    gastronomia: 'Bistecca alla fiorentina, vinhos Chianti, cantucci com vin santo',
    hospedagem: 'Trattoria ou hotel boutique no centro',
    deslocamento: 'Trem de alta velocidade de Roma (1h30)',
  },
  {
    dia: 'Dia 6–7',
    destino: 'Veneza',
    atividades: [
      'Praça de São Marcos, Basílica e Palácio Ducal',
      'Passeio de gôndola ao pôr do sol',
      'Exploração das ilhas Murano e Burano',
    ],
    gastronomia: 'Risoto de frutos do mar, cicchetti, prosecco',
    hospedagem: 'Hotel à beira dos canais ou em Dorsoduro',
    deslocamento: 'Trem de Florença (2h)',
  },
];

export default function RoteiroItalia() {
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
          <h1>🇮🇹 Roteiro de 7 Dias pela Itália</h1>
          <p>
            Uma viagem inesquecível por cidades que são verdadeiros museus a céu aberto. Roma, Florença e Veneza oferecem arte, história, romance e sabores que definem a essência italiana.
          </p>
        </section>

        <section className={styles.cards}>
          {roteiroItalia.map((dia, index) => (
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
