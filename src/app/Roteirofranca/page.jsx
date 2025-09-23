'use client';
import styles from './Roteirofranca.module.css';

const roteiroFranca = [
  {
    dia: 'Dia 1–3',
    destino: 'Paris',
    atividades: [
      'Torre Eiffel e passeio pelo Rio Sena',
      'Museu do Louvre e Jardim das Tulherias',
      'Catedral de Notre-Dame e bairro Le Marais',
      'Show de cabaré no Moulin Rouge ou jantar em Montmartre',
    ],
    gastronomia: 'Croissants, macarons, queijos e vinhos franceses',
    hospedagem: 'Hotel boutique em Saint-Germain ou Marais',
    deslocamento: 'Chegada internacional pelo Aeroporto Charles de Gaulle (CDG)',
  },
  {
    dia: 'Dia 4–6',
    destino: 'Versalhes e arredores',
    atividades: [
      'Palácio de Versalhes e Galeria dos Espelhos',
      'Passeio pelos jardins e fontes de Versalhes',
      'Castelo de Fontainebleau — arte e história real',
    ],
    gastronomia: 'Cozinha francesa clássica, pâtisserie e vinhos locais',
    hospedagem: 'Hotel em Versalhes ou pousada nos arredores',
    deslocamento: 'Trem RER C de Paris (40 min)',
  },
  {
    dia: 'Dia 7–10',
    destino: 'Vale do Loire',
    atividades: [
      'Castelo de Chambord — arquitetura renascentista',
      'Castelo de Chenonceau — sobre o Rio Cher',
      'Degustação de vinhos em vinícolas locais',
      'Passeio de bicicleta entre vilarejos e vinhedos',
    ],
    gastronomia: 'Vinhos do Loire, foie gras, pratos regionais',
    hospedagem: 'Château-hotel ou pousada rural',
    deslocamento: 'Trem de Paris para Tours (1h30) + carro alugado',
  },
];

export default function RoteiroFranca() {
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
          <h1>🇫🇷 Roteiro de 10 Dias pela França</h1>
          <p>
            Uma viagem romântica e cultural por Paris, Versalhes e os castelos encantados do Vale do Loire. Ideal para quem busca história, arte, gastronomia e paisagens de conto de fadas.
          </p>
        </section>

        <section className={styles.cards}>
          {roteiroFranca.map((dia, index) => (
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
