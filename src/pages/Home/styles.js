import styled from 'styled-components'

export const GlobalDiv = styled.div`
    display: flex;
    flex-direction: column; 
    max-width: 360px;
    max-height: 640px;
    justify-content: center;
    text-align: center;
    @media (min-width: 361px){
        max-width: 100%;
        max-height: 100%;
    }
`
export const Img = styled.img`
    display: none;
    @media screen and (min-width: 361px){
        display: flex;
    }
`
