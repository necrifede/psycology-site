import styles from './presentation.module.css';
import kamarImg from '@/assets/images/horse1.jpeg';

export const Presentation = () => {
  return (
    <section className={styles.presentation}>
      <figure>
        <img className={styles.fitimage} alt="Kamar image" src={kamarImg} />
      </figure>
      <article>
        <header>
          <h1>Kamar Maškova</h1>
        </header>
        <div>
          <h5>Ph. D. Clinical Psychotherapist</h5>
        </div>
        <div className="separatorline"></div>
        <p>
          Jsem vystudovaná doktorka z Maroka a zatím čekám na dokončení mého nostrifikačního procesu v Čechach. Žiju v
          Hradci Králové od srpna 2019. Od té doby, se intenzivně učím český jazyk, ziskala jsem úroven C1 a od zacátku
          roku 2023, jsem se rozhodla podnikat v poradenství a konzultační činnosti, abych mohla pomáhat dětem,
          dospívajícím i dospělým, kteří potřebují sdílení, podporu nebo jen chvíli pro sebe a někoho, kdo se bude
          věnovat jen jim.
        </p>
      </article>
    </section>
  );
};
