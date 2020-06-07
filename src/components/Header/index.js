import React from "react";
import "./style.css"

function Header() {
    return (
        <div className="jumbotron jumbotron-fluid text-center">
            <div className="container">
                <h1 className="display-4">Shells</h1>
                <p className="lead">Click on the shells - random shells will earn a point.</p>
            </div>
        </div>
    )
}

export default Header;