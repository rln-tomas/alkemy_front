import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { ContainerLogin, LoginDiv, Img } from '../Login/styles'
import { LoginForm } from '../../components/LoginForm'
import axios from 'axios'
import { useInputValue } from '../../Hooks/useInputValue'

export const Register = () => {
  const username = useInputValue('')
  const password = useInputValue('')
  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('https://limitless-oasis-80610.herokuapp.com/users/', {
      username: username.value,
      password: password.value
    }).then(res => history.push('/login'))
  }
  return (
        <ContainerLogin>
          <LoginDiv>
            <Img src='/public/cash_login.svg' />
            <LoginForm onSubmit={handleSubmit} title='Register' password={password} username={username} />
            Have an account? <Link to='/login'>Login here</Link>
          </LoginDiv>
        </ContainerLogin>
  )
}
