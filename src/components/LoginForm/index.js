import React from 'react'
import { FormLogin, InputForm } from './styles'
import { IconButton } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import { useInputValue } from '../../Hooks/useInputValue'
import axios from 'axios'

export const LoginForm = ({ activateAuth }) => {
  const username = useInputValue('')
  const password = useInputValue('')

  const onSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:4000/users/login', {
      username: username.value,
      password: password.value
    }).then(res => {
      const token = 'Bearer ' + res.data.data.token
      sessionStorage.setItem('token', token)
      activateAuth()
    })
  }

  return (
        <FormLogin onSubmit={onSubmit}>
            <InputForm type="text" placeholder="Username" {...username} />
            <InputForm type="password" placeholder="Password" {...password} />
            <IconButton type='submit'>
              <AccountCircleIcon />Login
            </IconButton>
        </FormLogin>
  )
}
