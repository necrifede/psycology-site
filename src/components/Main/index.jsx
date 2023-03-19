import styles from './index.module.css';
import { Presentation } from './Presentation';

export const Main = () => {
  return (
    <main className={styles.main}>
      <Presentation />
      <section>Expertise</section>
      <section>Contact</section>
    </main>
  );
};
