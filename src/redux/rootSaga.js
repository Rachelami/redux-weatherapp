import { takeEvery, put, take, call, select } from 'redux-saga/effects'
import { FETCH_CITIES_REQUEST } from './getCity/getCityTypes'
import { fetchCities } from './api/fetchCities'
import { fetchCitiesSuccess, fetchCitiesFailure } from './getCity/getCityActions'

function* handleGetCitiesRequest(action) {
    try {
        console.log('feching immm!!@#')
        const citiesAutoComplete = yield call(fetchCities, action.payload)
        yield put(fetchCitiesSuccess(citiesAutoComplete))
    } catch (err) {
        yield put(fetchCitiesFailure(err.message))
    }
}

function* rootSaga() {
    yield takeEvery(FETCH_CITIES_REQUEST, handleGetCitiesRequest)
}

export default rootSaga