'use client';
import styles from './Roteiroafricadosul.module.css';

const roteiroAfricaDoSul = [
  {
    dia: 'Dia 1–2',
    destino: 'Johannesburgo',
    atividades: [
      'Museu do Apartheid e bairro Maboneng',
      'Lion’s Park e cavernas de Sterkfontein',
      'Top of Africa no Carlton Centre',
    ],
    gastronomia: 'Bobotie, biltong, cervejas artesanais locais',
    hospedagem: 'Hotel no centro ou em Sandton',
    deslocamento: 'Chegada internacional pelo Aeroporto OR Tambo (JNB)',
  },
  {
    dia: 'Dia 3–5',
    destino: 'Parque Nacional Kruger',
    atividades: [
      'Safári guiado para ver os “Big Five”',
      'Passeio ao nascer do sol e observação de animais',
      'Hospedagem em lodge com vista para a savana',
    ],
    gastronomia: 'Churrasco sul-africano (braai), pratos típicos regionais',
    hospedagem: 'Lodge ou campamento dentro do parque',
    deslocamento: 'Voo doméstico ou carro de Johannesburgo (5h)',
  },
  {
    dia: 'Dia 6–8',
    destino: 'Cidade do Cabo (Cape Town)',
    atividades: [
      'Table Mountain — trilha ou teleférico',
      'Robben Island — prisão de Nelson Mandela',
      'Praia de Camps Bay e bairro de Woodstock',
    ],
    gastronomia: 'Frutos do mar, culinária fusion, vinhos locais',
    hospedagem: 'Hotel em Waterfront ou Green Point',
    deslocamento: 'Voo doméstico de Kruger ou Johannesburgo (2h)',
  },
  {
    dia: 'Dia 9–10',
    destino: 'Região das Vinícolas (Stellenbosch e Franschhoek)',
    atividades: [
      'Degustação de vinhos em vinícolas renomadas',
      'Passeio de bonde do vinho em Franschhoek',
      'Almoço gourmet com vista para os vinhedos',
    ],
    gastronomia: 'Vinhos sul-africanos, queijos, pratos gourmet',
    hospedagem: 'Hotel-vinícola ou pousada charmosa',
    deslocamento: 'Carro alugado ou tour guiado de Cape Town (1h)',
  },
];

export default function RoteiroAfricaDoSul() {
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
          <h1>🇿🇦 Roteiro de 10 Dias pela África do Sul</h1>
          <p>
            Uma viagem entre natureza selvagem, cultura vibrante e paisagens deslumbrantes. Ideal para quem busca safáris, vinhos, história e aventura.
          </p>
        </section>

        <section className={styles.cards}>
          {roteiroAfricaDoSul.map((dia, index) => (
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
