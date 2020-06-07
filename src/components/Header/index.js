import React from "react";
import "./style.css"

function Header() {
    return (
        <div className="jumbotron jumbotron-fluid text-center">
            <div className="container">
                <h1 className="display-4">Shells</h1>
                <br></br>
                <p className="lead">Click on the shells - random shells will earn a point.</p>
                <p className="lead">How many points can you earn in a row?</p>
            </div>
        </div>
    )
}

export default Header;