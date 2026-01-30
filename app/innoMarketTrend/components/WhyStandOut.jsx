import styles from './WhyStandOut.module.css';
import Image from 'next/image';

const standOutStats = [
  { id: 's1', value: 'Up to 90%', label: 'Accuracy in forecasting demand trends' },
  { id: 's2', value: 'Up to 30%', label: 'Faster market adaptability' },
  { id: 's3', value: 'Up to 20%', label: 'Reduction in operational waste.' },
  { id: 's4', value: 'Up to 25%', label: 'Minimizing Unsold Inventory with Predictive Demand' },
  { id: 's5', value: 'Up to 25%', label: 'Reduces Emissions Through Efficient Production & Logistics' },
  { id: 's6', value: '15% - 20%', label: 'Revenue Growth Optimized' },
];

export default function WhyStandOut() {


    return (

<>

<section className={styles.standOutWrapper}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.standOutTitle}>Why INNOMarketTrend Stands Out?</h2>
          <p className={styles.standOutSub}>Transforming Market Insights into Smarter, Faster, and More Accurate Decisions.</p>
        </div>

        <div className={styles.statsGrid}>
          {standOutStats.map((stat) => (
            <div key={stat.id} className={styles.statCard}>
              <div className={styles.statIconBox}>
                <Image 
                  src={`/images/${stat.id}.png`} 
                  alt="icon" 
                  width={30} 
                  height={30} 
                  className={styles.whiteIcon}
                />
              </div>
              <div className={styles.statInfo}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className={styles.ctaWrapper}>
  <div className={styles.ctaBox}>
    <h2 className={styles.ctaTitle}>INNOMarketTrend</h2>
    <p className={styles.ctaDescription}>
      Transform unpredictability into opportunity with AI-powered precision, real-time adaptability, and tailored dashboards. Align production with market demand, stay ahead of trends, and drive profitable, waste-free farming.
    </p>
    <button className={styles.automateBtn}>Automate Now</button>
  </div>
</section>

</>


  );
}