import styles from './css/Experience.module.css';

export default function Experience() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* Experience CTA Banner */}
        <div className={styles.experienceBanner}>
          <h2 className={styles.bannerTitle}>Experience the Intelligence Platform!</h2>
          <p className={styles.bannerSubtitle}>
            Low-risk pilots available for enterprises & public programs. Farm Intelligence pilots available for commercial farms.
          </p>
          <button className={styles.bookDemoBtn}>Book a Demo</button>
        </div>

        {/* Sustainability Section */}
        <div className={styles.sustainabilityContent}>
          <h2 className={styles.sectionTitle}>Sustainability & Community Impact</h2>
          <p className={styles.sectionSubtitle}>Creating positive change for the planet and communities.</p>
          
          <div className={styles.impactGrid}>
            <div className={styles.impactPill}>Sustainability Tracking</div>
            <div className={styles.impactPill}>Positive Impact Metrics</div>
            <div className={styles.impactPill}>Community Support</div>
          </div>
        </div>

      </div>
    </section>
  );
}