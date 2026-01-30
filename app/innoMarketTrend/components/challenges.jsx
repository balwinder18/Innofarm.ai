import styles from './challenges.module.css';
import Image from 'next/image';

const challenges = [
  {
    image: "c1",
    title: "Market Unpredictability",
    desc: "Eliminates historical reliance risks by basing production on future demand, not just past sales."
  },
  {
    image: "c2",
    title: "Over Production",
    desc: "Prevents overproduction by aligning supply with demand, and reducing unsold inventory."
  },
  {
    image: "c3",
    title: "Operational Inefficiency",
    desc: "Optimizes resource allocation and streamlines production schedules for maximum efficiency."
  }
];

export default function Challenges() {
  return (
    <section className={styles.challengesWrapper}>
      <div className={styles.container}>
        <div className={styles.challengesHeader}>
          <h2 className={styles.sectionTitle}>Key Challenges We Solve</h2>
          <p className={styles.sectionSub}>
            Optimizing Production, Forecasting, and Operations for Maximum Efficiency.
          </p>
        </div>

        <div className={styles.challengesGrid}>
          {challenges.map((item, index) => (
            <div key={index} className={styles.challengeCard}>
              <div className={styles.imageBox}>
                <Image 
                  src={`/images/${item.image}.png`} 
                  alt={item.title} 
                  width={60} 
                  height={60} 
                  className={styles.challengeImg}
                />
              </div>
              <h3 className={styles.challengeTitle}>{item.title}</h3>
              <p className={styles.challengeDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}