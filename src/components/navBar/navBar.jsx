import React from "react";
import { Link } from "react-router-dom";
import "./navBar.scss"

const NavBar = () => {
    return (
        <header>
            <nav className="nav">
                <div className="nav__head">
                    <div className="nav__head__logo">
                        <Link to = '/'>SALAS <br/>El Cine de tu Barrio</Link>
                    </div>
                </div>          
            </nav>
        </header>
    )
}


export default NavBar