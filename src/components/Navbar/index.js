import React, { useState } from 'react'
import { Nav, NavBtn, NavLink, NavBtnLink, Bars, NavDiv, Item, List } from './styles'
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import HistoryIcon from '@material-ui/icons/History'
import Context from '../../Context'

export const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const onClickMenu = () => {
    setShowSidebar(!showSidebar)
  }

  return (
        <Context.Consumer>
            {
                ({ isAuth, deactivate }) => {
                  const handleClick = (e) => {
                    sessionStorage.removeItem('token')
                    deactivate()
                    onClickMenu()
                  }
                  return (
                        <>
                        <NavDiv>
                            <NavLink to="/">
                                <MonetizationOnIcon fontSize="large" />
                            </NavLink>

                            <Bars onClick={onClickMenu} />
                            <div className={isAuth ? '' : 'navbar'}>
                                <NavBtn>
                                    <NavBtnLink to="/profile">
                                        <AccountCircleIcon />
                                        <h5>Profile</h5>
                                    </NavBtnLink>
                                    <NavBtnLink to="/history">
                                        <HistoryIcon />
                                        <h5>History</h5>
                                    </NavBtnLink>
                                    <NavBtnLink className="logout" to="/login" onClick={handleClick}>
                                        <ExitToAppIcon />
                                        <h5>Logout</h5>
                                    </NavBtnLink>
                                </NavBtn>
                            </div>
                        </NavDiv>
                        <Nav className={showSidebar ? '' : 'active'} >
                            <List className={isAuth ? '' : 'navbar'}>
                                <Item>
                                    <NavLink to="/profile">
                                        <AccountCircleIcon />
                                        <h5>Profile</h5>
                                    </NavLink>
                                </Item>
                                <Item>
                                    <NavLink to="/history">
                                        <HistoryIcon />
                                        <h5>History</h5>
                                    </NavLink>
                                </Item>
                                <Item>
                                    <NavBtnLink className="logout" to="/login" onClick={handleClick}>
                                        <ExitToAppIcon />
                                        <h5>Logout</h5>
                                    </NavBtnLink>
                                </Item>
                            </List>
                        </Nav>
                        </>
                  )
                }
            }

        </Context.Consumer>
  )
}
