import styles from './TeamMember.module.css';

export default function TeamMember({ name, avatarUrl, bio, githubUrl }) {
  return (
    <div className={styles.card}>
      <p className={styles.name}>{name}</p>

      <a href={githubUrl} target="_blank" rel="noreferrer">
        <img className={styles.avatar} src={avatarUrl} alt={name} />
      </a>

      <p className={styles.bio}>{bio}</p>
    </div>
  );
}
