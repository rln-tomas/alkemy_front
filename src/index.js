import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import Context from './Context'
import axios from 'axios'
axios.defaults.headers.common.authorization = sessionStorage.getItem('token')

ReactDOM.render(
<Context.Provider>
    <App />
</Context.Provider>, document.getElementById('app'))
