import React from 'react';
import styles from './Newsletter.module.css';

const Newsletter = () => {
  return (
    <div className={styles.newsletterContainer}>
      <div className={styles.newsletterContent}>
        <h2>NEWSLETTER</h2>
        <p>Sign up to receive updates on new products and special offers</p>
        <form className={styles.newsletterForm}>
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            className={styles.emailInput}
            required
          />
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              className={styles.checkboxInput}
            />
            Yes, subscribe me to your newsletter
          </label>
          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
