import React, { useState } from 'react';
import './Search.css';
import search_icon from '../assets/search.png';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const search = () => {
    if (city !== '') {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <img
        src={search_icon}
        onClick={search}
      />
    </div>
  );
};

export default SearchBar;
