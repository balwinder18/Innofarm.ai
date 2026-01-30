import styles from './css/Footer.module.css';
import Image from 'next/image';

const socialIcons = [
  { id: 'sa1', alt: 'LinkedIn' },
  { id: 'sa2', alt: 'Instagram' },
  { id: 'sa3', alt: 'Facebook' },
  { id: 'sa4', alt: 'Twitter' }
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Arched Content Area with Max Depth Curve */}
      <div className={styles.archedContainer}>
        <div className={styles.topSection}>
          <Image 
            src="/images/logo1.png" 
            alt="InnoFarms Logo" 
            width={180} 
            height={60} 
            priority 
          />
          <h2 className={styles.tagline}>
            Global Enterprise-First AI SaaS + Robotics Unified Intelligence Platform for Global Food Systems.
          </h2>
        </div>

        <div className={styles.linksGrid}>
          {/* Home Column */}
          <div className={styles.column}>
            <h3 className={styles.colTitle}>Home</h3>
            <ul className={styles.linksList}>
              <li>About Us</li>
              <li>Solutions</li>
              <li>Leadership & Future Advisory Council</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          {/* Platform Column */}
          <div className={styles.column}>
            <h3 className={styles.colTitle}>ONE Platform</h3>
            <p className={styles.colSub}>Modular. Interoperable. Enterprise-grade.</p>
            <ul className={styles.linksList}>
              <li>INNOFarmsXOS (Core OS)</li>
              <li>INNOSense (IoT & Sensors)</li>
              <li>GrowSmartRobotics</li>
              <li>INNOMarketTrend</li>
            </ul>
          </div>

          {/* Region/Offices Column */}
          <div className={styles.column}>
            <h3 className={styles.colTitle}>Region/Offices</h3>
            <p className={styles.colSub}>Operating across GCC, India & Southeast Asia</p>
            <div className={styles.address}>
              <span className={styles.regionLabel}>MENA:</span>
              <p>Dubai Digital Park A2, Dubai Silicon Oasis, UAE</p>
              
              <span className={styles.regionLabel}>SEA:</span>
              <p>18F OfficePlus, Sheung Wan, Hong Kong</p>
              
              <span className={styles.regionLabel}>INDIA:</span>
              <p>DLF Forum, DLF Cybercity, Gurugram, India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Deep Green Sub-Footer */}
      <div className={styles.subFooter}>
        <div className={styles.subContent}>
          <div className={styles.socialArea}>
            <span>Follow us on:</span>
            <div className={styles.socialGrid}>
              {socialIcons.map((icon) => (
  <div key={icon.id} className={styles.iconBox}>
    <Image 
      src={`/images/${icon.id}.png`} 
      alt={icon.alt} 
      width={24} 
      height={24} 
      className={styles.socIcon} // Add this line
      /* No need for inline style objectFit if using className */
    />
  </div>
))}
            </div>
          </div>

          <div className={styles.newsletterArea}>
            <span>Newsletter</span>
            <div className={styles.miniNewsletter}>
              <input type="text" placeholder="Welcome to food security, supply intelligence & AI..." />
              <button className={styles.miniSignUp}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}