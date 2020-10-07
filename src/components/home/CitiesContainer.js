import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchCities } from '../../redux/getCity/getCityActions'
import { fetchcurrentWeather } from '../../redux/getCurrentWeather/getCurrentWeatherActions'
import { fetchfiveDaysForecasts } from '../../redux/getFiveDaysForecasts/getFiveDaysForecastsActions'
import { useDispatch } from 'react-redux'
import Weatherinfo from './WeatherInfo'
import { Button } from 'react-bootstrap'

function CitiesContainer({ fiveDaysForecasts, weatherData, citiesData, fetchCities }) {
    const dispatch = useDispatch() //added

    useEffect(() => {
        fetchCities()
    }, [])

    // useEffect(() => {
    //     console.log(weatherData.currentWeather[0])
    // })

    const callFetchWeather = (locationKey) => {
        dispatch(fetchcurrentWeather(locationKey)) //added
        dispatch(fetchfiveDaysForecasts(locationKey)) //added
    }

    return (
        citiesData.loading ? <h2>Loading...</h2> :
            citiesData.error ? <h2>{citiesData.error}</h2> :
                <div>
                    <h2>Cities List</h2>
                    <div>{
                        // citiesData &&
                        citiesData.cities &&
                        citiesData.cities.map(city =>
                            <div key={city.key} className="location-card">
                                <button onClick={() => callFetchWeather(city.Key)}>{city.LocalizedName}</button>
                                {fiveDaysForecasts && weatherData &&
                                    <Weatherinfo fiveDaysForecasts={fiveDaysForecasts} weatherData={weatherData} />
                                }
                            </div>
                        )}
                    </div>
                    {weatherData.currentWeather[0] && console.log(weatherData.currentWeather[0])}
                </div>
    )
}

const mapStateToProps = state => {
    return {
        citiesData: state.cities,
        weatherData: state.weather,
        fiveDaysForecasts: state.fiveDaysForecasts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCities: () => dispatch(fetchCities()), // fetchCities() is the action creator
        fetchcurrentWeather: () => dispatch(fetchcurrentWeather()), // fetchcurrentWeather() is the action creator
        fetchfiveDaysForecasts: () => dispatch(fetchfiveDaysForecasts()) // fetchcurrentWeather() is the action creator
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CitiesContainer)