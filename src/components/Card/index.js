import React from "react";
// import image_1 from "../../images/aaron-burden-1rVQGaA_toU-unsplash.jpg"

function Card(props) {
    return (
        <div className="col">
            <div className="card mx-auto m-3" style={{ width: '18rem' }}>
                <img className="card-img-top" valuetest={props.valuetest} src={props.imageTest} alt={props.name} id={props.id} key={props.id} name={props.name} onClick={props.onClick}></img>
            </div >
        </div>
    )
}
// style=" width: 18rem;">    Can't figure out how to add this style    {props.image}
export default Card;