import styled from 'styled-components'

export const Flex = styled.div`
    display: flex;
`
export const FiveDaysContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 970px) {
        flex-direction: column
    }
`
export const Star = styled.img`
  position: absolute;
  height: 20px;
  transition: all 0.3s ease-out;
  transform: ${props => (props.rotate === 'true' ? `rotate(180deg)` : "")};
    ${props => {
        if (props.cityStrip) {
            console.log('city############')
            return `right: 14%;
                    top: 5px;`
        }
        if (props.favoriteCard) {
            return `right: 7px;
                    top: 7px;
                    z-index: 1;`
        }
        if (props.favoriteCityDetails) {
            return `right: 20px;`
        }
    }}
`
export const WeatherIcon = styled.img`
    height: 60px;
`