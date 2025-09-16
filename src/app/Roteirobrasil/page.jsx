'use client';
import styles from './Roteirobrasil.module.css';

const roteiro = [
  {
    dia: 'Dia 1–2',
    destino: 'Rio de Janeiro, RJ',
    atividades: [
      'Cristo Redentor e Pão de Açúcar',
      'Praia de Ipanema + pôr do sol no Arpoador',
      'Centro histórico: Real Gabinete Português, Theatro Municipal',
    ],
    gastronomia: 'Feijoada no Bar do Mineiro e frutos do mar no Aprazível',
    deslocamento: 'Chegada direta por avião',
  },
  {
    dia: 'Dia 3–4',
    destino: 'Paraty, RJ',
    atividades: [
      'Passeio de escuna pelas ilhas',
      'Centro histórico e trilhas na Mata Atlântica',
      'Cachoeira do Tobogã e visita a alambiques',
    ],
    gastronomia: 'Moqueca caiçara e cachaça artesanal',
    deslocamento: 'Ônibus ou carro (4h do Rio)',
  },
  {
    dia: 'Dia 5–6',
    destino: 'Chapada Diamantina, BA',
    atividades: [
      'Trilha no Morro do Pai Inácio',
      'Cachoeira da Fumaça e Gruta da Lapa Doce',
      'Poço Azul com flutuação',
    ],
    gastronomia: 'Comida baiana regional: carne de sol, pirão, feijão verde',
    deslocamento: 'Voo para Salvador + ônibus para Lençóis',
  },
  {
    dia: 'Dia 7–8',
    destino: 'Fernando de Noronha, PE',
    atividades: [
      'Mergulho com tartarugas e golfinhos',
      'Praia do Sancho e Baía dos Porcos',
      'Trilha do Atalaia e pôr do sol no Boldró',
    ],
    gastronomia: 'Peixes frescos e pratos com banana-da-terra',
    deslocamento: 'Voo via Recife ou Natal',
  },
  {
    dia: 'Dia 9–10',
    destino: 'São Paulo, SP',
    atividades: [
      'Museu do Ipiranga, MASP e Japan House',
      'Beco do Batman e Parque Ibirapuera',
      'Tour gastronômico: pastel no Mercadão, café na Liberdade',
    ],
    gastronomia: 'Alta gastronomia brasileira: A Casa do Porco, Maní',
    deslocamento: 'Voo direto de Noronha',
  },
];

export default function PlanoBrasil() {
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
          <h1>🇧🇷 Plano de Viagem: Brasil em 10 Dias</h1>
          <p>
            Uma jornada inesquecível por cinco destinos brasileiros, combinando natureza, cultura e sabores únicos. Ideal para quem quer explorar o Brasil com intensidade e diversidade.
          </p>
        </section>

        <section className={styles.cards}>
          {roteiro.map((dia, index) => (
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
              <p><strong>Deslocamento:</strong> {dia.deslocamento}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
