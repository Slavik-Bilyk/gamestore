import React from 'react'
import styles from './BestSellers.module.css'
import blockImg from '../../images/blockImg.png'
import BestSellerCard from './BestSellerCard/BestSellerCard'
import sellerCard from '../../images/sellerCard.png'


const BestSellers = () => {

const bestSellersList = [
    {
        img: sellerCard,
        name: 'Playbox XZ Gold Edition',
        price: '$1,000,000',
        sale: false
    },
    {
        img: sellerCard,
        name: 'Echo Headset',
        price: '$39.99',
        sale: false
    },
    {
        img: sellerCard,
        name: 'Mach Gaming Chair',
        price: '$116.99',
        sale: true
    },
    {
        img: sellerCard,
        name: 'X-2 Wireless Mouse',
        price: '$24.99',
        sale: false
    },
    {
        img: sellerCard,
        name: 'Spartan Mechanical',
        price: '$40.49',
        sale: true
    },
    {
        img: sellerCard,
        name: 'Raptor',
        price: '$26.99',
        sale: true
    },
    { 
        img: sellerCard,
        name: 'Wave',
        price: '$29.99',
        sale: false
    },
    {
        img: sellerCard,
        name: 'Wave Gen RX',
        price: '$579.99',
        sale: false
    },
    {
        img: sellerCard,
        name: 'Ancient Souls',
        price: '$39.99',
        sale: false
    }, 
    {
        img: sellerCard,
        name: 'Chronosplit',
        price: '$39.99',
        sale: false
    }
]


  return (
    <section>
    <div className={styles.bgContainer}>
      <div className={styles.container}>
        <div className={styles.block}>
         <div>
          <p>Power up your game</p>
          <h1>CYBER KID <br/> INFINITE</h1>
          <p>Now Available on PC & Console</p>
          <button>Buy Now</button>
         </div>
        </div>
        <div>
          <img className={styles.blockImg} src={blockImg}/>
        </div>
      </div>
    </div>
    <div className={styles.blockBestSellers}>
      <div>
        <h2>BEST SELLERS</h2>
        <button>View All</button>
      </div>
      <div>
       <BestSellerCard sellers={bestSellersList}/>
      </div>
    </div>
  </section>
  )
}

export default BestSellers
