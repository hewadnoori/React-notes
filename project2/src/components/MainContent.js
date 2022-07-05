import React from "react";
import img from "../reactjs-icon-2.png"
export default function MainContent() {
    return (
        <div className="main-content">
            <div>
                <h1>Fun facts about React</h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>

            <div>
                <img src={img} alt="react logo"></img>
            </div>
        </div>
    )
}