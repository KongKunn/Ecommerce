import React from 'react'
import Search from '../Search/Search'
import Nav from '../Nav/Nav'
import './Header.css'
import Cart from '../Cart/Cart'
const Header = () => {
  return (

    <div className='container'>

        <div className='head'>
            <div className='logo'>
                <h1>LOGO</h1>
            </div>
            <Search/>
            <Cart/>
        </div>

        <Nav/>
    </div>
    
  )
}

export default Header