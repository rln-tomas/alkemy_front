import styled from 'styled-components'
import { IconButton } from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'

export const DivModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DivModalContainer = styled.div`
    position: relative;
    top: 10rem;
    background-color: #ffffff;
    padding: 1rem;
    width: 300px;
    
    @media screen and (min-width: 361px){
        width: 400px;
    }
`
export const ButtonCloseModal = styled(IconButton)`
    position: absolute;
    top: -10px;
    right: -240px;
    @media screen and (min-width: 361px){
        right: -340px;
    }
`

export const ButtonCloseIcon = styled(HighlightOffIcon)`
    position: absolute; 
    top:0; 
    right: 0;
    color: red; 
`
