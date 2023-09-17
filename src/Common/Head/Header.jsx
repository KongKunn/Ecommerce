import React from 'react'
import Search from '../Search/Search'
import Nav from '../Nav/Nav'
import './Header.css'
import Cart from '../Cart/Cart'
import User from '../Profile/User/User'
import { Link } from 'react-router-dom'
const Header = () => {
  return (

    <div className='container'>

        <div className='head'>
            <div className='logo'>
              <Link to="/" style={{textDecoration:'none',color:'#fff'}}>
              <h1>LOGO</h1>
              </Link>
               
            </div>
            <Search/>
            <User/>
            <Cart/>
        </div>

        <Nav/>
    </div>
    
  )
}

export default Header