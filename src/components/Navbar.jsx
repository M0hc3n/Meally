import React from 'react'
import {Link} from "react-router-dom"

const { useState } = React

function Navbar() {

  const [showNavList, setShowNavList] = useState(false)

  return (
    <nav>
      <Link to={'/'}> <h1 className='nav-title'>Meally</h1> </Link>
      
      <div className="hamburger-menu hide" onClick={() => setShowNavList( ! showNavList)}>
        <div className="bar"></div>
      </div>

      <div className={`ul-container ${ !showNavList ? "hide": ""}`}>
        <div className="x-icon">
          <i className="fa-solid fa-xmark" onClick={() => setShowNavList( false )}></i>
        </div>
          <ul>

            <li>
              <Link to={'/'} onClick={() => setShowNavList( false )}>Home</Link>
            </li>
            <li>
              <Link to={'/about'} onClick={() => setShowNavList( false )}>About</Link>
            </li>
              
          </ul>

      </div>
      
    </nav>
  )
}

export default Navbar