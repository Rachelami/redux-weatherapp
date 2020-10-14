import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import {Celsius, Fahrenheit, SwitchWrapper} from '../../styled/toggle'

const Toggle = (props) => {
    const [presentFahrenheit, setPresentFahrenheit] = useState(false)

    const switchToFahrenheit = (event) => {
        setPresentFahrenheit(event.target.checked)
    }

    useEffect(() => {
        props.changeToggle(presentFahrenheit)
    }, [presentFahrenheit])

    return (
        <SwitchWrapper>
            <Celsius>{presentFahrenheit && 'Celsius'}</Celsius>
            <Form>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label=''
                    onChange={switchToFahrenheit}
                />
            </Form>
            <Fahrenheit>{!presentFahrenheit && 'Fahrenheit'}</Fahrenheit>
        </SwitchWrapper>
    )
}

export default Toggle