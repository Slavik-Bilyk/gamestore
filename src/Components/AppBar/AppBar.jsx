import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import styles from './AppBar.module.css'
import { SlBasket } from "react-icons/sl";
import { RxAvatar } from "react-icons/rx";

const AppBar = () => {
  return (
    <>
     <div className={styles.bg}>
     <nav className={styles.container}>
        <div className={styles.navigation}>
            <NavLink className={styles.navigationItem} to='products'>Products</NavLink>
            <NavLink className={styles.navigationItem} to='onSale'>On Sale</NavLink>
            <NavLink className={styles.navigationItem} to='contactUs'>Contact Us</NavLink>
            
            <NavLink className={styles.navigationItem} to='logIn'>
                <div className={styles.iconText}>
                    <RxAvatar className={styles.navIcons} size={25}/>
                    Log In
                </div>
            </NavLink>

            <SlBasket size={25} className={styles.navigationItem}/>
        </div>
      </nav>
      <main>
        <Outlet/>
      </main>
     </div>
    </>
  )
}

export default AppBar
