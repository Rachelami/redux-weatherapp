import { takeEvery, put, call } from 'redux-saga/effects'
import { fetchCities, fetchcurrentWeather, fetchfiveDaysForecasts } from './api/fetchApi'

import { FETCH_CITIES_REQUEST } from './getCity/getCityTypes'
import { FETCH_CURRENT_WEATHER_REQUEST } from './getCurrentWeather/getCurrentWeatherTypes'
import { FETCH_FIVE_DAYS_FORECASTS_REQUEST } from './getFiveDaysForecasts/getFiveDaysForecastsTypes'
import { ADD_FAVORITE, DELETE_FAVORITE } from './getFavorite/getFavoriteTypes'
import { SET_FAVORITE_CITY, RESET_FAVORITE_CITY } from './getFavoriteCity/getFavoriteCityTypes'

import { fetchCitiesSuccess, fetchCitiesFailure } from './getCity/getCityActions'
import { fetchcurrentWeatherSuccess, fetchcurrentWeatherFailure } from './getCurrentWeather/getCurrentWeatherActions'
import { fetchfiveDaysForecastsSuccess, fetchfiveDaysForecastsFailure } from './getFiveDaysForecasts/getFiveDaysForecastsActions'
import { addToFavorite, removeFromFavorite } from './getFavorite/getFavoriteActions'
import { setFavoriteSagaCity, resetFavoriteSagaCity } from './getFavoriteCity/getFavoriteCityActions'


function* handleGetCitiesRequest(action) {
    const citiesAutoComplete = yield call(fetchCities, action.payload)
    if (typeof (citiesAutoComplete) === "object") {
        yield put(fetchCitiesSuccess(citiesAutoComplete))
    } else {
        yield put(fetchCitiesFailure(citiesAutoComplete))
    }
}

function* handleGetCurrentWeatherRequest(action) {
    const cityCurrentWeather = yield call(fetchcurrentWeather, action.key)
    if (typeof (cityCurrentWeather) === "object") {
        yield put(fetchcurrentWeatherSuccess(cityCurrentWeather, action.key, action.locationName))
    } else {
        yield put(fetchcurrentWeatherFailure(cityCurrentWeather))
    }
}

function* handleGetFiveDayForcastRequest(action) {
    const fiveDaysForecasts = yield call(fetchfiveDaysForecasts, action.key, action.presentFahrenheit)
    if (typeof (fiveDaysForecasts) === "object") {
        yield put(fetchfiveDaysForecastsSuccess(fiveDaysForecasts))
    } else {
        yield put(fetchfiveDaysForecastsFailure(fiveDaysForecasts))
    }
}

function* handleAddToFavorite(action) {
    yield put(addToFavorite(action.payload))
}

function* handleRemoveFromFavorite(action) {
    yield put(removeFromFavorite(action.payload))
}

function* handleSetFavoriteCity(action) {
    yield put(setFavoriteSagaCity(action.payload))
}

function* handleResetFavoriteCity() {
    yield put(resetFavoriteSagaCity())
}

function* rootSaga() {
    yield takeEvery(FETCH_CITIES_REQUEST, handleGetCitiesRequest)
    yield takeEvery(FETCH_CURRENT_WEATHER_REQUEST, handleGetCurrentWeatherRequest)
    yield takeEvery(FETCH_FIVE_DAYS_FORECASTS_REQUEST, handleGetFiveDayForcastRequest)
    yield takeEvery(ADD_FAVORITE, handleAddToFavorite)
    yield takeEvery(DELETE_FAVORITE, handleRemoveFromFavorite)
    yield takeEvery(SET_FAVORITE_CITY, handleSetFavoriteCity)
    yield takeEvery(RESET_FAVORITE_CITY, handleResetFavoriteCity)
}

export default rootSaga