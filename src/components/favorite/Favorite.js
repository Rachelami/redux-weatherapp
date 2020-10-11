import React, { useState, useEffect } from 'react'
import FavoriteCard from './FavoriteCard'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchcurrentWeather } from '../../redux/getCurrentWeather/getCurrentWeatherActions'

const Favorite = ({ favorites, weather }) => {
    const [fetchData, setFetchData] = useState([])

    const dispatch = useDispatch()


    useEffect(() => {
        if (favorites.favorites) {
            favorites.favorites.map(favoriteCity =>
                dispatch(fetchcurrentWeather(favoriteCity.Key, favoriteCity.LocalizedName))
            )
        }
    }, [])

    return (
        <div className="favorite-container">
            {weather && weather.currentWeather.length > 0 && weather.currentWeather.map((favoriteCity, index) =>
                <FavoriteCard key={favoriteCity[0][0].locationKey} cityWeatherInfo={favoriteCity[0][0]} index={index} />
            )}
        </div>
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
        fetchcurrentWeather: () => dispatch(fetchcurrentWeather()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Favorite)