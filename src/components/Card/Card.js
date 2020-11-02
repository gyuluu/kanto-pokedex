import React from 'react';
import './Card.css';

export const Card = (props) => {

    return(
        <div className="card-container">
            <img alt={props.pokemon.name} src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`} />
            <h1>{props.pokemon.name}</h1>
        </div>
    );
}