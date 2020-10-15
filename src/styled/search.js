import styled from 'styled-components'
import { FormControl } from 'react-bootstrap'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    padding: 0px 10px;
    position: relative;
`
export const Input = styled(FormControl)`
    border-radius: ${props => props.theme.cardRadius} !important;
    @media (min-width: 670px) {
        width: 50vw !important;
    }
`
export const MagnifyingGlass = styled.img`
    position: absolute;
    right: 7%;
    top: 10px;
    height: 20px;
    @media (min-width: 670px) {
        right: 27% !important;
    }
`