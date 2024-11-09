import React from 'react'
import styles from './Upgrade.module.css'
import UpgradeCard from './UpgradeCard/UpgradeCard'
import sellerCard from '../../images/sellerCard.png'
import sellerCard3 from '../../images/sellerCard3.png'
import sellerCard4 from '../../images/sellerCard4.png'
import sellerCard5 from '../../images/sellerCard5.png'
import sellerCard11 from '../../images/sellerCard11.png'
import sellerCard12 from '../../images/sellerCard12.png'
import sellerCard13 from '../../images/sellerCard13.png'
import sellerCard14 from '../../images/sellerCard14.png'


const Upgrade = () => {
    

    const upgradeList = [
        {
            img: sellerCard11,
            name: 'Impact Gaming Chair',
            price: '$159.99',
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
            img: sellerCard13,
            name: 'CO-21 Mechanical Keyboard',
            price: '$44.99',
            newPrice: '$26.99',
            sale: true
        },
        { 
            img: sellerCard12,
            name: 'Blaze Wireless Mouse',
            price: '$29.99',
            newPrice: null,
            sale: false
        },
        
        {
            img: sellerCard14,
            name: 'L503 Headset',
            price: '$26.99',
            newPrice: '$29.99',
            sale: true
        }
    ]
    

  return (
    <div className={styles.blockUpgrade}>
      <div>
        <h2>UPGRADE YOUR GEAR</h2>
        <button>View All</button>
      </div>
      <div>
       <UpgradeCard upgradeList={upgradeList}/>
      </div>
    </div>
  )
}

export default Upgrade
