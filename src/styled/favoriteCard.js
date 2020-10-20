import styled from 'styled-components'
import { Card } from 'react-bootstrap'


export const FavoriteCardWrapper = styled(Card)`
    ${props => {
        if (props.dark) {
            return `background-color: ${props.theme.darkgray} !important;`
        }
    }}
`