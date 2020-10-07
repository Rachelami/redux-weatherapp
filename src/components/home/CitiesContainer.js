import React, { useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { fetchCities } from '../../redux/getCity/getCityActions'

function CitiesContainer({ userInput, citiesData, fetchCities }) {
    useEffect(() => {
        fetchCities()
    }, [userInput]) //maybe [] its ok

    return (
        citiesData.loading ? <h2>Loading...</h2> :
            citiesData.error ? <h2>{citiesData.error}</h2> :
                <div>
                    <h2>Cities List</h2>
                    <div>{citiesData &&
                        citiesData.cities &&
                        citiesData.cities.map(city => <p>{city.LocalizedName}</p>)}</div>
                </div>
    )
}

const mapStateToProps = state => {
    return {
        citiesData: state.cities
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCities: () => dispatch(fetchCities()) // fetchCities() is the action creator
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CitiesContainer)