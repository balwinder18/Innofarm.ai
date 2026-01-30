import styles from './css/Contact.module.css';
import Image from 'next/image';
import { User, Mail } from 'lucide-react'; // Optional: Use icons for exact match

const socialIcons = [
  { id: 'sa1', alt: 'LinkedIn' },
  { id: 'sa2', alt: 'Instagram' },
  { id: 'sa3', alt: 'Facebook' },
  { id: 'sa4', alt: 'Twitter' }
];

export default function Contact() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* Left Side: Contact Form */}
        <div className={styles.formSection}>
          <h2 className={styles.title}>Send Us a Message</h2>
          <p className={styles.description}>
            For enterprise, commercial farms, agrifood business, and food initiatives inquiries, pilots, partnerships, or general questions — our team will guide you.
          </p>
          
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label>Full Name</label>
              <div className={styles.inputWrapper}>
                <input type="text" placeholder="Your full name" />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Email</label>
              <div className={styles.inputWrapper}>
                <input type="email" placeholder="yourmail@gmail.com" />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label>Message</label>
              <textarea placeholder="Your message"></textarea>
            </div>

            <button type="submit" className={styles.sendBtn}>Send Message</button>
          </form>
        </div>

        {/* Right Side: Social & Newsletter */}
        <div className={styles.infoSection}>
          <div className={styles.socialCard}>
            <h3 className={styles.cardTitle}>Social Network</h3>
            <div className={styles.socialGrid}>
              {socialIcons.map((icon) => (
                <div key={icon.id} className={styles.iconBox}>
                  <Image src={`/images/${icon.id}.png`} alt={icon.alt} width={24} height={24} />
                </div>
              ))}
            </div>

            <h3 className={styles.cardTitle}>Email</h3>
            <p className={styles.emailText}>Business@INNOFarms.AI</p>
            <p className={styles.emailText}>Invest@INNOFarms.AI</p>
          </div>

          <div className={styles.newsletterSection}>
            <h3 className={styles.newsletterTitle}>Newsletter</h3>
            <div className={styles.newsletterInput}>
              <input type="text" placeholder="Welcome to food security, supply intelligence & AI..." />
              <button className={styles.signUpBtn}>Sign Up</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}