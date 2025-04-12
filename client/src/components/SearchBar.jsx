import React from 'react'
import search_icon from '../assets/search.png'
import './Search.css'

const SearchBar = () => {
  return (
    <div className='searchbar'>
      <input type='text' placeholder='search'></input>
      <img src={search_icon}/>
    </div>
  )
}

export default SearchBar
