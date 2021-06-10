import React from 'react'
import { LoginDiv, ContainerLogin, Img } from './styles'
import { LoginForm } from '../../components/LoginForm'
import Context from '../../Context'

export const Login = () => {
  return (
    <Context.Consumer>
      {
        ({ activate }) => {
          return (
            <ContainerLogin>
                <LoginDiv>
                  <Img src='/public/cash_login.svg' />
                  <LoginForm activateAuth={activate} />
                </LoginDiv>
            </ContainerLogin>
          )
        }
      }
    </Context.Consumer>

  )
}
