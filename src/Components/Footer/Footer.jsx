import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.bg}>
        <div className={styles.container}>
        <div className={styles.logo}>logo</div>
        <div className={styles.navigationBlock}>
            <ul className={styles.navigationList}>
                <li>Products</li>
                <li>Games</li>
                <li>Consoles</li>
                <li>Controllers</li>
                <li>Accessories</li>
            </ul>
        </div>
        <div className={styles.policyBlock}>
            <ul className={styles.policyList}>
                <li>Policy</li>
                <li>Terms & Conditions</li>
                <li>Shipping Policy</li>
                <li>Refund Policy</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>FAQ</li>
            </ul>
        </div>
        <div className={styles.storeBlock}>
            <ul className={styles.storeList}>
                <li>Store</li>
                <li>500 Terry Francine Street</li>
                <li>San Francisco, CA 94158</li>
                <li>Mon - Fri: 9am - 9pm</li>
                <li>info@mysite.com</li>
                <li>123-456-7890</li>
            </ul>
        </div>
       
        </div>
        <p>© 2035 by ARCADE. Powered and secured by Wix</p>
    </div>
  )
}

export default Footer
