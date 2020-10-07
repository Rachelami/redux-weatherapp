import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchCities } from '../../redux/getCity/getCityActions'
import { fetchcurrentWeather } from '../../redux/getCurrentWeather/getCurrentWeatherActions'
import { useSelector, useDispatch } from 'react-redux'

function CitiesContainer({ weatherData, citiesData, fetchCities }) {
    const [expended, setExpended] = useState(false)
    const [presentFahrenheit, setPresentFahrenheit] = useState(false)

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
        setExpended(true)

    }

    const capitalize = (string) => {
        if (typeof string !== 'string') return ''
        return string.charAt(0).toUpperCase() + string.slice(1)
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
                                        {weatherData &&
                                        weatherData.currentWeather[0]&&
                                            <div className="weather-strip-container">
                                                <div className="weather-strip">
                                                    <div className="weather-info-container">
                                                        {/* < div>{capitalize(cityWeather.cityName)}</ div> */}
                                                        <div className="flex">
                                                            <img src={process.env.PUBLIC_URL + `/images/weather-icons/${weatherData.currentWeather[0].WeatherIcon}.svg`} className="temp-logos" />
                                                            <div>{capitalize(weatherData.currentWeather[0].WeatherText)}</div>
                                                        </div>
                                                        {presentFahrenheit ?
                                                            <div>{Math.round(weatherData.currentWeather[0].Temperature.Imperial.Value)}&deg;F</div> :
                                                            <div>{Math.round(weatherData.currentWeather[0].Temperature.Metric.Value)}&deg;C</div>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        }
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