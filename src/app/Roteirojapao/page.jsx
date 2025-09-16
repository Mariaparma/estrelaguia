'use client';
import styles from './RoteiroJapao.module.css';

const roteiroJapao = [
  {
    dia: 'Dia 1–2',
    destino: 'Tóquio',
    atividades: [
      'Templo Senso-ji em Asakusa',
      'Cruzamento de Shibuya e bairro Harajuku',
      'Tokyo Skytree ou Tokyo Tower',
      'Noite em Shinjuku ou Roppongi',
    ],
    gastronomia: 'Sushi no mercado Toyosu, ramen em Ichiran, doces em Takeshita Street',
    hospedagem: 'Hotel em Shinjuku ou Ueno',
    deslocamento: 'Chegada internacional por Narita ou Haneda',
  },
  {
    dia: 'Dia 3–4',
    destino: 'Hakone',
    atividades: [
      'Passeio de barco no Lago Ashi com vista do Monte Fuji',
      'Teleférico até Owakudani (área vulcânica)',
      'Banho em onsen tradicional',
    ],
    gastronomia: 'Kaiseki em ryokan',
    hospedagem: 'Ryokan com onsen',
    deslocamento: 'Trem expresso de Tóquio (Odakyu Line)',
  },
  {
    dia: 'Dia 5–6',
    destino: 'Kyoto',
    atividades: [
      'Templo Kinkaku-ji (Pavilhão Dourado)',
      'Fushimi Inari Taisha (milhares de torii vermelhos)',
      'Floresta de bambus em Arashiyama',
      'Distrito de Gion (gueixas)',
    ],
    gastronomia: 'Matcha, yudofu, doces wagashi',
    hospedagem: 'Pousada tradicional em Gion ou Kawaramachi',
    deslocamento: 'Trem bala (Shinkansen) de Hakone via Odawara',
  },
  {
    dia: 'Dia 7–8',
    destino: 'Nara e Osaka',
    atividades: [
      'Templo Todai-ji e cervos no Parque de Nara',
      'Castelo de Osaka e mirante Umeda Sky Building',
      'Compras e comida de rua em Dotonbori',
    ],
    gastronomia: 'Takoyaki, okonomiyaki, kushikatsu',
    hospedagem: 'Hotel em Namba ou Umeda',
    deslocamento: 'Trem local de Kyoto (30–60 min)',
  },
  {
    dia: 'Dia 9–10',
    destino: 'Hiroshima e Miyajima',
    atividades: [
      'Memorial da Paz e Museu da Bomba Atômica',
      'Santuário flutuante de Itsukushima em Miyajima',
      'Passeio de barco e trilha até o Monte Misen',
    ],
    gastronomia: 'Okonomiyaki estilo Hiroshima, ostras grelhadas',
    hospedagem: 'Hotel em Hiroshima ou ryokan em Miyajima',
    deslocamento: 'Shinkansen de Osaka (2h)',
  },
];

export default function RoteiroJapao() {
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
          <h1>🇯🇵 Roteiro de 10 Dias pelo Japão</h1>
          <p>
            Uma jornada inesquecível por templos milenares, cidades futuristas, paisagens naturais e sabores únicos. Ideal para quem quer explorar o Japão com profundidade e diversidade.
          </p>
        </section>

        <section className={styles.cards}>
          {roteiroJapao.map((dia, index) => (
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
