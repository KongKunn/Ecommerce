import React from 'react'
import { Link } from 'react-router-dom'
import './User.css'

const User = () => {
  return (
    <>
    <Link to ="/profile"  style={{textDecoration:'none',color:'#fff'}}> 
    <button class="btn"> Profile
    </button>
    </Link>
    

    </>
    
  )
}

export default User