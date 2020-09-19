import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <Link className='Nav-link' to={'/'}><i className="fas fa-list"/></Link>
            <h3>Shopping App</h3>
            <Link className='Nav-link' to={'/cart'}><i className="fas fa-shopping-cart"/></Link>
        </div>
    );
};

export default Navbar;