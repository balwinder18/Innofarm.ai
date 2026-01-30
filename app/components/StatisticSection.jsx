import styles from './css/StatisticSection.module.css';
import Image from 'next/image';

const enterpriseStats = [
  { id: 'a1', text: '75%', sub: 'lack real-time farm visibility' },
  { id: 'a2', text: '82%', sub: 'have daily supply uncertainty' },
  { id: 'a3', text: '68%', sub: 'face weekly supply volatility' },
  { id: 'a4', text: '65%', sub: 'cannot trace food origin' },
];

const farmStats = [
  { id: 'a5', text: '90%', sub: 'Inefficient Operations' },
  { id: 'a6', text: '6/10', sub: 'Costly to Run, Hard to Scale' },
  { id: 'a7', text: '95%', sub: 'NO Intelligence, No Data Visibility' },
  { id: 'a8', text: '80%', sub: 'Reactive issue detection (too late to prevent losses)' },
];

export default function StatisticSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* Enterprise Section */}
        <div className={styles.group}>
          <h2 className={styles.mainTitle}>Why Enterprises Need INNOFarms.AI</h2>
          <p className={styles.subLabel}>(Enterprise Buyer, Government, Food Security, Food Retail, HoReCa, Aggregators, Processors & Distributors)</p>
          
          <div className={styles.grid}>
            {enterpriseStats.map((stat) => (
              <div key={stat.id} className={`${styles.statPill} ${styles.greenPill}`}>
                <div className={styles.iconBox}>
                  <Image src={`/images/${stat.id}.png`} alt="icon" width={24} height={24} />
                </div>
                <div className={styles.statContent}>
                  <span className={styles.statNumber}>{stat.text}</span>
                  <span className={styles.statText}>{stat.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Farm Section */}
        <div className={styles.group}>
          <h2 className={styles.mainTitle}>Why Farms Need INNOFarms.AI</h2>
          <p className={styles.subLabel}>(Commercial Farms, Indoor/CEA, Greenhouses, Supplier Farms)</p>
          
          <p className={styles.description}>
            Modern farms operate under rising energy costs, labor constraints, climate volatility, and increasing buyer expectations — yet most still rely on manual processes, fragmented tools, and delayed feedback.
          </p>

          <div className={styles.grid}>
            {farmStats.map((stat) => (
              <div key={stat.id} className={`${styles.statPill} ${styles.orangePill}`}>
                <div className={styles.iconBox}>
                  <Image src={`/images/${stat.id}.png`} alt="icon" width={24} height={24} />
                </div>
                <div className={styles.statContent}>
                  <span className={styles.statNumber}>{stat.text}</span>
                  <span className={styles.statText}>{stat.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}