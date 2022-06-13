import React from "react"
import "./App.css"
import {Route } from "react-router-dom"


import Nav from "./components/nav"
import About from "./Pages/about"
import Details from "./Pages/details"
import Stocks from "./Pages/stocks"
import Home from "./Pages/home"



function App () { 
  return (
    <div className="App">
      <Nav/>

      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/about'>
        <About/>
      </Route>
      <Route path="/stocks">
        <Stocks/>
      </Route>
      <Route path='/stocks/:symbol'
      render={(routerProps) => <Details {...routerProps} />}
      />

    </div>
  )
}



export default App;
