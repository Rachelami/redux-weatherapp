import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { Celsius, Fahrenheit, SwitchWrapper } from '../../styled/toggle'
import { connect } from 'react-redux'

const Toggle = (props) => {
    const [presentFahrenheit, setPresentFahrenheit] = useState(false)
    const isDark = props.isDark.isDark

    const switchToFahrenheit = (event) => {
        setPresentFahrenheit(event.target.checked)
    }

    useEffect(() => {
        props.changeToggle(presentFahrenheit)
    }, [presentFahrenheit])

    return (
        <SwitchWrapper degree>
            <Celsius dark={isDark}>{presentFahrenheit && 'Celsius'}</Celsius>
            <Form>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    label=''
                    onChange={switchToFahrenheit}
                />
            </Form>
            <Fahrenheit dark={isDark}>{!presentFahrenheit && 'Fahrenheit'}</Fahrenheit>
        </SwitchWrapper>
    )
}

const mapStateToProps = state => {
    return {
        isDark: state.isDark
    }
}

export default connect(
    mapStateToProps,
)(Toggle)