import styles from './css/ModuleEcosystem.module.css';
import Image from 'next/image';

const modules = [
  { name: "INNOMarketTrend", img: "/images/i1.png" },
  { name: "INNOFarmsXOS (Core OS)", img: "/images/i2.png" },
  { name: "INNOSense (IoT & Sensors)", img: "/images/i3.png" },
  { name: "GrowSmartRobotics", img: "/images/i4.png" }
];

export default function ModuleEcosystem() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p>All four modules are part of a single ecosystem. INNOFarms.AI delivers one complete platform.</p>
        </div>

        <div className={styles.grid}>
          {modules.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image 
                  src={item.img} 
                  alt={item.name} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h3 className={styles.moduleName}>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}