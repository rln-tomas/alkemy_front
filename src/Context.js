import React, { createContext, useState } from 'react'
const Context = createContext()

const Provider = ({ children }) => {
  const auth = !!sessionStorage.getItem('token')
  const [isAuth, setIsAuth] = useState(auth)

  const value = {
    isAuth,
    activate: () => setIsAuth(true),
    deactivate: () => setIsAuth(false)
  }

  return (
    <Context.Provider value={value}>
        {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}
