import React from 'react'
import styles from './BestSellerCard.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BestSellerCard = ({ sellers }) => {
 
  return (
    <div >
    <ul className={styles.BestSellerCardList}>
      {sellers.map(seller => (
        <div className={styles.blockCard} key={seller.name}>
          <img src={seller.img} alt={seller.name} />
          <h3>{seller.name}</h3>
          <p>{seller.price}</p>
        </div>
      ))}
    </ul>
    </div>
  );
}

export default BestSellerCard;
