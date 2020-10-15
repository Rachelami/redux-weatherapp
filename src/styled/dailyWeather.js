import styled from 'styled-components'

export const OneDay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    border-radius: ${props => props.theme.cardRadius};
    width: 18%;
    padding: 10px 5px;
    background-color: moccasin;
    @media (max-width: 970px) {
        width: 100%;
        flex-direction: row;
        padding: 0px 5px;
        justify-content: space-between;
        margin-bottom: 2px;
    }
`
export const WeatherIcon = styled.img`
    height: 50px;
`
export const TempWrapper = styled.div`
    display: flex;
`
