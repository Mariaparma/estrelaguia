'use client';
import styles from './RoteiroMarrocos.module.css';

const roteiroMarrocos = [
  {
    dia: 'Dia 1–2',
    destino: 'Marrakech',
    atividades: [
      'Palácio Bahia — salões com azulejos e jardins internos',
      'Jardim Majorelle — refúgio botânico criado por Jacques Majorelle',
      'Exploração da Medina e dos souks — mercados tradicionais',
    ],
    gastronomia: 'Msemen, tâmaras, chá de menta, tajine de cordeiro',
    hospedagem: 'Riad tradicional na Medina com café da manhã',
    deslocamento: 'Chegada internacional pelo Aeroporto Menara (RAK)',
  },
  {
    dia: 'Dia 3–4',
    destino: 'Deserto do Saara (Merzouga)',
    atividades: [
      'Passeio de camelo pelas dunas de Erg Chebbi',
      'Noite em acampamento berbere sob as estrelas',
      'Trilha em 4x4 pelas paisagens áridas do Saara',
    ],
    gastronomia: 'Cuscuz marroquino, pão assado na areia, chá de especiarias',
    hospedagem: 'Tenda berbere ou acampamento de luxo',
    deslocamento: 'Transfer privado ou tour guiado de Marrakech (8h)',
  },
  {
    dia: 'Dia 5–6',
    destino: 'Ait Ben Haddou e Ouarzazate',
    atividades: [
      'Visita à cidade fortificada de Ait Ben Haddou (Patrimônio da UNESCO)',
      'Estúdios de cinema em Ouarzazate — cenário de filmes famosos',
      'Paisagens do Atlas e vilarejos berberes',
    ],
    gastronomia: 'Tajine de frango com limão, harira, doces de amêndoa',
    hospedagem: 'Hotel kasbah ou pousada com vista para o vale',
    deslocamento: 'Carro ou tour guiado desde Merzouga (via estrada panorâmica)',
  },
  {
    dia: 'Dia 7',
    destino: 'Retorno a Marrakech',
    atividades: [
      'Relaxamento em hammam tradicional',
      'Últimas compras nos souks e visita à Praça Jemaa el-Fna',
    ],
    gastronomia: 'Pastilla de frango, sucos naturais, doces marroquinos',
    hospedagem: 'Riad ou hotel boutique',
    deslocamento: 'Retorno por estrada (5h) ou voo interno de Ouarzazate',
  },
];

export default function RoteiroMarrocos() {
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
          <h1>🇲🇦 Roteiro de 7 Dias pelo Marrocos</h1>
          <p>
            Uma jornada entre palácios históricos, mercados vibrantes, paisagens desérticas e tradições berberes. Ideal para quem busca cultura, aventura e sabores exóticos.
          </p>
        </section>

        <section className={styles.cards}>
          {roteiroMarrocos.map((dia, index) => (
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
