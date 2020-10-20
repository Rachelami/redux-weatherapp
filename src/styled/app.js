import styled from 'styled-components'

export const AppWrap = styled.div`
    min-height: 100vh;
    text-align: center;
    padding-bottom: 10px;
    background-size: cover;
    ${props => {
        if (props.dark) {
            return `background-image: url('/images/compress-night.gif');`
        } else {
            return `background-image: url('/images/compress-day.gif');`
        }
    }}
`