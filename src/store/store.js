import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {weather} from '../reducers/weatherReducer'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  weather
});

export const store = createStore(
    reducers, 
    composeEnhancers(
        applyMiddleware(thunk)
    )
    )