import React from "react";
import '../assets/styles/Card.css'
import DefaultImage from '../assets/images/DefaultImage.png'

const Card = (props) => {

    const image = props.image ? props.image : DefaultImage;
    const clickHandler = () => {
        if (props.link)
            window.location.href = props.link; 
    }

    return (
        <div className={'Card'}> 
            <img className = "Logo" src={image}/>
            <h5>{props.name}</h5>
            <h6>{props.description}</h6>
            <button onClick={clickHandler}> Learn More</button>
        </div>

    )
}

export default Card;