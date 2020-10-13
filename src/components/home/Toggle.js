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
        <div className="toggle">
            <div  className="celsius">{presentFahrenheit && 'Celsius'}</div>
            <Form>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label= ''
                    onChange={switchToFahrenheit}
                />
            </Form>
            <div  className="fahrenheit">{!presentFahrenheit && 'Fahrenheit'}</div>
        </div>
    )
}

export default Toggle