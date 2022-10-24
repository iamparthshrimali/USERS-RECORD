import React from 'react'
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound.js"
import AddUser from "./components/users/AddUser.js"
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js"
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
       <Router>
       <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/about'  element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/user">
              <Route path="add-user" element={<AddUser/>} />
              <Route path="edit-user" element={<h2>hello</h2>} />
            </Route>
            <Route path="/*" element={<NotFound/>}/>
          </Routes>
       </Router>

    </>
  )
}

export default App
