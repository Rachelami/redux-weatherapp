import { combineReducers } from 'redux'
import citiesReduser from './getCity/getCityReducer'
import currentWeatherReducer from './getCurrentWeather/getCurrentWeatherReducer'
import fiveDaysForecastsReducer from './getFiveDaysForecasts/getFiveDaysForecastsReducer'
import getFavoriteReducer from './getFavorite/getFavoriteReducer'
import getFavoriteCityReducer from './getFavoriteCity/getFavoriteCityReducer'

const rootReducer = combineReducers({ 
    cities: citiesReduser,
    weather: currentWeatherReducer,
    fiveDaysForecasts: fiveDaysForecastsReducer,
    favorites: getFavoriteReducer,
    favoriteCity: getFavoriteCityReducer
})

export default rootReducer