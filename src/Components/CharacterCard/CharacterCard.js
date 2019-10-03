//Task 10: Capstone Project - Memory Game - CharacterCard.js

//This component returns a Character Card.

import React from 'react';
import './CharacterCard.css';

function CharacterCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          onClick={props.handleClick}
          alt={props.name}
          src={props.image}
          name={props.name}
        />
      </div>
    </div>
  );
}

export default CharacterCard;
