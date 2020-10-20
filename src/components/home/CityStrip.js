import React, { useState, useEffect } from 'react'
import { Wrapper, Strip, CityName } from '../../styled/cityStrip'
import { Star } from '../../styled/shared'
import { useDispatch } from 'react-redux'
import { fetchcurrentWeatherRequest } from '../../redux/getCurrentWeather/getCurrentWeatherActions'
import { fetchfiveDaysForecastsRequest } from '../../redux/getFiveDaysForecasts/getFiveDaysForecastsActions'
import { addFavorite, deleteFavorite } from '../../redux/getFavorite/getFavoriteActions'
import { connect } from 'react-redux'
import Weatherinfo from './WeatherInfo'
import Toast from '../Toast'

const CityStrip = ({ city, favorites, presentFahrenheit, fiveDaysForecasts, weather, isDark }) => {
    const [isFavorite, setIsFavorite] = useState(false)
    const [expended, setExpended] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        favorites.favorites.map(favoriteCity => {
            if (favoriteCity.Key === city.Key)
                setIsFavorite(true)
        })
    }, [])

    useEffect(() => {
        if (weather.error) {
            setErrorMessage(weather.error)
        }
        if (fiveDaysForecasts.error) {
            setErrorMessage(fiveDaysForecasts.error)
        }
    }, [weather, fiveDaysForecasts])

    useEffect(() => {
        if (expended) {
            dispatch(fetchfiveDaysForecastsRequest(city.Key, presentFahrenheit))
        }
    }, [presentFahrenheit])

    const favorite = () => {
        if (isFavorite) {
            dispatch(deleteFavorite(city.Key))
            setIsFavorite(false)
        } else {
            dispatch(addFavorite(city))
            setIsFavorite(true)
        }
    }

    const callFetchWeather = (Key) => {
        if (!expended) {
            dispatch(fetchcurrentWeatherRequest(Key, city.LocalizedName))
            dispatch(fetchfiveDaysForecastsRequest(Key, presentFahrenheit))
            setExpended(true)
        }
    }

    return (
        <Wrapper>
            <Strip onClick={() => callFetchWeather(city.Key)}>
                <CityName dark={isDark.isDark}>{city.LocalizedName}</CityName >
                {weather.id === city.Key && fiveDaysForecasts && expended &&
                    < Weatherinfo fiveDaysForecasts={fiveDaysForecasts} weather={weather.currentWeather[0][0][0]} presentFahrenheit={presentFahrenheit} />}
            </Strip>
            <Star cityStrip rotate={isFavorite.toString()} src={isFavorite ? process.env.PUBLIC_URL + '/images/yellow-star.png' : process.env.PUBLIC_URL + '/images/star.png'} onClick={() => favorite()} />
            {errorMessage && <Toast error={errorMessage} resetError={setErrorMessage} />}
        </Wrapper>
    )
}

const mapStateToProps = state => {
    return {
        weather: state.weather,
        fiveDaysForecasts: state.fiveDaysForecasts,
        favorites: state.favorites,
        isDark: state.isDark
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchcurrentWeatherRequest: () => dispatch(fetchcurrentWeatherRequest()),
        fetchfiveDaysForecastsRequest: () => dispatch(fetchfiveDaysForecastsRequest()),
        addFavorite: () => dispatch(addFavorite()),
        deleteFavorite: () => dispatch(deleteFavorite())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityStrip)