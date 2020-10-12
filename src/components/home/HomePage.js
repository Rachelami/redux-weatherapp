import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import CitiesContainer from './CitiesContainer'

const HomePage = () => {
    const [presentFahrenheit, setPresentFahrenheit] = useState(false)

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

            <CitiesContainer presentFahrenheit={presentFahrenheit}/>

        </>
    )
}

export default HomePage