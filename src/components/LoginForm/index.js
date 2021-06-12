import React from 'react'
import { FormLogin, InputForm } from './styles'
import { IconButton } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

export const LoginForm = ({ onSubmit, title, username, password }) => {
  return (
        <FormLogin onSubmit={onSubmit}>
            <InputForm type="text" placeholder="Username" {...username} />
            <InputForm type="password" placeholder="Password" {...password} />
            <IconButton type='submit'>
              <AccountCircleIcon />{title}
            </IconButton>
        </FormLogin>
  )
}
