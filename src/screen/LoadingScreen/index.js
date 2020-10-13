import React, { useEffect } from 'react'
import { useDispatch} from 'react-redux';
import { startGetCoords} from '../../actions/weatherActions';
import earth from '../../assets/040-earth.svg';

export const LoadingScreen = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetCoords());
    }, [dispatch])
    
    return (
        <div className='add__city' translate='no'>
            <div className='add__city-container'>
                <div className='add__city-brading'>
                    <img className='add__city-logo' src={earth} alt='Weather-app' />
                </div>
            </div>
        </div>
    )
}
 