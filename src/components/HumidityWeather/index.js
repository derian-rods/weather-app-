import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useSelector } from 'react-redux';



export const HumidityWeather = () => {
    
    const {avghumidity, uv, avgtemp_c} = useSelector(state => state.weather.data.summaryDayHour[0].weather);
    return (
        <div>
              <div className='humidity' >
            <div className='humidity__container'>
                <div className='humidity__card'>
                    <div className='humidity__icon'>
                        <h4>Humidity</h4>
                       <CircularProgressbar value={Math.round(avghumidity)}  maxValue={100} text={`${avghumidity}%`} styles={buildStyles({rotation: 0.70, textColor: '#fff',trailColor: '#fff',  pathColor: ` #6dd5fa`
})}/>
                    </div>
                    <div className='humidity__info'>
                        <p> <strong>Feels like</strong>  <small>{`${avgtemp_c}ºC`}</small> </p>
                        <p> <strong>UV index</strong>  <small>{uv}</small></p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
