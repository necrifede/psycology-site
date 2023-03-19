import styles from './index.module.css';

export const Header = () => {
  return (
    <nav className={styles.navigation}>
      <span>Kamar Maškova</span>

      <ul className={styles.menulist}>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Services</a>
        </li>
        <li>
          <a>Areas of Expertise</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
      <div className={styles.hamburger}></div>
    </nav>
  );
};
