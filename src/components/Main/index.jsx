import { Expertise } from './Expertise';
import { Presentation } from './Presentation';
import styles from './index.module.css';

export const Main = () => {
  return (
    <main className={styles.main}>
      <Presentation />
      <Expertise />
      <section>Contact</section>
    </main>
  );
};
