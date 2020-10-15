import styled from 'styled-components'

// export const Wrappery = styled.div`
//     position: relative;
// `
export const Wrapper = styled.div`
    width: 70vw;
    border: 1px solid black;
    border-radius: 20px;
    padding: 5px 10px;
    margin: 5px;
    background-color: floralwhite;
    box-shadow: 4px 4px 5px #aaaaaa;
    &:focus {
        outline: none;
    }
    @media (max-width: 670px) {
        width: 90vw !important;
    }
`
export const WeatherWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width:500px) {
        flex-direction: column;
        align-items: center
    }
`
export const WeatherIcon = styled.img`
    height: 28px;
    @media (max-width:500px) {
    height: 80px !important;
    position: absolute;
    left: -6px;
    top: 25px;
    }
`
