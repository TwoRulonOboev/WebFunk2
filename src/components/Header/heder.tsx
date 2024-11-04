import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>SINDNFISfy</div>
          <ul className={styles.navLinks}>
            <li><Link to="/">Сопровождение бизнеса</Link></li>
            <li>Дист. обучение</li>
            <li>Лицензирование</li>
            <li><Link to="/about">О нас</Link></li>
            <li><Link to="/contact">Контакты</Link></li>
          </ul>
          <div className={styles.contactButtons}>
            <button className={styles.btn}>ВК</button>
            <button className={styles.btn}>Email</button>
            <button className={`${styles.btn} ${styles.callBtn}`}>Заказать звонок</button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
