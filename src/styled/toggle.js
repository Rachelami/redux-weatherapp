import styled from 'styled-components'

export const Celsius = styled.div`
    width: 80px;
    ${props => {
        if (props.dark) {
            return `color: ${props.theme.darkgray}`
        }
    }}
`
export const Fahrenheit = styled.div`
    width: 85px;
    ${props => {
        if (props.dark) {
            return `color: ${props.theme.darkgray}`
        }
    }}
`
export const SwitchWrapper = styled.div`
    display: flex;
    justify-content: center;
    ${props => {
        if (props.degree) {
            return `padding-top: 20px;`
        }
        if (props.dark) {
            return `padding-right: 10px;`
        }
    }}
` 