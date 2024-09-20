import React from 'react'
import BestSellers from '../../BestSellers/BestSellers'
import Shop from '../../Shop/Shop'
import WeeksDeals from '../../WeeksDeals/WeeksDeals'

const HomePage = () => {
  return (
   <div>
    <BestSellers/>
    <Shop/>
    <WeeksDeals/>
   </div>
  )
}

export default HomePage
