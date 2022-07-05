import React from "react";
import logo from "../logo.svg"
function Header() {
    return (
        <header>
            <nav>
                <div className="header-logo">
                    <img src={logo} className="App-logo" alt="react-logo" width={100}></img>
                    <h3>ReactFacts</h3>
                </div>

                <div>
                    <p>React Course - Project 1</p>
                </div>
            </nav>
        </header >
    );
}

export default Header