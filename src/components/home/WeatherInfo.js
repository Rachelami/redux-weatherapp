import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

const Weatherinfo = ({ weatherData }) => {
    const [presentFahrenheit, setPresentFahrenheit] = useState(false)

    const capitalize = (string) => {
        if (typeof string !== 'string') return ''
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    useEffect(() => {
        console.log(weatherData)
    })

    return (
        <>
            {weatherData &&
                weatherData.currentWeather[0] &&
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
        </>
    )
}

const mapStateToProps = state => {
    return {
        citiesData: state.cities,
        weatherData: state.weather
    }
}

export default connect(
    mapStateToProps
)(Weatherinfo)