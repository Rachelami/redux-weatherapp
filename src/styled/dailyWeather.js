import styled from 'styled-components'

export const OneDay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    border-radius: 20px;
    width: 18%;
    padding: 10px 5px;
    background-color: moccasin;
    @media (max-width: 970px) {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        border: 1px solid black;
        border-radius: 20px;
        padding: 0px 5px;
        justify-content: space-between;
        background-color: moccasin;
        /* padding: 2px; */
    }
`
export const WeatherIcon = styled.img`
    height: 50px;
`
export const TempWrapper = styled.div`
    display: flex;
`
