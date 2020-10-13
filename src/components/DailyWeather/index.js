import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';

export const DailyWather = () => {
    const state = useSelector(state => state.weather.data.summaryDayHour)
    
    const daily = state.map(day => {
        const {date_epoch, weather} = day
        return{
            date_epoch,
            weather
        }
    });
    return (
        <div className='daily' translate='no'>
            <div className='daily__container'>
                {
                    daily.map(day => (
                        <div className='daily__card' key={day.date_epoch}>
                        <div className='daily__card-date'>                    
                            <span>{moment.unix(day.date_epoch).format('dddd, MMM. D')}</span>
                        </div>
                        <div className='daily__Card-icon'>
                            <img src={day.weather.condition.icon} alt={day.weather.condition.text}/>
                        </div>
                        <div className='daily__Card-temp'>
                        <span>{`${day.weather.avgtemp_c}ºC / ${day.weather.mintemp_c}ºC`}</span>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}
