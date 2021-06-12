import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'

export const NavDiv = styled.div`
    background: #000;
    height: 80px;
    max-width: 360px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    z-index: 10;
    && div {
        &.navbar{
            display: none; 
        }
    }
    @media (min-width: 361px){
        max-width: 100vw;
    }
`

export const Nav = styled.nav`
    background: #000;
    position:absolute;  
    right: 0px;
    height: 640px;
    width: 200px;
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    z-index: 10;
    transition:850ms;
    &.active{
        transition: 350ms;
        display: none;
    }
    @media (min-width: 361px){
        display: none;
    }

`
export const NavLink = styled(Link)`
    color: #fff; 
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 10vh;
    cursor: pointer;

    &.active{
        color: #15cdfc;
    }

`

export const NavMenu = styled.div`
    display: none; 

    @media (min-width: 361px){
        display: flex; 
        align-items: center;
        margin-right: -24px;
    }
`
export const NavBtn = styled.nav`
    display: none;
    

    @media screen and (min-width: 361px){
        display: flex; 
        align-items: center;
        margin-right: 24px;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 6px;
    padding: 0 15px;
    color: #fff; 
    border: none; 
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    display: flex; 
    align-items: center;

    &:hover{
        transition: all 0.2s ease-in-out;
    }

    &.active{
        color: #15cdfc;
    }

    &.logout{
        padding: 0px 15px;   
        background: #FF0000;
        &.active{
        color:#fff; 
        }
    }
`

export const Bars = styled(MenuIcon)`
    display: block;
    position: absolute;
    max-width: 360px;
    top: 0; 
    color: #fff; 
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;

    @media screen and (min-width: 361px){
        visibility: hidden;
    }
`

export const Item = styled.li`
    color:#fff;
    list-style: none;
    display: flex;
    position: relative;
    font-size: large;
    justify-content: center;
    align-items: center;
    padding: 2px 0; 
    right:30px;
`

export const List = styled.ul`
    display:flex; 
    flex-direction:column;
    position:relative; 
    left:30px; 
    align-items: center;
    &.navbar{
        display:none; 
        visibility: hidden;
    }
`
