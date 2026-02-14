import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navItems = [
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/practice', label: 'Practice' },
    { to: '/companies', label: 'Companies' },
    { to: '/resume', label: 'Resume' },
    { to: '/settings', label: 'Settings' },
]

function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(prev => !prev)
    const closeMenu = () => setMenuOpen(false)

    return (
        <nav className="nav" id="main-nav">
            <div className="nav-inner">
                <NavLink to="/" className="nav-brand" onClick={closeMenu}>
                    Placement Ready
                </NavLink>

                <button
                    className="nav-hamburger"
                    id="nav-hamburger"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                >
                    <span className={`nav-hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                    <span className={`nav-hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                    <span className={`nav-hamburger-line ${menuOpen ? 'open' : ''}`}></span>
                </button>

                <ul className={`nav-links ${menuOpen ? 'nav-links--open' : ''}`} id="nav-links">
                    {navItems.map(item => (
                        <li key={item.to}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) =>
                                    `nav-link ${isActive ? 'nav-link--active' : ''}`
                                }
                                onClick={closeMenu}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            {menuOpen && (
                <div className="nav-overlay" onClick={closeMenu}></div>
            )}
        </nav>
    )
}

export default Navigation
