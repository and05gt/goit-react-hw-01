import styles from "./Profile.module.css";

const Profile = ({ image, name, tag, location, stats }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <img className={styles.cardImage} src={image} alt={name} />
        <p className={styles.cardUsername}>{name}</p>
        <p className={styles.cardTag}>@{tag}</p>
        <p className={styles.cardLocation}>{location}</p>
      </div>

      <ul className={styles.cardList}>
        <li className={styles.cardListItem}>
          <span className={styles.cardListText}>Followers</span>
          <span className={styles.cardListStats}>{stats.followers}</span>
        </li>
        <li className={styles.cardListItem}>
          <span className={styles.cardListText}>Views</span>
          <span className={styles.cardListStats}>{stats.views}</span>
        </li>
        <li className={styles.cardListItem}>
          <span className={styles.cardListText}>Likes</span>
          <span className={styles.cardListStats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
