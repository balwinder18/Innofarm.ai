"use client";
import { useState } from 'react';
import styles from './css/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src="/images/logo.png" alt="InnoFarms.AI" width={140} height={35} priority />
        </Link>

        <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        <div className={`${styles.navLinks} ${isOpen ? styles.navActive : ''}`}>
          
          {/* Platform Link - Now Dynamic */}
          <Link 
            href="/" 
            className={isActive('/') ? styles.platformPill : styles.link}
          >
            Platform <ChevronDown size={16} strokeWidth={isActive('/') ? 3 : 2} />
          </Link>

          {/* Solutions Link - Now takes the Pill style when active */}
          <Link 
            href="/solutions" 
            className={isActive('/solutions') ? styles.platformPill : styles.link}
          >
            Solution For <ChevronDown size={16} strokeWidth={isActive('/solutions') ? 3 : 2} />
          </Link>

          <div className={styles.link}>About Us <ChevronDown size={16} /></div>
          <div className={styles.link}>Media & Blog <ChevronDown size={16} /></div>
          
          <div className={styles.mobileActions}>
             <button className={styles.btnContact}>Contact us</button>
             <button className={styles.btnDemo}>Book a Demo</button>
          </div>
        </div>

        <div className={styles.btnGroup}>
          <button className={styles.btnContact}>Contact us</button>
          <button className={styles.btnDemo}>Book a Demo</button>
        </div>
      </div>
    </nav>
  );
}