import styled from 'styled-components'

export const HeaderDiv = styled.div`
    max-width: 360px;
    background-color: rgb(0, 162, 255,.8);
    display: flex;
    flex-direction: column;
    max-height: 300px;
    border: 2px black solid;
    border-radius: 2px;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5rem;
    overflow: hidden;

    @media (min-width: 361px){
        min-width: 55rem;
        height: 200px;
        border-radius: 20px;
        margin: 2px auto; 
    }
   
`

export const Balance = styled.h1`
    color: white; 
    display: flex;
    align-items: center;
`
