import styles from './innoMarketTrend.module.css';
import Image from 'next/image';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Challenges from './components/challenges.jsx';
import WhyStandOut from './components/WhyStandOut.jsx';

const galleryImages = [
  { src: '/images/trend1.jpg', alt: 'Robotic automation in warehouse' },
  { src: '/images/trend2.png', alt: 'AI data visualization over crops' },
  { src: '/images/trend3.png', alt: 'Robotic arm close-up' },
];

export default function innoMarketTrend() {
  return (


    <>
     
     <Navbar/>
    
    <main className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* Header Section */}
        <header className={styles.header}>
          <h1 className={styles.mainTitle}>INNOMarketTrend</h1>
          <p className={styles.subTitle}>
            Stay ahead with AI insights: predict demand, optimize production, and meet consumer needs.
          </p>
        </header>

        {/* Triple Image Gallery */}
        <div className={styles.imageGrid}>
          {galleryImages.map((img, index) => (
            <div key={index} className={styles.imageWrapper}>
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className={styles.heroImg}
              />
            </div>
          ))}
        </div>

        {/* Descriptive Text Section */}
        <div className={styles.descriptionContent}>
          <p>
            <span className={styles.brandHighlight}>INNOMarketTrend</span> is an AI-powered market trend analysis platform designed to bridge the gap between farming output and real-time consumer demand. By providing precise insights into demand patterns and optimizing production schedules, INNOMarketTrend helps farmers and businesses minimize waste, maximize profits, and support a sustainable food ecosystem.
          </p>
        </div>

      </div>
    </main>

    <Challenges/>
    <WhyStandOut/>
   
    <Footer/>

    </>
  );
}