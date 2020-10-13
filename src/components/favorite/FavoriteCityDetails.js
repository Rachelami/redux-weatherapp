import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchfiveDaysForecasts } from '../../redux/getFiveDaysForecasts/getFiveDaysForecastsActions'
import { removeFromFavorite } from '../../redux/getFavorite/getFavoriteActions'
import DailyWeather from '../home/DailyWeather'
import Toast from '../Toast'


const FavoriteCityDetails = ({ presentFahrenheit, favoriteCity, fiveDaysForecasts }) => {
    const [errorMessage, setErrorMessage] = useState('')
    const [isFavorite, setIsFavorite] = useState(true)
    const dispatch = useDispatch()
    const cityCard = favoriteCity.favoriteCity

    const favorite = () => {
        setIsFavorite(isFavorite ? false : true)
        dispatch(removeFromFavorite(cityCard.Key))
    }

    useEffect(() => {
        if (fiveDaysForecasts.error) {
            setErrorMessage(fiveDaysForecasts.error)
        }
    }, [fiveDaysForecasts])

    useEffect(() => {
        dispatch(fetchfiveDaysForecasts(cityCard.Key, presentFahrenheit))
    }, [presentFahrenheit])

    const capitalize = (string) => {
        if (typeof string !== 'string') return ''
        return string.charAt(0).toUpperCase() + string.slice(1)
    }

    return (
        <>
            {isFavorite &&
                <div className="favorite-city-details-card">
                    <div className="favorite-city-details-image-continer">
                        <img src={cityCard.IsDayTime ? process.env.PUBLIC_URL + '/images/day.gif' : process.env.PUBLIC_URL + '/images/night.gif'} className="day-night" />
                        <img src={process.env.PUBLIC_URL + '/images/yellow-star.png'} className="star" onClick={() => favorite()} />
                    </div>
                    <div className="favorite-city-details-header">
                        <h2>{capitalize(cityCard.locationName)}</h2>
                        <img src={process.env.PUBLIC_URL + `/images/weather-icons/${cityCard.WeatherIcon}.svg`} className="temp-favorite-logo" />
                    </div>

                    {presentFahrenheit ?
                        <h4>{Math.round(cityCard.Temperature.Imperial.Value)}&deg;F</h4> :
                        <h4>{Math.round(cityCard.Temperature.Metric.Value)}&deg;C</h4>
                    }

                    < div className="five-days-container" >
                        {fiveDaysForecasts &&
                            fiveDaysForecasts.fiveDaysForecasts.DailyForecasts &&
                            fiveDaysForecasts.fiveDaysForecasts.DailyForecasts.map((dailyForecast) => (
                                <DailyWeather key={dailyForecast.Date} dailyForecast={dailyForecast} presentFahrenheit={presentFahrenheit} />
                            ))
                        }
                    </div>
                </div>
            }
            {errorMessage && <Toast error={errorMessage} resetError={setErrorMessage} />}
        </>
    )
}

const mapStateToProps = state => {
    return {
        favoriteCity: state.favoriteCity,
        fiveDaysForecasts: state.fiveDaysForecasts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchfiveDaysForecasts: () => dispatch(fetchfiveDaysForecasts()),
        removeFromFavorite: () => dispatch(removeFromFavorite())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FavoriteCityDetails)