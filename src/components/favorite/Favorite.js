import React from 'react'
import FavoriteCard from './FavoriteCard'
import { connect } from 'react-redux'

const Favorite = favorites => {


    return (
        <div className="favorite-container">
            {favorites && favorites.favorites && favorites.favorites.favorites.map(favoriteCity =>
                <FavoriteCard key={favoriteCity.Key} cityWeatherInfo={favoriteCity} favoriteCity={favoriteCity} />
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        favorites: state.favorites
    }
}

export default connect(
    mapStateToProps,
)(Favorite)