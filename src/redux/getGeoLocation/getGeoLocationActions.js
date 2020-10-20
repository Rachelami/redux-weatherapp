import {
    FETCH_GEOLOCATION_REQUEST,
    FETCH_GEOLOCATION_SUCCESS,
    FETCH_GEOLOCATION_FAILURE
} from './getGeoLocationTypes'

export const fetchGeoLocationRequest = (coords) => {
    return {
        type: FETCH_GEOLOCATION_REQUEST,
        coords: coords
    }
}

export const fetchGeoLocationSuccess = locationInfo => {
    return {
        type: FETCH_GEOLOCATION_SUCCESS,
        payload: locationInfo
    }
}

export const fetchGeoLocationFailure = error => {
    return {
        type: FETCH_GEOLOCATION_FAILURE,
        payload: error
    }
}