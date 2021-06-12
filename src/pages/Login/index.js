import React from 'react'
import { LoginDiv, ContainerLogin, Img } from './styles'
import { LoginForm } from '../../components/LoginForm'
import Context from '../../Context'
import { useInputValue } from '../../Hooks/useInputValue'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const Login = () => {
  const username = useInputValue('')
  const password = useInputValue('')

  return (
    <Context.Consumer>
      {
        ({ activate }) => {
          const handleSubmit = (e) => {
            e.preventDefault()
            axios.post('https://limitless-oasis-80610.herokuapp.com/users/login', {
              username: username.value,
              password: password.value
            }).then(res => {
              const token = 'Bearer ' + res.data.data.token
              sessionStorage.setItem('token', token)
              activate()
            })
          }
          return (
            <ContainerLogin>
                <LoginDiv>
                  <Img src='/public/cash_login.svg' />
                  <LoginForm onSubmit={handleSubmit} title='Login' username={username} password={password} />
                  <Link to="/register">Register here</Link>
                </LoginDiv>
            </ContainerLogin>
          )
        }
      }
    </Context.Consumer>

  )
}
