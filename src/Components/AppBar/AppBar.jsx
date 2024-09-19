import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const AppBar = () => {
  return (
    <>
      <nav>
        <NavLink to='products'>Products</NavLink>
        <NavLink to='onSale'>On Sale</NavLink>
        <NavLink to='contactUs'>Contact Us</NavLink>
        <NavLink to='logIn'>Log in</NavLink>
      </nav>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default AppBar
