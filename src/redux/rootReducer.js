import { combineReducers } from 'redux'
import citiesReduser from './getCity/getCityReducer'
import currentWeatherReducer from './getCurrentWeather/getCurrentWeatherReducer'
import fiveDaysForecastsReducer from './getFiveDaysForecasts/getFiveDaysForecastsReducer'


const rootReducer = combineReducers({ 
    cities: citiesReduser,
    weather: currentWeatherReducer,
    fiveDaysForecasts: fiveDaysForecastsReducer
})

export default rootReducer