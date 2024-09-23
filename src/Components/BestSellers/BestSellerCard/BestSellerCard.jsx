import React from 'react';
import styles from './BestSellerCard.module.css';
import { Carousel } from 'nuka-carousel';


const BestSellerCard = ({ sellers }) => {
  

  return (
    <div>
       <Carousel
       showArrows 
         >

       {sellers.map(seller => (
          <div className={styles.blockCard} key={seller.name}>
         
           {seller.sale && <span>SALE</span> }
           <img src={seller.img} alt={seller.name} />
            <h3>{seller.name}</h3>
            {seller.sale ? (
            <>
              <p className={styles.oldPrice}>{seller.price}</p>
              <p>{seller.newPrice}</p>
            </>
          ) : (
            <p>{seller.price}</p>
            )}
              <button>Add to Cart</button>
           </div>
          
         
        ))}

       </Carousel>
    </div>
  );
};

export default BestSellerCard;
