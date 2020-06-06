import React from "react";
// import image_1 from "../../images/aaron-burden-1rVQGaA_toU-unsplash.jpg"

function Card(props) {
    return (
        <div className="card">
            <img className="card-img-top" valuetest={props.valuetest} src={props.imageTest} alt={props.name}></img>
        </div >
    )
}
// style=" width: 18rem;">    Can't figure out how to add this style    {props.image}
export default Card;