import React from 'react'
import './Search.css'
const Search = () => {
  return (
    <div class="input-container">
      <input required="" placeholder="Search..." type="email"></input>
      <button class="invite-btn" type="button">
        <i class="fa fa-search"></i>
      </button> 
    </div>
  )
}

export default Search