import './App.css';

const Header = () => {
    return (
      <div className="container">
        <header>
          <nav className="navbar">
            <div className="logo">SINDNFISfy</div>
            <ul className="nav-links">
              <li>Сопровождение бизнеса</li>
              <li>Дист. обучение</li>
              <li>Лицензирование</li>
              <li>О нас</li>
              <li>Контакты</li>
            </ul>
            <div className="contact-buttons">
              <button className="btn">ВК</button>
              <button className="btn">Email</button>
              <button className="btn call-btn">Заказать звонок</button>
            </div>
          </nav>
        </header>
      </div>
    );
  };
  
  export default Header;