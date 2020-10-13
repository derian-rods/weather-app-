import React from 'react'
import { useSelector } from 'react-redux';
import { CurrentWeather } from '../../components/CurrentWeather';
import { DailyWather } from '../../components/DailyWeather';
import { HourlyWeather } from '../../components/HourlyWeather';
import { HumidityWeather } from '../../components/HumidityWeather';
import { WindWeather } from '../../components/WindWeather';
import { LoadingScreen } from '../LoadingScreen';
export const Main = () => {
    
    const {data} = useSelector(state => state.weather);


    return (
            <>
              {  (!data) ? 
                    <LoadingScreen />
                : 
                (
                    <>
                <h1>This site web is only for mobile</h1>        
                <main translate='no'>
                  <CurrentWeather />
                  <HourlyWeather />
                  <DailyWather />
                  <WindWeather />
                  <HumidityWeather />
                </main>
                    </>
                )}
                

            </>

    )
}
