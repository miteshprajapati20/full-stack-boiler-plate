import { useState } from 'react';
import '../style/Header.css';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header-container">
            <h2 className='header-title'>
                <NavLink to='/' className='header-item'>MedTracker</NavLink>
            </h2>

            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FiX /> : <FiMenu />}
            </button>

            <nav className={`header-menu ${menuOpen ? "open" : ""}`}>
                <NavLink to='/' className='header-item' onClick={() => setMenuOpen(false)}>Home</NavLink>
                <NavLink to='/login' className='header-item' onClick={() => setMenuOpen(false)}>Login</NavLink>
                <NavLink to='/register' className='header-item' onClick={() => setMenuOpen(false)}>Register</NavLink>
            </nav>
        </header>
    );
}

