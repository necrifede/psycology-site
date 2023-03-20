import { useEffect, useState } from 'react';
import styles from './index.module.css';

const menuItems = [
  { name: 'Home', reference: '#' },
  { name: 'Services', reference: '#services' },
  { name: 'Areas of Expertise', reference: '#expertiseareas' },
  // { name: 'Price', reference: '#price' },
  { name: 'Contact', reference: '#contac' },
];

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = (event) => {
    setOpenMenu((isOpen) => !isOpen);
  };

  useEffect(() => {
    const handleScroll = (event) => {
      setOpenMenu(false);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className={styles.navigation}>
        <span className={styles.brand}>Kamar Maškova</span>
        <div className={styles.menulist}>
          <ul>
            {menuItems.map(({ name, reference }) => (
              <li key={reference}>
                <a href={reference}>{name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.menuToggle}>
          <input type="checkbox" checked={openMenu} onChange={handleMenu} />
          <div className={styles.hamburger}></div>
        </div>
      </nav>
      <ul className={styles.menuhamburger}>
        {menuItems.map(({ name, reference }) => (
          <li key={reference}>
            <a href={reference}>{name}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};
