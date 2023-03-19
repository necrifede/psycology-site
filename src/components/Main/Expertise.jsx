import styles from './expertise.module.css';

export const Expertise = () => {
  return (
    <section className={styles.expertise}>
      <div className={styles.titles}>
        <h1>Areas of Expertise</h1>
        <div className="separatorline"></div>
        <h2>Counselling, Psychotherapy, Cognitive Behavioural Therapy & Psychiatric Consultation</h2>
      </div>
      <div className={styles.description}>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double
          click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like
          on your page. I’m a great place for you to tell a story and let your users know a little more about you.
        </p>
        <p>
          This is a great space to write long text about your company and your services. You can use this space to go
          into a little more detail about your company. Talk about your team and what services you provide. Tell your
          visitors the story of how you came up with the idea for your business and what makes you different from your
          competitors.
        </p>
        <div>
          <button>Read More</button>
        </div>
      </div>
    </section>
  );
};
