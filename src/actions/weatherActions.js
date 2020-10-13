import Swal from 'sweetalert2';
import {types} from '../types/types';


export const setData = (data) =>({
    type: types.startGetData,
    payload: data
})  

export const startGetCoords = () => {
    return  (dispatch) => {
        navigator.geolocation.getCurrentPosition(success, error);
        function success (location) {
            const coords = {
                lat: Math.round(location.coords.latitude * 100) / 100,
                long: Math.round(location.coords.longitude * 100) / 100
            }
            dispatch(setCoords(coords))
            dispatch(startGetInfo())
        } 
        function error (){
            Swal.fire('Oops...', 'GPS or geolocation is disabled, please enable it and reload', 'error')
        }  
    }
}
export const setCoords = (coords) =>({
    type: types.setCoords,
    payload: coords
})

export const startGetInfo  = () => {
    return async (dispatch, getState) => {
     try {
        const {lat, long} = getState().weather.coords
        const rep =  await fetch(`https://api.weatherapi.com/v1/forecast.json?key=5c4c901768b94769858104345201010&q=${lat},${long}&days=7`)
        const rep2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=24bace733a5b81a90ac834a66b7df627`)
        const {name} = await rep2.json();
        const {current, forecast} = await rep.json();
        const {temp_c, condition} = current;
        const {forecastday} = forecast;
        const summaryDayHour = forecastday.map(dayHour => {
            const {date_epoch, day:weather, hour} = dayHour
            return {
                date_epoch,
                weather,
                hour
            }
        })
        const dataRef = {
                name,
                current:{
                    temp_c,
                    condition
                },
                summaryDayHour
        }
        dispatch(setData(dataRef))
     } catch (err) {
        console.log(err)
    }
    }
}
