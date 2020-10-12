import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchcurrentWeather } from '../../redux/getCurrentWeather/getCurrentWeatherActions'
import { fetchfiveDaysForecasts } from '../../redux/getFiveDaysForecasts/getFiveDaysForecastsActions'
import { addToFavorite, removeFromFavorite } from '../../redux/getFavorite/getFavoriteActions'
import Weatherinfo from './WeatherInfo'
import { connect } from 'react-redux'


const CityName = ({ city, favorites, presentFahrenheit, fiveDaysForecasts, weatherData, index }) => {
    const [isFavorite, setIsFavorite] = useState(false)
    const dispatch = useDispatch() //added

    // console.log("weatherData.id!!!!!!!!!!!!!!!!!!!!!!!")
    // console.log(weatherData.id)

    useEffect(() => {
        if (isFavorite) {
            dispatch(addToFavorite(city))
        } else {
            dispatch(removeFromFavorite(city.Key))
        }
    }, [isFavorite])

    // useEffect(() => {

    //     const favoriteArray = favorites.favorites
    //     if (isFavorite) {
    //         favoriteArray.push(city)
    //         console.log(city)
    //     } else {
    //         const cityIndex = favoriteArray.indexOf(city)
    //         favoriteArray.splice(cityIndex, 1);

    //         // var colors = ["red", "blue", "car", "green"];
    //         // var carIndex = colors.indexOf("car");//get  "car" index
    //         // //remove car from the colors array
    //         // colors.splice(carIndex, 1); // colors = ["red","blue","green"]
    //     }
    //     console.log("favoriteArray")
    //     console.log(favoriteArray)
    //     dispatch(addToFavorite(favoriteArray)) // [{},{}]

    // }, [isFavorite])

    const favorite = () => {
        setIsFavorite(isFavorite ? false : true)
    }

    const callFetchWeather = (Key) => {
        dispatch(fetchcurrentWeather(Key))
        dispatch(fetchfiveDaysForecasts(Key))
    }

    return (
        <div className="location-card">
            <button className="city-name" onClick={() => callFetchWeather(city.Key)}>
                <div>{city.LocalizedName}</div>
                {weatherData.id === city.Key && fiveDaysForecasts && weatherData &&
                    <Weatherinfo fiveDaysForecasts={fiveDaysForecasts} weatherData={weatherData} />
                }
            </button>
            <img src={isFavorite ? process.env.PUBLIC_URL + '/images/yellow-star.png' : process.env.PUBLIC_URL + '/images/star.png'} className="favorite-logo" onClick={() => favorite()} />
        </div>
    )
}



const mapStateToProps = state => {
    return {
        weatherData: state.weather,
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
)(CityName)