import styles from './Solutions.module.css';
import Image from 'next/image';
import Navbar from '../components/Navbar';          
import Footer from '../components/Footer';

const enterpriseItems = [
  { id: 'e1', title: 'Food Retail & F&B', desc: 'Redefining Food Experiences Every Day.' },
  { id: 'e2', title: 'Food Processors & Distributors', desc: 'Connecting Fresh Production to Global Markets.' },
  { id: 'e3', title: 'Foodservice, HoReCa & Hospitality', desc: 'Serving Quality. Elevating Hospitality.' },
  { id: 'e4', title: 'Agribusiness (Seeds, Inputs, Integrators)', desc: 'Innovating Farm-to-Field Solutions.' },
  { id: 'e5', title: 'Government & Food Security Programs', desc: 'Empowering Safe & Secure Food Futures.' },
  { id: 'e6', title: 'Insurance, Banks & Agri-Finance', desc: 'Secure Solutions for Agri-Business.' },
];

const farmItems = [
  { id: 'f1', title: 'Indoor / Vertical Farms', desc: 'High-Tech Farming Solutions.' },
  { id: 'f2', title: 'CEA Greenhouse Farms', desc: 'Precision Farming. Superior Quality.' },
  { id: 'f3', title: 'Open-field Precision Farms', desc: 'Data-Driven Agriculture Solutions.' },
  { id: 'f4', title: 'Orchards & Perennial Crops', desc: 'Nurturing Nature, Cultivating Quality.' },
  { id: 'f5', title: 'Aquaculture (AquaFarms)', desc: 'Sustainable Aquatic Growth.' },
  { id: 'f6', title: 'Livestock & Controlled Animal Systems', desc: 'Optimized Livestock Management.' },
];

export default function SolutionsPage() {
  return (

<>
<Navbar/>
    <main className={styles.wrapper}>
    
    
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Left Side: Featured News & Newsletter */}
        <aside className={styles.sidebar}>
  <div className={styles.newsCard}>
    <div className={styles.imageBox}>
      {/* Ensure your image has the subtle rounded corners seen in the design */}
      <Image 
        src="/images/news_thumb.png" 
        alt="UAE Climate Tech" 
        fill 
        style={{objectFit: 'cover'}} 
      />
    </div>
    <div className={styles.newsBody}>
      <div className={styles.newsHeader}>
        <span className={styles.date}>March 20, 2024</span>
        <span className={styles.readTime}>2 min read</span>
      </div>
      <h3 className={styles.newsTitle}>
        <span className={styles.highlight}>INNOFARMS.AI’S</span> INTEGRATED AGRI-TECH ECOSYSTEM AIMS TO REVOLUTIONISE SUSTAINABLE FOOD PRODUCTION
      </h3>
      <p className={styles.summary}>
        INNOFarms.AI, led by Alejandro Velez, is transforming the global agriculture landscape with its comprehensive digital platform combining AI, robotics, and IoT to improve efficiency, traceability, and sustainability across diverse farming regions.
      </p>
      <a href="#" className={styles.readMore}>
        Read More At <span className={styles.arrow}>→</span> <strong>uaenews.nexusclimate</strong>
      </a>
    </div>
  </div>

  <div className={styles.newsletter}>
    <h4 className={styles.newsletterTitle}>Newsletter</h4>
    <div className={styles.newsInputWrapper}>
      <input type="email" placeholder="Insert email..." className={styles.emailInput} />
      <button className={styles.signUpBtn}>Sign Up</button>
    </div>
  </div>
</aside>

          {/* Right Side: Suites and Benefits */}
          <section className={styles.mainContent}>
            <div className={styles.suiteRow}>
              {/* Enterprise Column */}
              <div className={styles.suiteCol}>
                <div className={`${styles.header} ${styles.bgOrange}`}>
                  <h3>Enterprise Intelligence Suite</h3>
                  <p>Live visibility + predictive risk + traceability across your supplier farm network.</p>
                </div>
                {enterpriseItems.map(item => (
                  <div key={item.id} className={styles.item}>
                    <div className={styles.iconBox}><Image src={`/images/${item.id}.png`} width={20} height={20} alt=""/></div>
                    <div className={styles.text}>
                      <strong>{item.title}</strong>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Farm Column */}
              <div className={styles.suiteCol}>
                <div className={`${styles.header} ${styles.bgDarkOrange}`}>
                  <h3>Farm Intelligence & Automation Suite</h3>
                  <p>The Operating Center for Farm 4.0 set and optimize your farm operations.</p>
                </div>
                {farmItems.map(item => (
                  <div key={item.id} className={styles.item}>
                    <div className={styles.iconBox}><Image src={`/images/${item.id}.png`} width={20} height={20} alt=""/></div>
                    <div className={styles.text}>
                      <strong>{item.title}</strong>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Benefits Row */}
            <div className={styles.benefitRow}>
  {/* Enterprise Key Benefits */}
  <div className={styles.benefitBox}>
    <div className={styles.benefitHeader}>
      <h4>Key Benefits</h4>
    </div>
    <ul className={styles.benefitList}>
      <li>Multi-farm visibility dashboard</li>
      <li>Real-time supply forecasting</li>
      <li>Traceability & ESG</li>
      <li>Quality & SOP compliance</li>
      <li>Supply risk alerts</li>
      <li>API integrations</li>
    </ul>
  </div>

  {/* Farm Key Benefits */}
  <div className={styles.benefitBox}>
    <div className={styles.benefitHeader}>
      <h4>Key Benefits</h4>
    </div>
    <ul className={styles.benefitList}>
      <li>Reduce OPEX (Up to 20–30%)</li>
      <li>Boost Yield (Up to 10–25%)</li>
      <li>Reduce Crop Loss (Up to 90%)</li>
      <li>Automate Manual Processes</li>
      <li>Unified Monitoring & Control</li>
      <li>Compliance-Ready & Market-Aligned</li>
      <li>Real-Time Farm & Crop Intelligence</li>
    </ul>
  </div>
</div>
          </section>
        </div>
      </div>


    </main>

 <Footer />
    </>
  );
}