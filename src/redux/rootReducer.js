import { combineReducers } from 'redux'
import citiesReduser from './getCity/getCityReducer'
import currentWeatherReducer from './getCurrentWeather/getCurrentWeatherReducer'
import fiveDaysForecastsReducer from './getFiveDaysForecasts/getFiveDaysForecastsReducer'
import getFavoriteReducer from './getFavorite/getFavoriteReducer'

const rootReducer = combineReducers({ 
    cities: citiesReduser,
    weather: currentWeatherReducer,
    fiveDaysForecasts: fiveDaysForecastsReducer,
    favorites: getFavoriteReducer

})

export default rootReducer