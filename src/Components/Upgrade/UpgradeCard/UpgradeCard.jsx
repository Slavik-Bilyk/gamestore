import React from 'react'
import { Carousel } from 'nuka-carousel';
import styles from './UpgradeCard.module.css'

const UpgradeCard = ({ upgradeList }) => {
  

    return (
      <div >
         <Carousel 
         showArrows  
         wrapAround
          slidesToShow={1}
          slidesToScroll={1}
          
           >
  
         {upgradeList.map(upgradeItem => (
            <div className={styles.blockCard} key={upgradeItem.name}>
              {upgradeItem.sale && <span>SALE</span> }
             <img src={upgradeItem.img} alt={upgradeItem.name} />
              <h3>{upgradeItem.name}</h3>
              {upgradeItem.sale ? (
              <>
                <p className={styles.oldPrice}>{upgradeItem.price}</p>
                <p>{upgradeItem.newPrice}</p>
              </>
            ) : (
              <p>{upgradeItem.price}</p>
              )}
                <button>Add to Cart</button>
            
            </div>
           
          ))}
  
         </Carousel>
      </div>
    );
  };
  
  export default UpgradeCard;
  