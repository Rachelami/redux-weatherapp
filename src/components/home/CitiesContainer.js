import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchCities } from '../../redux/getCity/getCityActions'
import { fetchcurrentWeather } from '../../redux/getCurrentWeather/getCurrentWeatherActions'
import { useSelector, useDispatch } from 'react-redux'
import Weatherinfo from './WeatherInfo'

function CitiesContainer({ weatherData, citiesData, fetchCities }) {
    const dispatch = useDispatch() //added

    useEffect(() => {
        fetchCities()
    }, [])

    useEffect(() => {
        console.log(weatherData.currentWeather[0])
    })


    const callFetchWeather = (locationKey) => {
        console.log(locationKey)

        dispatch(fetchcurrentWeather(locationKey)) //added

    }



    return (
        citiesData.loading ? <h2>Loading...</h2> :
            citiesData.error ? <h2>{citiesData.error}</h2> :
                <>
                    <div>
                        <h2>Cities List</h2>
                        <div>{citiesData &&
                            citiesData.cities &&
                            citiesData.cities.map(city =>
                                <>
                                    <div className="location-card">
                                        <button key={city.key} onClick={() => callFetchWeather(city.Key)} >{city.LocalizedName}</button>
                                        
                                            <Weatherinfo />
                                      
                                    </div>
                                </>
                            )}</div>
                        {weatherData.currentWeather[0] && console.log(weatherData.currentWeather[0])}
                    </div>
                </>
    )
}

const mapStateToProps = state => {
    return {
        citiesData: state.cities,
        weatherData: state.weather
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCities: () => dispatch(fetchCities()), // fetchCities() is the action creator
        fetchcurrentWeather: () => dispatch(fetchcurrentWeather()) // fetchcurrentWeather() is the action creator
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CitiesContainer)