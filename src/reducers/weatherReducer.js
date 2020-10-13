import {types} from '../types/types'

export const weather = (state={}, action) => {
    switch(action.type){
        case types.startGetData:
            return{
                ...state,
                data: action.payload
            }
        case types.setCoords:
            return{
                ...state,
                coords: action.payload
            }
        default:
            return state
    }
}