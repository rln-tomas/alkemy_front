import styled from 'styled-components'

export const GlobalDiv = styled.div`
    overflow: scroll;   
    display: flex;
    flex-direction: column; 
    max-width: 360px;
    max-height: 640px;
    justify-content: center;
    text-align: center;
    ::-webkit-scrollbar {
        display: none;
    }
    @media (min-width: 361px){
        max-width: 100vw;
        flex-direction: row;
        justify-content: space-between;
    }
`
