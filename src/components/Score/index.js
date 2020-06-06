import React from "react";

function Score(props) {
    return (
        <div>
            <div className="card" >
                <div className="card-body">
                    <h3>Total Score: {props.score}</h3>
                    <h3>High Score: {props.highscore}</h3>
                </div>
            </div>
        </div>
    )
}

// style={{ width: 18 rem }}>   Can't figure out how to add this style

export default Score;