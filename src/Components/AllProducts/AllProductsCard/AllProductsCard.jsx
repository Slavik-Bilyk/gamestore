import React from 'react'
import styles from './AllProductsCard.module.css'

const AllProductsCard = ({ sellers }) => {
  return (
    <div className={styles.cardsContainer}>
      {sellers.map(seller => (
        <div key={seller.name} className={styles.card}>
          {seller.sale && <span className={styles.sale}>SALE</span>}
          <img src={seller.img} alt={seller.name} className={styles.image} />
          <h3>{seller.name}</h3>
          {seller.sale ? (
            <>
              <p className={styles.oldPrice}>{seller.price}</p>
              <p className={styles.newPrice}>{seller.newPrice}</p>
            </>
          ) : (
            <p>{seller.price}</p>
          )}
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

export default AllProductsCard
