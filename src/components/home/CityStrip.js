import React, { useState, useEffect } from 'react'
import {Wrapper, Strip} from '../../styled/cityStrip'
import {Star} from '../../styled/shared'
import { useDispatch } from 'react-redux'
import { fetchcurrentWeather } from '../../redux/getCurrentWeather/getCurrentWeatherActions'
import { fetchfiveDaysForecasts } from '../../redux/getFiveDaysForecasts/getFiveDaysForecastsActions'
import { addToFavorite, removeFromFavorite } from '../../redux/getFavorite/getFavoriteActions'
import { connect } from 'react-redux'
import Weatherinfo from './WeatherInfo'
import Toast from '../Toast'


const CityStrip = ({ city, favorites, presentFahrenheit, fiveDaysForecasts, weather }) => {
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
        if (!expended) {
            dispatch(fetchcurrentWeather(Key, city.LocalizedName))
            dispatch(fetchfiveDaysForecasts(Key, presentFahrenheit))
            setExpended(true)
        }
    }

    return (
        <Wrapper>
            <Strip onClick={() => callFetchWeather(city.Key)}>
                <div>{city.LocalizedName}</div>
                {weather.id === city.Key && fiveDaysForecasts && expended &&
                    < Weatherinfo fiveDaysForecasts={fiveDaysForecasts} weather={weather.currentWeather[0][0][0]} presentFahrenheit={presentFahrenheit} />}
            </Strip>
            <Star cityStrip src={isFavorite ? process.env.PUBLIC_URL + '/images/yellow-star.png' : process.env.PUBLIC_URL + '/images/star.png'} onClick={() => favorite()} />
            {errorMessage && <Toast error={errorMessage} resetError={setErrorMessage} />}
        </Wrapper>
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