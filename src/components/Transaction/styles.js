import styled from 'styled-components'

export const TransactionDiv = styled.div`
    width:340px;
    height: 35px;
    align-items: center;
    display: flex;
    border: 2px black solid;
    margin: 2px 0;
    border-radius:5px;
    justify-content: space-between;
    background-color: #E7F6FF;
    @media (min-width: 361px){
        min-width: 50rem;
        height: 50px;
       
    }
`

export const TransactionAmount = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;
    margin: 0 5px; 
`

export const TransactionConcept = styled.div`
    margin: 0 5px; 
`
