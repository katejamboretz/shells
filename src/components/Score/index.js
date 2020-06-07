import React from "react";
import "./style.css"

function Score(props) {
    return (
        <div>
            <div className="card text-center mx-auto m-3" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h4>Total Score: {props.score}</h4>
                    <h4>High Score: {props.highscore}</h4>
                </div>
            </div>
        </div>
    )
}


export default Score;