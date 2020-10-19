import { takeEvery, put, take, call, select } from 'redux-saga/effects'

import { FETCH_CITIES_REQUEST } from './getCity/getCityTypes'
import { FETCH_CURRENT_WEATHER_REQUEST } from './getCurrentWeather/getCurrentWeatherTypes'
import { FETCH_FIVE_DAYS_FORECASTS_REQUEST } from './getFiveDaysForecasts/getFiveDaysForecastsTypes'
import { ADD_FAVORITE, DELETE_FAVORITE } from './getFavorite/getFavoriteTypes'

import { fetchCities, fetchcurrentWeather, fetchfiveDaysForecasts } from './api/fetchApi'

import { fetchCitiesSuccess, fetchCitiesFailure } from './getCity/getCityActions'
import { fetchcurrentWeatherSuccess, fetchcurrentWeatherFailure } from './getCurrentWeather/getCurrentWeatherActions'
import { fetchfiveDaysForecastsSuccess, fetchfiveDaysForecastsFailure } from './getFiveDaysForecasts/getFiveDaysForecastsActions'
import { addToFavorite, removeFromFavorite } from './getFavorite/getFavoriteActions'

function* handleGetCitiesRequest(action) {
    try {
        const citiesAutoComplete = yield call(fetchCities, action.payload)
        yield put(fetchCitiesSuccess(citiesAutoComplete))
    } catch (err) {
        console.log('err!!!!!!!!!!!!!!!!!!')
        console.error(err)
        yield put(fetchCitiesFailure(err.message))
    }
}

function* handleGetCurrentWeatherRequest(action) {
    try {
        const cityCurrentWeather = yield call(fetchcurrentWeather, action.key)
        yield put(fetchcurrentWeatherSuccess(cityCurrentWeather, action.key, action.locationName))
    } catch (err) {
        yield put(fetchcurrentWeatherFailure(err.message))
    }
}

function* handleGetFiveDayForcastRequest(action) {
    try {
        const fiveDaysForecasts = yield call(fetchfiveDaysForecasts, action.key, action.presentFahrenheit)
        yield put(fetchfiveDaysForecastsSuccess(fiveDaysForecasts))
    } catch (err) {
        yield put(fetchfiveDaysForecastsFailure(err.message))
    }
}
function* handleAddToFavorite(action) {
        yield put(addToFavorite(action.payload))

}
function* handleRemoveFromFavorite(action) {
        yield put(removeFromFavorite(action.payload))

}

function* rootSaga() {
    yield takeEvery(FETCH_CITIES_REQUEST, handleGetCitiesRequest)
    yield takeEvery(FETCH_CURRENT_WEATHER_REQUEST, handleGetCurrentWeatherRequest)
    yield takeEvery(FETCH_FIVE_DAYS_FORECASTS_REQUEST, handleGetFiveDayForcastRequest)
    yield takeEvery(ADD_FAVORITE, handleAddToFavorite)
    yield takeEvery(DELETE_FAVORITE, handleRemoveFromFavorite)
}

export default rootSaga