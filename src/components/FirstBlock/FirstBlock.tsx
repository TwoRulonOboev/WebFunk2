import styles from './FirstBlock.module.css';
import cartinka1 from '../../assets/service-item__icon-wrapper.png';

const cardsData = [
  {
    imgs: cartinka1,
    title: 'Сопровождение бизнеса',
    description: 'Aliquet ac leo arcu erat et sit rhoncus lectus. Donec pretium cursus pretium scelerisque quis posuere sed aliquet. Nibh convallis nisl sodales pretium adipiscing ac. Turpis turpis vulputate.'
  },
  {
    imgs: cartinka1,
    title: 'Дистанционное обучение',
    description: 'Enim urna ac nunc consectetur sed donec. Facilisis bibendum suspendisse at pretium varius. Egestas a ultrices odio dignissim varius. Ipsum egestas nisl.'
  },
  {
    imgs: cartinka1,
    title: 'Лицензирование компаний',
    description: 'Urna arcu suspendisse nibh volutpat. Felis diam odio vitae sit. Eget purus sed tincidunt tortor vitae at. Vivamus adipiscing vitae laoreet sapien amet sit morbi tincidunt adipiscing. Sagittis eget.'
  }
];

const FirstBlock = () => {
  return (
    <div className={styles.container}>
      <h1>Консалтинговая компания Эксперт-Рос Инвест</h1>
      <div className={styles.cardsContainer}>
        {cardsData.map((card, index) => (
          <div key={index} className={styles.card}>
            <img src={card.imgs} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FirstBlock;
