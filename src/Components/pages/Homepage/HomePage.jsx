import React from 'react'
import styles from './HomePage.module.css'
import blockImg from '../../../images/blockImg.png'

const HomePage = () => {
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
  </section>
  )
}

export default HomePage
