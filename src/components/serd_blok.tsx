import cartinka from '../assets/Group.png'
import shemm from '../assets/why__graph.png'

interface CardData {
    imgs: string;
    description: string;
  }

  const cardsData: CardData[] = [
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

const SerdBlok = () => {
    return (
        <div className="container">
        <main>
      <h1>Почему мы?</h1>

        <div className="cards-container">
          {cardsData.map((card, index) => (
            <div key={index} className="card">
              <img src={cartinka} alt="" />
              <h3>{card.description}</h3>
            </div>
          ))}
        </div>

        <div>
            <div >
                <p>Non diam laoreet faucibus amet ut lacus sed convallis viverra. At purus mattis in consectetur vel.</p>
            </div>
            <div>
            <img src={shemm} />                
            </div>
        </div>
        </main>
      </div>
    );
  };

export default SerdBlok;