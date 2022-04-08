import styles from './ContactPage.module.css';

export default function ContactPage() {
  return (
    <div className={styles.container}>
      <h1>Contactez-nous</h1>

      <form className={styles.form}>
        <label htmlFor="email">
          Email
          <input type="email" id="email" className={styles.field} required />
        </label>

        <label htmlFor="message">
          Message
          <textarea id="message" className={styles.field} required />
        </label>

        <button type="submit" className={styles.submitBtn}>
          Envoyer
        </button>
      </form>
    </div>
  );
}
