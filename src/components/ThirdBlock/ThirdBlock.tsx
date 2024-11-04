import styles from './ThirdBlock.module.css';
import cartinka from '../../assets/Group.png';
import shemm from '../../assets/why__graph.png';

const cardsData = [
  {
    imgs: cartinka,
    description: 'Достижение поставленных клиентом целей'
  },
  {
    imgs: cartinka,
    description: 'Нацелены на долгосрочное сотрудничество'
  },
  {
    imgs: cartinka,
    description: 'Лояльная ценовая политика'
  },
  {
    imgs: cartinka,
    description: 'Всегда готовы идти навстречу клиенту'
  },
  {
    imgs: cartinka,
    description: 'Высокая квалификация и практический опыт'
  }
];

const ThirdBlock = () => {
  return (
    <div className={styles.container}>
      <h1>Почему мы?</h1>
      <div className={styles.content}>
        <div className={styles.cardsContainer}>
          {cardsData.map((card, index) => (
            <div key={index} className={styles.card}>
              <img src={card.imgs} alt={card.description} />
              <p>{card.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.rightBlock}>
          <div className={styles.textBlock}>
            <p>Non diam laoreet faucibus amet ut lacus sed convallis viverra. At purus mattis in consectetur vel.</p>
          </div>
          <div className={styles.imageBlock}>
            <img src={shemm} alt="Description of shemm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdBlock;
