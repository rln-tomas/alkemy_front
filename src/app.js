import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Test } from './components/test'
import { TestR } from './components/testR'

export const App = () => {
  return (
        <BrowserRouter>
          <Switch>
            <Route exact path='/test' component={TestR} />
            <Route exact path='/' component={Test} />

          </Switch>
        </BrowserRouter>
  )
}
