import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';




const Nav = () => {

    const navStyle = {
        color: 'white'
    };

    return (
    <nav>
        
      <Link style={navStyle} to="/"> <h3>Home</h3></Link> 
        <ul className="nav-links">
        <Link style={navStyle} to="/api">
            <li>Api</li>
            </Link>
            <Link style={navStyle} to="/arrays">
                <li>Arrays</li>
            </Link>
            <Link style={navStyle} to="/about">
            <li>About</li>
            </Link>
           
        </ul>
    </nav>
    )
}

export default Nav;