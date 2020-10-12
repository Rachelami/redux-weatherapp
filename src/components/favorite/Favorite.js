import React, { useState, useEffect } from 'react'
import FavoriteCard from './FavoriteCard'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { fetchcurrentWeather } from '../../redux/getCurrentWeather/getCurrentWeatherActions'
import Toast from '../Toast'

const Favorite = ({ favorites, weather }) => {
    const [fetchData, setFetchData] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        if (weather.error) {
            setErrorMessage(weather.error)
        }
    })

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
                        dispatch(fetchcurrentWeather(favoriteCity.Key, favoriteCity.LocalizedName))
                    }

                    // let e = weather.currentWeather.filter(CityWeather =>
                    //     // console.log(typeOfCityWeather[2], favoriteCity.Key))
                    //     CityWeather[2] !== favoriteCity.Key)

                    //     console.log(e)

                    //     if (e) {
                    //     dispatch(fetchcurrentWeather(favoriteCity.Key, favoriteCity.LocalizedName))
                    // }

                } else {
                    dispatch(fetchcurrentWeather(favoriteCity.Key, favoriteCity.LocalizedName))
                }
            }


                //     weather.map(cityWeather =>{
                //         cityWeather.Key !== favoriteCity.Key
                //     })
                // }



                // console.log("i guess there is no weather.id anymore. what can replace it? ")
                // console.log(weather)
                // weather.id !== favoriteCity.Key &&
                // dispatch(fetchcurrentWeather(favoriteCity.Key, favoriteCity.LocalizedName))}
            )
        }
        // setFetchData(true)
    }, [])

    // console.log(favorites.favorites.length)
    // console.log(weather.currentWeather.length)

    return (
        <div className="favorite-container">
            {weather && weather.currentWeather.length > 0 && weather.currentWeather.map((favoriteCity) =>
                <FavoriteCard key={favoriteCity[0][0].Key} cityWeatherInfo={favoriteCity[0][0]} />
            )}
                            {errorMessage && <Toast error={errorMessage} resetError={setErrorMessage} />}

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