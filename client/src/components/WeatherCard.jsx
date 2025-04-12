import React, { useState } from 'react';
import './Weathercard.css';
import SearchBar from './SearchBar';
import axios from 'axios';
import humidity_icon from '../assets/humidity.png';
import wind_icon from '../assets/wind.png';

const WeatherCard = () => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  const fetchWeather = async (cityName) => {
    if (!cityName) return;

    setLoading(true);
    setErr('');
    setWeather(null);

    try {
      const response = await axios.get(`http://localhost:4000/weather`, {
        params: { city: cityName },
      });
      setWeather(response.data);
      setLoading(false);
    } catch (error) {
      if (error.response?.data?.error) {
        setErr(error.response.data.error);
      } else {
        setErr('Something went wrong');
      }
      setLoading(false);
    }
  };

  const handleSearch = (cityName) => {
    setCity(cityName);
    fetchWeather(cityName);
  };

  return (
    <div className='weathercard'>
      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading weather...</p>}

      {!loading && err && (
        <p className='error-message'>{err}</p>
      )}

      {!loading && weather && (
        <>
          <img src={weather.icon} alt='Weather Icon' className='weather-icon' />
          <p className='temperature'>{weather.temperature}°C</p>
          <p className='location'>{city}</p>
          <div className='weather-data'>
            <div className='col'>
              <img src={humidity_icon}  />
              <div>
                <p>{weather.humidity}%</p>
                <span>Humidity</span>
              </div>
            </div>
            <div className='col'>
              <img src={wind_icon}  />
              <div>
                <p>{weather.windSpeed} km/hr</p>
                <span>Windspeed</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default WeatherCard;
