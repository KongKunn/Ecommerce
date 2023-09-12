import React from 'react'
import './Nav.css'
const Nav = () => {
  return (
    <div className='container-nav'>
      <div className='infor'>
        <h4 style={{width:'100%',marginLeft:'2%'}}>Hotline : 08799.12855 | 165 Duong Quang Ham - Cau Giay - HN</h4>
      </div>
      <div className='categories'>
        <h3>Fashion</h3>
        <h3>Car</h3>
        <h3>Watch</h3>
        <h3>Healthy & Beauty</h3>
        <h3>Phone</h3>
      </div>
    </div>
  )
}

export default Nav