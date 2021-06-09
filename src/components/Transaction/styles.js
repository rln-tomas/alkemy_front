import styled from 'styled-components'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

export const TransactionDiv = styled.div`
    width:360px;
    height: 40px;
    align-items: center;
    display: flex;
    border: 2px black solid;
    margin: 2px 0;
    border-radius:5px;
    justify-content: space-between;
    background-color: #E7F6FF;
    @media (min-width: 361px){
        min-width: 55rem;
        height: 60px;
       
    }
`

export const TransactionAmount = styled.div`
    display: flex; 
    align-items: center;
    justify-content: center;
    margin: 0 5px; 
`

export const TransactionConcept = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    font-size: 15px;

    @media screen and (min-width: 361px){
        && h4 {
            font-size:25px;
        }
    }
`

export const Edit = styled(EditIcon)`
    color:blue; 
`
export const Delete = styled(DeleteIcon)`
    color:red; 
`

export const TransactionActions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`
