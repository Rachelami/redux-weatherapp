import styled from 'styled-components'

export const Wrapper = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    justify-content: center;
    @media (max-width: 670px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
    /* @media (max-width:500px) {
        margin: 0px !important;
        margin-top: 20px !important;
    } */
    @media (max-width:650px) {
        flex-wrap: wrap;
    }
`
export const Strip = styled.button`
    width: 72vw;
    border-radius: 20px;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:focus {
        outline: none;  
    }
    @media (max-width: 670px) {
        width: 93vw !important;
    }
`
