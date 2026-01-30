"use client";
import { useState, useEffect } from 'react';
import styles from './css/Hero.module.css';

const slides = [
  {
    title: "The AI Operating System for Enterprise AgriFood Supply Networks.",
    subtitle: "Predictive farm intelligence. Real-time supply visibility.",
    buttonText: "Explore the Platform"
  },
  {
    title: "Enterprise-First AI SaaS & Robotic Intelligence Platform for Global AgriFood Systems.",
    subtitle: "",
    buttonText: "Explore Our Solution"
  },
  {
    title: "Building the Intelligent Operating Backbone for Global Food Systems.",
    subtitle: "From farm operations to supply risk and sustainability outcomes.",
    buttonText: "About Us"
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    
    return () => clearInterval(timer);
  }, [isPaused]); 


  return (
    <section 
      className={styles.hero}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.content}>
        <div key={current} className={styles.fadeAnim}>
          <h1 className={styles.title}>{slides[current].title}</h1>
          {slides[current].subtitle && (
            <p className={styles.subtitle}>{slides[current].subtitle}</p>
          )}
          
          <button className={styles.cta}>
            {slides[current].buttonText}
          </button>
        </div>

        <div className={styles.pagination}>
          {slides.map((_, index) => (
            <span 
              key={index}
              className={`${styles.dot} ${current === index ? styles.activeDot : ''}`}
              onClick={() => {
                setCurrent(index);
                setIsPaused(true); 
              }}
            />
          ))}
        </div>
      </div>
    </section>



  );
}