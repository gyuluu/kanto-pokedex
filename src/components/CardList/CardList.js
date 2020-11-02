import React from 'react';
import './CardList.css';
import {Card} from '../Card/Card.js';

export const CardList = (props) => {
    return (
        <div className="card-list">
            {
                props.pokemons.map((pokemon,index) =>
                <Card key={index} pokemon={pokemon} id={props.ids[index]}/>
                )
            }
        </div>
    );
}