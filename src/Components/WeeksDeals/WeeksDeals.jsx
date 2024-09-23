import React, { useEffect, useState } from 'react';
import styles from './WeeksDeals.module.css';

const WeeksDeals = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 1800;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <div className={`${styles.bgImg} ${isScrolled ? styles.scrolledBgImg : ''}`}></div>
        <div className={`${styles.bgImg2} ${isScrolled ? styles.scrolledBgImg2 : ''}`}></div>
        <div className={`${styles.bgImg3} ${isScrolled ? styles.scrolledBgImg3 : ''}`}></div>
        <div className={`${styles.block} ${isScrolled ? styles.scrolledBlock : ''}`}>
          <h3>THIS WEEK'S DEALS</h3>
          <h2><span>10%</span><br />off all games</h2>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default WeeksDeals;
