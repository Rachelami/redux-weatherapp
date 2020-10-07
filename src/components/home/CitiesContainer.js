import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchCities } from '../../redux/getCity/getCityActions'
// import { fetchcurrentWeather } from '../../redux/getCurrentWeather/getCurrentWeatherActions'
// import { fetchfiveDaysForecasts } from '../../redux/getFiveDaysForecasts/getFiveDaysForecastsActions'
// import { handleFavorites } from '../../redux/getFavorite/getFavoriteActions'
// import { Button } from 'react-bootstrap'
import CityName from './CityName'

function CitiesContainer({ citiesData, fetchCities }) {

    useEffect(() => {
        fetchCities()
    }, [])

    return (
        citiesData.loading ? <h2>Loading...</h2> :
            citiesData.error ? <h2>{citiesData.error}</h2> :
                <div>
                    <h2>Cities List</h2>
                    <div>{
                        citiesData.cities &&
                        citiesData.cities.map(city =>
                            <>
                            {console.log("city!!!!!!!!!!!!!!!!!!!")}
                            {console.log(city.Key)}
                            <CityName key={city.Key} city={city}/>
                            </>
                        )}
                    </div>
                    {/* {weatherData.currentWeather[0] && console.log(weatherData.currentWeather[0])} */}
                </div>
    )
}

const mapStateToProps = state => {
    return {
        citiesData: state.cities,
        // weatherData: state.weather,
        // fiveDaysForecasts: state.fiveDaysForecasts,
        // favorites: state.favorites
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCities: () => dispatch(fetchCities()), // fetchCities() is the action creator
        // fetchcurrentWeather: () => dispatch(fetchcurrentWeather()), // fetchcurrentWeather() is the action creator
        // fetchfiveDaysForecasts: () => dispatch(fetchfiveDaysForecasts()), // fetchcurrentWeather() is the action creator
        // handleFavorites: () => dispatch(handleFavorites()) // fetchcurrentWeather() is the action creator
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CitiesContainer)