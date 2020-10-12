import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchcurrentWeather } from '../../redux/getCurrentWeather/getCurrentWeatherActions'
import { fetchfiveDaysForecasts } from '../../redux/getFiveDaysForecasts/getFiveDaysForecastsActions'
import { addToFavorite, removeFromFavorite } from '../../redux/getFavorite/getFavoriteActions'
import Weatherinfo from './WeatherInfo'
import { connect } from 'react-redux'
import Toast from '../Toast'


const CityStrip = ({ city, favorites, presentFahrenheit, fiveDaysForecasts, weather }) => {
    const [isFavorite, setIsFavorite] = useState(false)
    const [expended, setExpended] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const dispatch = useDispatch()



    useEffect(() => {
        if (weather.error) {
            setErrorMessage(weather.error)
        }
        if (fiveDaysForecasts.error) {
            setErrorMessage(fiveDaysForecasts.error)
        }
    })

    useEffect(() => {
        favorites.favorites.map(favoriteCity => {
            if (favoriteCity.Key === city.Key)
                setIsFavorite(true)
        })
    }, [])

    useEffect(() => {
        if (expended) {
            dispatch(fetchfiveDaysForecasts(city.Key, presentFahrenheit))
        }
    }, [presentFahrenheit])


    const favorite = () => {
        if (isFavorite) {
            dispatch(removeFromFavorite(city.Key))
            setIsFavorite(false)

        } else {
            dispatch(addToFavorite(city))
            setIsFavorite(true)

        }
    }

    const callFetchWeather = (Key) => {
        console.log('onclick!!!!!!!')
        dispatch(fetchcurrentWeather(Key, city.LocalizedName))
        dispatch(fetchfiveDaysForecasts(Key, presentFahrenheit))
        setExpended(true)
    }

    return (
        <div className="location-card">
            <button className="city-name" onClick={() => callFetchWeather(city.Key)}>
                <div>{city.LocalizedName}</div>
                {weather.id === city.Key && fiveDaysForecasts && expended &&
                    < Weatherinfo fiveDaysForecasts={fiveDaysForecasts} weather={weather.currentWeather[0][0][0]} presentFahrenheit={presentFahrenheit} />}
            </button>
            <img src={isFavorite ? process.env.PUBLIC_URL + '/images/yellow-star.png' : process.env.PUBLIC_URL + '/images/star.png'} className="favorite-logo" onClick={() => favorite()} />
            {errorMessage && <Toast error={errorMessage} resetError={setErrorMessage} />}
        </div>
    )
}



const mapStateToProps = state => {
    return {
        weather: state.weather,
        fiveDaysForecasts: state.fiveDaysForecasts,
        favorites: state.favorites
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchcurrentWeather: () => dispatch(fetchcurrentWeather()),
        fetchfiveDaysForecasts: () => dispatch(fetchfiveDaysForecasts()),
        addToFavorite: () => dispatch(addToFavorite()),
        removeFromFavorite: () => dispatch(removeFromFavorite())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityStrip)