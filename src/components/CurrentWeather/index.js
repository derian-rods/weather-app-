import React from 'react'
import { useSelector } from 'react-redux'

export const CurrentWeather = () => {
    const {current, name} = useSelector(state => state.weather.data)
    return (
        <div className='temp' translate='no'>
            {/* <i  role='button' className="fas fa-search-location fa-lg"></i> */}
            <div className='temp__header'>
                <span className='temp__title'>{name}</span> 
                <i className="fas fa-map-pin"></i>
            </div>
            <div className='temp__body'>
                <h2 className='temp__body-title'>{`${current.temp_c}ºC`}</h2>
                {/* <img className='temp__body-img' src={current.condition.icon} alt={current.condition.text} /> */}
                <span className='temp__body-text'>{`${current.condition.text}`}</span>
            </div>
        </div>
    )
}
