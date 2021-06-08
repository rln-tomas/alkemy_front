import React, { useState } from 'react'
import { Nav, NavBtn, NavLink, NavBtnLink, Bars, NavDiv, Item, List } from './styles'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

export const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const onClickMenu = () => {
    setShowSidebar(!showSidebar)
  }
  return (
        <>
        <NavDiv>
            <NavLink to="/">
                <MonetizationOnIcon fontSize="large" />
            </NavLink>
            <Bars onClick={onClickMenu} />
        </NavDiv>
        <Nav className={showSidebar ? '' : 'active'} >
            <List>
                <Item>Algo</Item>
                <Item>Algo</Item>
                <Item>Algo</Item>
            </List>
            <NavBtn>
                <NavBtnLink to="/algo2">
                    <ExitToAppIcon />
                </NavBtnLink>
            </NavBtn>
        </Nav>
        </>
  )
}
