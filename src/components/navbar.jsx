import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="#">Cassette</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav navbar-right-items">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/developer">Developer</Link>
                <Link className="nav-link" to="/history">History</Link>
                
            </div>
            </div>
        </div>
    </nav>

  )
}

export default Navbar;