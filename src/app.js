import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Layout } from './Layout'
import Context from './Context'

export const App = () => {
  return (
        <Context.Consumer>
          {
            ({ isAuth }) => {
              return (
              <BrowserRouter>
                <Layout>
                  <Switch>
                    <Route exact path='/' component={() => {
                      if (!isAuth) {
                        return <Redirect to='/login' />
                      }
                      return <Home />
                    }} />
                    <Route exact path='/login' component={() => {
                      if (isAuth) {
                        return <Redirect to='/' />
                      }
                      return <Login />
                    }} />
                    <Route exact path='/register' component={() => {
                      if (isAuth) {
                        return <Redirect to='/' />
                      }
                      return <Register />
                    }} />
                  </Switch>
                </Layout>
              </BrowserRouter>)
            }
          }
        </Context.Consumer>

  )
}
