import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'


export default function Nav() {
    // const Logo = 'https://cdn.thewirecutter.com/wp-content/media/2021/05/mechanicalkeyboards-2048px-2x1-0036.jpeg?auto=webp&quality=75&crop=2:1&width=1024'
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <button 
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">
                </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav links">
                    <Link className="nav1 nav-item nav-link active" to="/"> 
                    Home 
                    <span className="sr-only">(current)</span></Link>

                    <Link className="nav2 nav-item nav-link active" to="/Kamaree"> 
                    About Me 
                    <span className="sr-only">(current)</span></Link>
                </div>
            </div>
        </nav>

    )
}
