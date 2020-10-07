import { combineReducers } from 'redux'
import citiesReduser from './getCity/getCityReducer'
import currentWeatherReducer from './getCurrentWeather/getCurrentWeatherReducer'

const rootReducer = combineReducers({ 
    cities: citiesReduser,
    weather: currentWeatherReducer
})

export default rootReducer