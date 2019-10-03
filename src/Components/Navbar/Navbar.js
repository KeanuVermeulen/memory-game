//Task 10: Capstone Project - Memory Game - Navbar.js

//This component contains the Navbar of the Memory Game.

//The Navbar contains a 'Help Button' and  player Scores.

import React from 'react';
import './Navbar.css';

const Navbar = props => (
  <nav className="navbar">
    <ul>
      <li>
      <button className="helpBtn" onClick={help}>How to play</button> 
      </li>
      <li id="guess" />
      <li>
        Score: {props.score}/12 | Top Score: {props.highScore}/12
      </li>
    </ul>
  </nav>
);
//Help button functionality:
function help() {
  alert("This game is designed to test your memorization skills. The goal of the game is to click on each Disney charater only once.\n\nClick on \"OK\" to begin.\n\nGood Luck :)");
}

export default Navbar;
