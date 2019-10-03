//Task 10: Capstone Project - Memory Game - Wrapper.js

//This component serves as a "Wrapper"/container for all the other components of the Memory Game.

import React from 'react';
import './Wrapper.css';

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
