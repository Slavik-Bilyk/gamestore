import React from 'react'
import styles from './BestSellers.module.css'
import blockImg from '../../images/blockImg.png'
import BestSellerCard from './BestSellerCard/BestSellerCard'
import sellerCard from '../../images/sellerCard.png'
import sellerCard2 from '../../images/sellerCard2.png'
import sellerCard3 from '../../images/sellerCard3.png'
import sellerCard4 from '../../images/sellerCard4.png'
import sellerCard5 from '../../images/sellerCard5.png'
import sellerCard6 from '../../images/sellerCard6.png'
import sellerCard7 from '../../images/sellerCard7.png'
import sellerCard8 from '../../images/sellerCard8.png'
import sellerCard9 from '../../images/sellerCard9.png'
import sellerCard10 from '../../images/sellerCard10.png'


const BestSellers = () => {

const bestSellersList = [
    {
        img: sellerCard2,
        name: 'Playbox XZ Gold Edition',
        price: '$1,000,000',
        newPrice: null,
        sale: false
    },
    {
        img: sellerCard,
        name: 'Echo Headset',
        price: '$39.99',
        newPrice: null,
        sale: false
    },
    {
        img: sellerCard3,
        name: 'Mach Gaming Chair',
        price: '$129.99',
        newPrice: '$116.99',
        sale: true
    },
    {
        img: sellerCard4,
        name: 'X-2 Wireless Mouse',
        price: '$24.99',
        newPrice: null,
        sale: false
    },
    {
        img: sellerCard5,
        name: 'Spartan Mechanical',
        price: '$44.99',
        newPrice: '$40.49',
        sale: true
    },
    {
        img: sellerCard6,
        name: 'Raptor',
        price: '$29.99',
        newPrice: '$26.99',
        sale: true
    },
    { 
        img: sellerCard7,
        name: 'Wave',
        price: '$29.99',
        newPrice: null,
        sale: false
    },
    {
        img: sellerCard8,
        name: 'Wave Gen RX',
        price: '$579.99',
        newPrice: null,
        sale: false
    },
    {
        img: sellerCard9,
        name: 'Ancient Souls',
        price: '$39.99',
        newPrice: null,
        sale: false
    }, 
    {
        img: sellerCard10,
        name: 'Chronosplit',
        price: '$39.99',
        newPrice: null,
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
