import Image from 'next/image';
import styles from './css/Features.module.css';

export default function Features() {



  return (

<>

<section className={styles.showcase}>
      <div className={styles.container}>
        {/* Top Header Section */}
        <div className={styles.topHeader}>
          {/* Added the missing className here */}
          <p>
            One unified intelligence platform for enterprise visibility, supplier-farm intelligence, predictive, risk, and real-time traceability — across farms, supply chains, and food security programs.
          </p>
        </div>

        {/* Main Split Content */}
        <div className={styles.contentGrid}>
          {/* Left Side: Video Placeholder */}
          <div className={styles.videoWrapper}>
            <div className={styles.videoPlaceholder}>
              <span>video</span>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className={styles.textSide}>
            <h2 className={styles.mainTitle}>Trusted. Reliable. Future-Ready.</h2>
            
            <div className={styles.description}>
              <p><strong>INNOFarms.AI is built for mission-critical food systems.</strong></p>
              <p>
                Our platform enables enterprises and food programs to see, measure, and manage production, 
                risk, and sustainability across distributed farm networks — with confidence, auditability, and scale.
              </p>
              <p>
                At the farm level, we make every farm intelligent, efficient, and profitable — by reducing OPEX, 
                minimizing crop losses, and improving yield through real-time intelligence and predictive control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>



<section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>INNOFarms.AI Intelligence Platform</h2>
          <p className={styles.subHeader}>ONE Platform. TWO Intelligence Layers. Built to Unify the Entire Food System.</p>
        </div>

        <div className={styles.architecture}>
          {/* Left Card - Right Aligned */}
          <div className={`${styles.card} ${styles.leftCard}`}>
            <h3 className={styles.enterpriseTitle}>Enterprise Intelligence Suite</h3>
            <p className={styles.tagline}>System-of-Intelligence for AgriFood Enterprises</p>
            <ul className={styles.list}>
              <li>Real-time supplier & farm visibility</li>
              <li>Forecasting, risk alerts & traceability</li>
              <li>Quality, compliance & ESG intelligence</li>
              <li>Evidence-grade Climate & Supply Intelligence</li>
            </ul>
            <p className={styles.footerNote}>
              One enterprise deployment scales across tens to hundreds of farms
            </p>
          </div>

          <div className={styles.logoWrapper}>
            <div className={styles.stepConnectorLeft}></div>
            <div className={styles.greyCircle}>
              <Image 
                src="/images/hexagon-logo.png" 
                alt="InnoFarms Logo" 
                width={120} 
                height={120} 
                className={styles.mainLogo}
              />
            </div>
            <div className={styles.stepConnectorRight}></div>
          </div>

          {/* Right Card - Left Aligned */}
          <div className={`${styles.card} ${styles.rightCard}`}>
            <h3 className={styles.farmTitle}>Farm Intelligence & Automation Suite</h3>
            <p className={styles.tagline}>System-of-Execution Intelligence for Farms</p>
            <ul className={styles.list}>
              <li>AI-driven farm intelligence & monitoring</li>
              <li>Precision control & automation</li>
              <li>Enable climate-resilient & Compliant to Buyer Audit</li>
              <li>Lower OPEX, higher yield, reduced losses</li>
            </ul>
            <p className={styles.footerNote}>
              Farms operate smarter to reduce input cost & improve yield; enterprises operate predictively with audit-able, evidence-grade supply traceability.
            </p>
          </div>
        </div>
      </div>
    </section>



</>


);
}