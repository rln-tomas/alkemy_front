import React from 'react'
import { HeaderDiv, Balance } from './styles'
import AddBoxIcon from '@material-ui/icons/AddBox'
import { IconButton } from '@material-ui/core'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'

export const Header = ({ balance }) => {
  return (
        <HeaderDiv>
          <Balance>
            <AttachMoneyIcon fontSize='large' style={{ color: 'white' }} />
            {balance}
          </Balance>
          <IconButton style={{ color: 'white' }}>
           <AddBoxIcon fontSize='large' />
          </IconButton>
        </HeaderDiv>
  )
}
