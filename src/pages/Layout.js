import React from "react"
import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {

    const location = useLocation();

    const isActive = (pathname) => {
        return pathname === location.pathname ? 'active' : '';
    }
    return (
        <>
            <div className="nav-container">
                <nav>
                <ul>
                    <li>
                        <img id="profile" src="profile.jpg" alt="profile_picture"/>
                    </li>
                    <li>
                        <Link  className={isActive('/')} id="nav-item" to="/">Home</Link>
                    </li>
                    <li>
                        <Link  className={isActive('/bio')} id="nav-item" to="/bio">Biography</Link>
                    </li>
                    <li>
                        <Link  className={isActive('/skills')} id="nav-item" to='/skills'>Skills</Link>
                    </li>
                    <li>
                        <Link  className={isActive('/projects')} id="nav-item" to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link  className={isActive('/interests')} id="nav-item" to="/interests">Interests</Link>
                    </li>
                </ul>
            </nav>
            </div>
            
            <Outlet />
        </>
    )
}

export default Layout