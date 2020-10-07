import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchcurrentWeather } from '../../redux/getCurrentWeather/getCurrentWeatherActions'
import { fetchfiveDaysForecasts } from '../../redux/getFiveDaysForecasts/getFiveDaysForecastsActions'
import { handleFavorites } from '../../redux/getFavorite/getFavoriteActions'
import Weatherinfo from './WeatherInfo'
import { connect } from 'react-redux'


const CityName = ({ city, presentFahrenheit, fiveDaysForecasts, weatherData }) => {
    const [isFavorite, setIsFavorite] = useState(false)
    const dispatch = useDispatch() //added

    // useEffect(() => {
    //     console.log(favorites)
    //     console.log(favorites.favorites)
    //     const favoriteArray = favorites.favorites
    //     if (isFavorite) {
    //         favoriteArray.push("city weather info")
    //     } else {
    //         const cityIndex = favoriteArray.indexOf("city weather info")
    //         favoriteArray.splice(cityIndex, 1);

    //         // var colors = ["red", "blue", "car", "green"];
    //         // var carIndex = colors.indexOf("car");//get  "car" index
    //         // //remove car from the colors array
    //         // colors.splice(carIndex, 1); // colors = ["red","blue","green"]
    //     }
    //     dispatch(handleFavorites(favoriteArray))

    // }, [isFavorite])

    const favorite = () => {
        setIsFavorite(isFavorite ? false : true)
    }

    const callFetchWeather = (locationKey) => {
        console.log(locationKey)
        dispatch(fetchcurrentWeather(locationKey)) //added
        dispatch(fetchfiveDaysForecasts(locationKey)) //added
    }

    return (
        <div className="location-card">
            <button className="city-name" onClick={() => callFetchWeather(city.Key)}>
                <div className="flex space">
                    <div>{city.LocalizedName}</div>
                    <img src={isFavorite ? process.env.PUBLIC_URL + '/images/yellow-star.png' : process.env.PUBLIC_URL + '/images/star.png'} className="favorite-logo" onClick={() => favorite()} />
                </div>
                {fiveDaysForecasts && weatherData &&
                    <Weatherinfo fiveDaysForecasts={fiveDaysForecasts} weatherData={weatherData} />
                }
            </button>
        </div>
    )
}



const mapStateToProps = state => {
    return {
        // citiesData: state.cities,
        weatherData: state.weather,
        fiveDaysForecasts: state.fiveDaysForecasts,
        favorites: state.favorites
    }
}

const mapDispatchToProps = dispatch => {
    return {
        //fetchCities: () => dispatch(fetchCities()), // fetchCities() is the action creator
        fetchcurrentWeather: () => dispatch(fetchcurrentWeather()), // fetchcurrentWeather() is the action creator
        fetchfiveDaysForecasts: () => dispatch(fetchfiveDaysForecasts()), // fetchcurrentWeather() is the action creator
        handleFavorites: () => dispatch(handleFavorites()) // fetchcurrentWeather() is the action creator
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityName)