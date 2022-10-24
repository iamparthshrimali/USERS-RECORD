import React from 'react'
import "../css/notfound.css"
import {NavLink} from "react-router-dom"
function NotFound() {
  return (
    <div className='display-1'>
       <h1 className='heading'>page not found</h1>
       <div>
        click <NavLink to="/" >Here</NavLink> to back  to Home
       </div>
    </div>
  )
}

export default NotFound
