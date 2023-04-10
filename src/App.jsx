import React from 'react'
import Home from './screens/Home.jsx'
import Menu from './screens/Menu.jsx'
import Login from './screens/Login.jsx'
import BookTable from './screens/BookTable.jsx'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element = {<Home />} />
          <Route exact path='/menu' element = {<Menu />} />
          <Route exact path='/login' element = {<Login />} />
          <Route exact path='/booktable' element = {<BookTable />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App