import React from 'react'
import './App.css'
import Menu from './components/menu/index'
import Pendency from './components/pendency/index'

function App() {
  return (
    <div className="mensus">
      <div>
        <Menu />
      </div>
      <div className="container">
        <Pendency />
      </div>
    </div>
  )
}

export default App
