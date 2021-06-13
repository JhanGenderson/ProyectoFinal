import React from 'react'
import {Switch, BrowserRouter as Router} from 'react-router-dom'
import NavTop from './Components/NavTop'
import Routes from './Routes'
import CarritoContextProvider from './Context/carrito'

export default function App() {
  return (
    <Router>
      <CarritoContextProvider>
         <NavTop/>
      <Switch>
        <Routes/>
      </Switch>
      </CarritoContextProvider>
    </Router>
  )
}
