import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'

const Toggle = (props) => {
    const [presentFahrenheit, setPresentFahrenheit] = useState(false)

    const switchToFahrenheit = (event) => {
        setPresentFahrenheit(event.target.checked)
    }

    useEffect(() => {
        props.changeToggle(presentFahrenheit)
    }, [presentFahrenheit])

    return (
            <Form className="switch-to-fahrenheit-continer">
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label={`Switch ${presentFahrenheit ? "Back To Celsius" : "To Fahrenheit"}`}
                    onChange={switchToFahrenheit}
                />
            </Form>
    )
}

export default Toggle