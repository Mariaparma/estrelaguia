'use client';
import styles from './Roteirocanada.module.css';

const roteiroCanada = [
  {
    dia: 'Dia 1–3',
    destino: 'Toronto',
    atividades: [
      'CN Tower — vista panorâmica da cidade',
      'Ripley’s Aquarium — túnel de vidro com tubarões',
      'Distillery District — cafés e galerias em prédios históricos',
      'Ilhas de Toronto — passeio de barco e natureza',
    ],
    gastronomia: 'Sushi, poutine, brunch canadense',
    hospedagem: 'Hotel no centro ou região de Yorkville',
    deslocamento: 'Chegada internacional pelo Aeroporto Pearson (YYZ)',
  },
  {
    dia: 'Dia 4–6',
    destino: 'Niagara Falls',
    atividades: [
      'Cataratas do Niágara — passeio de barco “Maid of the Mist”',
      'Niagara-on-the-Lake — vinícolas e charme colonial',
    ],
    gastronomia: 'Vinhos locais, frutos do mar, culinária de bistrô',
    hospedagem: 'Hotel com vista para as cataratas ou pousada em Niagara-on-the-Lake',
    deslocamento: 'Carro ou ônibus turístico (1h30 de Toronto)',
  },
  {
    dia: 'Dia 7–10',
    destino: 'Vancouver',
    atividades: [
      'Stanley Park — trilhas e vistas costeiras',
      'Granville Island — mercado público e arte local',
      'Capilano Suspension Bridge — ponte suspensa na floresta',
    ],
    gastronomia: 'Salmão selvagem, comida asiática, cervejas artesanais',
    hospedagem: 'Hotel em Downtown Vancouver ou Gastown',
    deslocamento: 'Voo doméstico de Toronto (5h)',
  },
  {
    dia: 'Dia 11–15',
    destino: 'Montanhas Rochosas',
    atividades: [
      'Banff National Park — lagos turquesa e trilhas alpinas',
      'Lake Louise — canoagem e paisagens de cartão-postal',
      'Jasper National Park — vida selvagem e glaciares',
    ],
    gastronomia: 'Cozinha de montanha, carnes grelhadas, chocolate quente',
    hospedagem: 'Lodge ou hotel em Banff, Lake Louise ou Jasper',
    deslocamento: 'Carro alugado ou ônibus turístico a partir de Calgary',
  },
];

export default function RoteiroCanada() {
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
          <h1>🇨🇦 Roteiro de 15 Dias pelo Canadá</h1>
          <p>
            Uma jornada entre natureza selvagem, cidades modernas e experiências culturais únicas. Ideal para quem busca paisagens deslumbrantes e diversidade urbana.
          </p>
        </section>

        <section className={styles.cards}>
          {roteiroCanada.map((dia, index) => (
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
