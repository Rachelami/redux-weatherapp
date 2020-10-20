import React, { useEffect, useState } from 'react'
import { useDispatch, connect } from 'react-redux'
import { fetchGeoLocationRequest } from '../../redux/getGeoLocation/getGeoLocationActions'
import CityStrip from './CityStrip'
import FavoriteCityDetails from '../favorite/FavoriteCityDetails'
import Toast from '../Toast'

function CitiesContainer({ cities, presentFahrenheit, favoriteCity, geoLocation }) {
    const [errorMessage, setErrorMessage] = useState('')
    const [showFavoriteCard, setShowFavoriteCard] = useState(false)
    const [coords, setCoords] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getCoordinates, handleLocationError);
        } else {
            setErrorMessage("Geolocation is not supported by this browser.")
        }
    }, [])

    useEffect(() => {
        if (geoLocation.error) {
            setErrorMessage(geoLocation.error)
        }
    }, [geoLocation])

    useEffect(() => {
        if (coords) {
            dispatch(fetchGeoLocationRequest(coords))
        }
    }, [coords])

    const getCoordinates = (position) => {
        const latitude = position.coords.latitude.toString()
        const longitude = position.coords.longitude.toString()
        setCoords(latitude + "," + longitude)
    }

    const handleLocationError = (error) => {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                setErrorMessage("User denied the request for Geolocation.")
                break;
            case error.POSITION_UNAVAILABLE:
                setErrorMessage("Location information is unavailable.")
                break;
            case error.TIMEOUT:
                setErrorMessage("The request to get user location timed out.")
                break;
            case error.UNKNOWN_ERROR:
                setErrorMessage("An unknown error occurred.")
                break;
        }
    }

    useEffect(() => {
        if (cities.error) {
            setErrorMessage(cities.error)
        }
    }, [cities])

    useEffect(() => {
        if (favoriteCity.favoriteCity === undefined || favoriteCity.favoriteCity.length == 0) {
            setShowFavoriteCard(false)
        }
        else {
            setShowFavoriteCard(true)
        }
    }, [favoriteCity])

    return (
        <>
            {showFavoriteCard ?
                <FavoriteCityDetails presentFahrenheit={presentFahrenheit} /> :
                <div>
                    {
                        cities.cities.length !== 0 ?
                            cities.cities.map((city) =>
                                <CityStrip key={city.Key} city={city} presentFahrenheit={presentFahrenheit} />) :
                            (geoLocation.coords && !geoLocation.error) &&
                            <CityStrip key={geoLocation.coords.Key} city={geoLocation.coords} presentFahrenheit={presentFahrenheit} />
                    }
                </div>}
            {errorMessage && <Toast error={errorMessage} resetError={setErrorMessage} />}
        </>
    )
}

const mapStateToProps = state => {
    return {
        cities: state.cities,
        favoriteCity: state.favoriteCity,
        geoLocation: state.geoLocation
    }
}

const mapDispatchToProps = dispatch => ({
    fetchGeoLocationRequest: () => dispatch(fetchGeoLocationRequest())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CitiesContainer)