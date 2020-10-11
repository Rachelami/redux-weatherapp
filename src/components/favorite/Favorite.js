import React from 'react'
import FavoriteCard from './FavoriteCard'
import { connect } from 'react-redux'

const Favorite = (favorites) => {

    console.log(favorites)
    console.log(favorites.favorites)
    console.log(favorites.favorites.favorites)

    // const favoriteCities = []
    // let storedFavoriteCities = localStorage.getItem('storedFavoriteCities')
    // storedFavoriteCities = storedFavoriteCities ? JSON.parse(storedFavoriteCities) : {}

    // for (const [key, value] of Object.entries(storedFavoriteCities)) {
    //     favoriteCities.push(
    //         <FavoriteCard key={key} cityName={key} cityWeatherInfo={value} />
    //     )
    // }

    return (
        <div className="favorite-container">
            {favorites&& favorites.favorites && favorites.favorites.favorites.map(favoriteCity =>
                <FavoriteCard key={favoriteCity.Key} cityWeatherInfo={favoriteCity} />
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // handleFavorites: () => dispatch(handleFavorites())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Favorite)