import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>SINDNFISfy</div>
      <ul className={styles.navLinks}>
        <li>Сопровождение бизнеса</li>
        <li>Дист. обучение</li>
        <li>Лицензирование</li>
        <li>О нас</li>
        <li>Контакты</li>
      </ul>
      <div className={styles.contactButtons}>
        <button className={styles.socialButton}>ВК</button>
        <button className={styles.socialButton}>Email</button>
        <button className={styles.callButton}>Заказать звонок</button>
      </div>
      <p className={styles.footerText}>© Северо-Западный юридический центр "Альянс", 2023 г.</p>
    </footer>
  );
};

export default Footer;
