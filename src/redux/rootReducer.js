import { combineReducers } from 'redux'
import citiesReduser from './getCity/getCityReducer'
import currentWeatherReducer from './getCurrentWeather/getCurrentWeatherReducer'
import fiveDaysForecastsReducer from './getFiveDaysForecasts/getFiveDaysForecastsReducer'
import getFavoriteReducer from './getFavorite/getFavoriteReducer'
import getFavoriteCityReducer from './getFavoriteCity/getFavoriteCityReducer'
import darkViewReducer from './darkView/darkViewReducer'
import getGeoLocationReducer from './getGeoLocation/getGeoLocationReducer'

const rootReducer = combineReducers({
    cities: citiesReduser,
    weather: currentWeatherReducer,
    fiveDaysForecasts: fiveDaysForecastsReducer,
    favorites: getFavoriteReducer,
    favoriteCity: getFavoriteCityReducer,
    isDark: darkViewReducer,
    geoLocation: getGeoLocationReducer
})

export default rootReducer