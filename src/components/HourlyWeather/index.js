import React from 'react';
import moment from 'moment'
import { useSelector } from 'react-redux';

export const HourlyWeather = () => {
    
    const state = useSelector(state => state.weather.data.summaryDayHour)
    const {hour} = state[0]
    return (
        <div className='hourly'>
            <div className='hourly__container' translate='no'>
                {
                    hour.map(hourly => (
                        <div className='hourly__card' key={hourly.time_epoch}>
                        <div className='hourly__header'>
                            <span className='hourly__time'>{moment.unix(hourly.time_epoch).format('LT')}</span>
                        </div>
                        <div className='hourly__body'>
                            <img className='hourly__icon' src={hourly.condition.icon} alt={hourly.condition.text}/>
                            <div className='hourly__footer'>
                            <span className='hourly__description'>{hourly.condition.text}</span>
                            <span className='hourly__temp'>{`${Math.round(hourly.temp_c)}ºC`}</span>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>            
        </div>
    )
}
