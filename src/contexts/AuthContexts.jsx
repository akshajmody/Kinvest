import React, { useContext } from 'react'

const AuthContext = React.createContext()

export function useAith() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  return (
    <AuthContext.Provider>
      {children}
    </AuthContext.Provider>
  )
}
