import React from 'react';
import styles from './Shop.module.css';
import shopIMG1 from '../../images/shopIMG1.png';
import shopIMG2 from '../../images/shopIMG2.png';
import shopIMG3 from '../../images/shopIMG3.png';


const Shop = () => {
  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <h2>SHOP BY CATEGORY</h2>
        <div className={styles.shopBlock}>
          <div >
            <div>
                <img src={shopIMG1} alt="Consoles" />
            </div>
            <h3>Consoles</h3>
          </div>
          <div>
            <div>
                 <img src={shopIMG2} alt="Accessories" />
            </div>
            <h3>Accessories</h3>
          </div>
          <div>
            <div>
                <img src={shopIMG3} alt="Controllers" />
            </div>
            <h3>Controllers</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
