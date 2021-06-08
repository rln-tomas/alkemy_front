import styled from 'styled-components'

export const HeaderDiv = styled.div`
    max-width: 340px;
    background-color: #00A2FF;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    max-height: 300px;
    border: 2px black solid;
    border-radius: 2px;
    padding: 1rem;
    justify-content: center;
    align-items: center;

    @media (min-width: 361px){
        max-width: 800px;
    }
   
`

export const Balance = styled.h1`
    color: white; 
    display: flex;
    align-items: center;
`
