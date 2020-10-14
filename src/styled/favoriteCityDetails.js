import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    border: 1px solid black;
    padding: 10px;
    margin: 10px 10%;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: white;
`
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    padding: 20px;
    top: 0px;
`
export const DayNight = styled.img`
    width: 100px;
    height: auto;
    border-radius: 20px;
    border: 3px solid black;
    @media (max-width: 670px) {
        display: none;
    }
`
export const MiddleWrapper = styled.div`
    display: flex;
    align-items: center;
`