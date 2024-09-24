import React from 'react'
import BestSellers from '../../Components/BestSellers/BestSellers'
import Shop from '../../Components/Shop/Shop'
import WeeksDeals from '../../Components/WeeksDeals/WeeksDeals'
import Upgrade from '../../Components/Upgrade/Upgrade'
import SpendSave from '../../Components/Spend&Save/SpendSave'
import Newsletter from '../../Components/Newsletter/Newsletter'
import Footer from '../../Components/Footer/Footer'

const HomePage = () => {
  return (
   <div>
    <BestSellers/>
    <Shop/>
    <WeeksDeals/>
    <Upgrade/>
    <SpendSave/>
    <Newsletter/>
    <Footer/>
   </div>
  )
}

export default HomePage
