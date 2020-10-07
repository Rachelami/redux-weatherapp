import React, { useState, useEffect } from 'react'
import { FormControl } from 'react-bootstrap'
import { CityContext } from '../CityContext'
import Toast from '../Toast'
import { fetchCities } from '../../redux/getCity/getCityActions'
import { useDispatch } from 'react-redux'

const Search = (props) => {
    const [input, setInput] = useState('tel aviv')
    const [errorMessage, setErrorMessage] = useState('')
    const [, setCityContext] = React.useContext(CityContext)
    const dispatch = useDispatch() //added

    const handleChange = (event) => {
        setCityContext('')
        if (verifyInput(event.target.value)) {
            setInput(event.target.value)
        } else {
            setErrorMessage('Invalid Character')
        }
    }

    useEffect(() => {
        // props.specifySearch(input)
        dispatch(fetchCities(input)) //added

    }, [input])

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