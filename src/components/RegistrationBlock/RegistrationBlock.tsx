import styles from './RegistrationBlock.module.css';

const RegistrationBlock = () => {
  return (
    <div className={styles.registrationContainer}>
      <div className={styles.textContainer}>
        <p className={styles.highlightText}>50+ компаний доверяют нам.</p>
        <p className={styles.subText}>Присоединяйтесь!</p>
      </div>
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>
          Бесплатный <span className={styles.highlightText}>аудит документации</span>
        </h2>
        <form className={styles.form}>
          <input type="text" placeholder="Имя" className={styles.input} />
          <input type="email" placeholder="E-mail" className={styles.input} />
          <input type="tel" placeholder="Телефон" className={styles.input} />
          <div className={styles.checkboxContainer}>
            <input type="checkbox" id="agreement" className={styles.checkbox} />
            <label htmlFor="agreement">Согласие на обработку персональных данных</label>
          </div>
          <button type="submit" className={styles.submitButton}>Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationBlock;

