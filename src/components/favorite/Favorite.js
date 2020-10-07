import React from 'react'
import FavoriteCard from './FavoriteCard'

const Favorite = () => {
    const favoriteCities = []
    let storedFavoriteCities = localStorage.getItem('storedFavoriteCities')
    storedFavoriteCities = storedFavoriteCities ? JSON.parse(storedFavoriteCities) : {}

    for (const [key, value] of Object.entries(storedFavoriteCities)) {
        favoriteCities.push(
            <FavoriteCard key={key} cityName={key} cityWeatherInfo={value} />
        )
    }

    return (
        <div className="favorite-container">
            {favoriteCities}
        </div>
    )
}

export default Favorite