import styled from 'styled-components'

export const NavLogos = styled.img`
    height: 20px;
    margin-right: 5px;
    ${props => {
        if (props.moon) {
            return `padding: 3px;`
        }
        if (props.nav) {
            return `margin-bottom: 5px;`
        }
        }} 
`
export const HeroloLogo = styled.img`
    height: 35px;
`