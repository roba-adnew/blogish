import React from 'react'
import NavBar from './Components/NavBar'
import Feed from './Components/Feed'
import { AuthProvider } from './Contexts/AuthContext'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Feed />
    </AuthProvider>
  )
}

export default App