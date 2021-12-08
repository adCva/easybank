import React from 'react';

function AboutCard(props) {
    return (
        <div className="card-wrapper">
            <img src={`./images/${props.cardLogo}`} alt={props.cardAlt} />
            <h3>{props.cardTitle}</h3>
            <p className="card-desc">{props.cardDescription}</p>
        </div>
    )
}

export default AboutCard;