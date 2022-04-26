import React, { Component } from 'react'
import ProductList from './ProductList'
import Chefs from './Chefs'
import About from './About'
import Contact from './Contact'
import {Route, Routes} from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Futura web - Exploding Cakes</h1>
        <p>Esto es el Main</p>
        <Routes>
            <Route element={<ProductList/>} path='/'/>
            <Route element={<Chefs/>} path='/listachefs'/>
            <Route element={<About/>} path='/about'/>
            <Route element={<Contact/>} path='/contact'/>
        </Routes>
      </div>
    )
  }
}

export default App