import React, { useState } from 'react';
import styles from './SecondBlock.module.css';
import cartinka2 from '../../assets/Rectangle 32 (1).png';

const secondBlockData = [
  {
    imgs: cartinka2,
    description: 'Описание для команды. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.'
  },
  {
    imgs: cartinka2,
    description: 'Описание для наших компетенций. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.'
  },
  {
    imgs: cartinka2,
    description: 'Описание для профессионалов. Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.'
  },
  {
    imgs: cartinka2,
    description: 'Описание для взаимодействия с органами. Nullam id dolor id nibh ultricies vehicula ut id elit.'
  }
];

const SecondBlock = () => {
  const [secondBlockCardIndex, setSecondBlockCardIndex] = useState<number>(0);

  return (
    <div className={styles.container}>
      <h2>О компании</h2>
      <p className={styles.companyDescription}>
        Aliquam augue enim phasellus egestas nisl urna senectus ultricies.
      </p>
      <div className={styles.secondBlock}>
        <div className={styles.buttons}>
          {secondBlockData.map((_, index) => (
            <button
              key={index}
              onClick={() => setSecondBlockCardIndex(index)}
            >
              {["Команда", "Наши компетенции", "Профессионалы", "Взаимодействие"][index]}
            </button>
          ))}
        </div>
        <div className={styles.content}>
          <p>{secondBlockData[secondBlockCardIndex].description}</p>
          <img src={secondBlockData[secondBlockCardIndex].imgs} alt="Картинка" />
        </div>
      </div>
    </div>
  );
};

export default SecondBlock;
