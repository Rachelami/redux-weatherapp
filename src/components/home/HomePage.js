import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
// import { CityContext } from '../CityContext'
// import FavoriteCityDetails from '../favorite/FavoriteCityDetails'
// import Toast from '../Toast'
import CitiesContainer from './CitiesContainer'

const HomePage = ({ searchString }) => {
    const [presentFahrenheit, setPresentFahrenheit] = useState(false)
    // const [errorMessage, setErrorMessage] = useState('')
    // const [cityContext] = React.useContext(CityContext)

    const switchToFahrenheit = (event) => {
        setPresentFahrenheit(event.target.checked)
    }

    return (
        <>
            <Form className="switch-to-fahrenheit-continer">
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label={`Switch ${presentFahrenheit ? "Back To Celsius" : "To Fahrenheit"}`}
                    onChange={switchToFahrenheit}
                />
            </Form>

            <CitiesContainer/>

            {/* {cityContext && <FavoriteCityDetails presentFahrenheit={presentFahrenheit} />}
            {errorMessage && <Toast error={errorMessage} resetError={setErrorMessage} />} */}
        </>
    )
}

export default HomePage