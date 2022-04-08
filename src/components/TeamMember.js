import styles from './TeamMember.module.css';

export default function TeamMember() {
  return (
    <div className={styles.card}>
      <p className={styles.name}>Pierre</p>

      <a href="https://github.com/ComicScrip" rel="noreferrer">
        <img
          className={styles.avatar}
          src={'https://github.com/ComicScrip.png'}
          alt="pierre"
        />
      </a>

      <p className={styles.bio}>Bio Pierre</p>
    </div>
  );
}
