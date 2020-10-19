import React, { useState, useEffect } from 'react'
import {Wrapper} from '../../styled/favorite'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchcurrentWeather, fetchcurrentWeatherRequest } from '../../redux/getCurrentWeather/getCurrentWeatherActions'
import FavoriteCard from './FavoriteCard'
import Toast from '../Toast'

const Favorite = ({ favorites, weather, presentFahrenheit }) => {
    const [errorMessage, setErrorMessage] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        if (weather.error) {
            setErrorMessage(weather.error)
        }
    },[weather])

    useEffect(() => {
        if (favorites.favorites) {
            favorites.favorites.forEach(favoriteCity => {
                let isExist = false
                if (weather.currentWeather.length > 0) {
                    for (let i = 0; i < weather.currentWeather.length; i++) {
                        if (weather.currentWeather[i][2] === favoriteCity.Key) {
                            isExist = true
                        }
                    }
                    if (!isExist) {
                        dispatch(fetchcurrentWeatherRequest(favoriteCity.Key, favoriteCity.LocalizedName))
                        //DONE dispatch(fetchcurrentWeather(favoriteCity.Key, favoriteCity.LocalizedName))
                    }
                } else {
                    dispatch(fetchcurrentWeatherRequest(favoriteCity.Key, favoriteCity.LocalizedName))
                    //DONE dispatch(fetchcurrentWeather(favoriteCity.Key, favoriteCity.LocalizedName))
                }
            })
        }
    }, [])

    return (
        <Wrapper>
            {weather.currentWeather.length > 0 && weather.currentWeather.map((favoriteCity) =>
                <FavoriteCard key={favoriteCity[0][0].Key} cityWeatherInfo={favoriteCity[0][0]} presentFahrenheit={presentFahrenheit}/>
            )}
            {errorMessage && <Toast error={errorMessage} resetError={setErrorMessage} />}
        </Wrapper>
    )
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites,
        weather: state.weather
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchcurrentWeatherRequest: () => dispatch(fetchcurrentWeatherRequest()),
        // fetchcurrentWeather: () => dispatch(fetchcurrentWeather()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Favorite)