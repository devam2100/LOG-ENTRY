import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand" href="#">LOG ENTRY</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link">Create Entry</Link>
          </li>
         
          <li className="nav-item">
            <Link to="/all" className="nav-link ">All Entries</Link>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
  )
}

export default Navbar
