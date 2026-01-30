import styles from './css/SdgSection.module.css';
import Image from 'next/image';

const sdgGoals = [
  { id: 's1', text: "Enhancing food security through innovative agricultural practices." },
  { id: 's2', text: "Promoting healthy lives and well-being for all through fresh, nutrient-rich, and pesticide-free produce." },
  { id: 's3', text: "Implementing water-efficient technologies to optimize usage." },
  { id: 's4', text: "Reducing waste and promoting sustainable consumption patterns." },
  { id: 's5', text: "Mitigating climate impact through sustainable farming." },
  { id: 's6', text: "Our commitment to achieving net-zero carbon emissions is reinforced by adopting the ISO 14064 standard, which provides a clear framework for carbon neutrality." },
  { id: 's7', text: "We adhere to GRI Standards to transparently report our environmental and social impacts, ensuring accountability and continuous improvement." }
];

export default function SdgSection() {
  return (
    <>
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {/* Main Header with UN Logo */}
        <div className={styles.header}>
          <div className={styles.mainLogoWrapper}>
            <Image 
              src="/images/logomain.png" 
              alt="UN Sustainable Development Goals" 
              width={400} 
              height={80} 
              className={styles.logomain}
            />
          </div>
          <p className={styles.introText}>
            At INNOFarms.AI, we are more than a technology company—we are a movement toward a greener, more resilient future. 
            Guided by globally recognized sustainability standards, we are revolutionizing agriculture while making a 
            tangible impact on global environmental and social goals.
          </p>
        </div>

        {/* SDG Grid */}
        <div className={styles.sdgGrid}>
          {sdgGoals.map((goal) => (
            <div key={goal.id} className={styles.sdgCard}>
              <div className={styles.iconWrapper}>
                <Image src={`/images/${goal.id}.png`} alt="SDG Icon" width={60} height={60} />
              </div>
              <p className={styles.cardText}>{goal.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
 
 
 
<section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Trusted & Featured By</h2>
          <p className={styles.subtitle}>Leading companies and media partners who recognize our excellence.</p>
        </div>

        <div className={styles.logoGrid}>
         
        </div>
      </div>
    </section>

 
 </>
  );
}