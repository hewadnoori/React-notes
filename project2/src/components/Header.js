import React from "react";
import logo from "../logo.svg"
function Header() {
    return (
        <header>
            <nav>
                <img src={logo} className="App-logo" alt="react-logo" width={100}></img>
                <ul>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header >
    );
}

export default Header