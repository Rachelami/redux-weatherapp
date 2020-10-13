import React, { useState, useEffect } from 'react'
import { FormControl } from 'react-bootstrap'
import { fetchCities } from '../../redux/getCity/getCityActions'
import { resetFavoriteCity } from '../../redux/getFavoriteCity/getFavoriteCityActions'
import { useDispatch } from 'react-redux'
import Toast from '../Toast'

const Search = () => {
    const [input, setInput] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        if (input !== '')
            dispatch(fetchCities(input))
    }, [input])

    const handleChange = (event) => {
        if (verifyInput(event.target.value)) {
            setInput(event.target.value)
            dispatch(resetFavoriteCity())
        } else {
            setErrorMessage('Invalid Character')
        }
    }

    const verifyInput = (input) => {
        const acceptedCharacters = /^[A-Za-z\s]+$/
        if (input.match(acceptedCharacters) || !input) {
            return true
        }
        else {
            return false
        }
    }

    return (
        <>
            <div className="search-container">
                <FormControl type="text" placeholder="Search" value={input} className="search-field" onChange={handleChange} />
                <img src={process.env.PUBLIC_URL + '/images/magnifying-glass.png'} className="magnifying-glass" />
            </div>
            {errorMessage && <Toast error={errorMessage} resetError={setErrorMessage} />}
        </>
    )
}

export default Search