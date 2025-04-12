import React from 'react'
import './Weathercard.css'
import SearchBar from './SearchBar'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import humidity_icon from '../assets/humidity.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'



const WeatherCard = () => {
  return (
    <div className='weathercard'>
      <SearchBar/>
      <img src={clear_icon} alt='' className='weather-icon'/>
      <p className='temperature'>16</p>
      <p className='location'>London</p>
      <div className='weather-data'>
        <div className='col'>
            <img src={humidity_icon} alt='' />
            <div>
                <p>91%</p>
                <span>Humidity</span>
            </div>
        </div>
        <div className='col'>
            <img src={_icon} alt='' />
            <div>
                <p>3.5km/hr</p>
                <span>Windspeed</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
