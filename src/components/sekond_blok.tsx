import './App.css';
import cartinka2 from '../assets/Rectangle 32 (1).png';
import React, { useState } from 'react';

interface CardDatas {
    imgs: string;
    description: string;
  }

  const secondBlockData: CardDatas[] = [
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
  
  const Sekond_blok: React.FC = () => {
    const [secondBlockCardIndex, setSecondBlockCardIndex] = useState<number>(0);

    const handleSecondBlockClick = (index: number) => {
      setSecondBlockCardIndex(index);
    };
    return (
      <div className="container">
        <main>
        <div>
          <h2>О компании</h2>
        </div>

        <div className='company_blok_p'>
          <p>Aliquam augue enim phasellus egestas nisl urna senectus ultricies. Vitae consequat odio faucibus eget suspendisse ultricies. Pharetra diam viverra ut adipiscing aliquam. Massa nulla lobortis nulla tellus ut ut elementum. Viverra fermentum adipiscing cras purus a. Vitae pretium lacus faucibus rhoncus nisi neque. Sagittis odio egestas suspendisse sed imperdiet urna</p>
        </div>

        <div className="second-block">
          <div className="second-block-buttons">
            <button onClick={() => handleSecondBlockClick(0)}>Команда</button>
            <button onClick={() => handleSecondBlockClick(1)}>Наши компетенции</button>
            <button onClick={() => handleSecondBlockClick(2)}>Профессионалы</button>
            <button onClick={() => handleSecondBlockClick(3)}>Взаимодействие с органами</button>
          </div>

          <div className="second-block-content">
            <p>{secondBlockData[secondBlockCardIndex].description}</p>            
            <img src={secondBlockData[secondBlockCardIndex].imgs} alt="Картинка" />
          </div>
        </div>
      </main>
      </div>
    );
  };
  
  export default Sekond_blok;