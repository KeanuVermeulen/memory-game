//Task 10: Capstone Project - Memory Game - App.js

//App.js contains all the components for the Memory Game App.

import React, { Component } from 'react';
import Wrapper from './Components/Wrapper/Wrapper';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import CharacterCardContainer from './Components/CharacterCardContainer/CharacterCardContainer';
import './App.css';

class App extends Component {
  // Set initial state
  state = {
    score: 0,
    highScore: 0
  };

  // Update current score
  updateCurrentScore = newScore => {
    this.setState({ score: newScore });
  };

  // Update high score
  updateHighScore = newHighScore => {
    if (newHighScore > this.state.highScore) {
      this.setState({ highScore: newHighScore - 1 });
    }
  };

  render() {
    return (
      <Wrapper>
        <Header/>
        <Navbar 
            score={this.state.score} 
            highScore={this.state.highScore} 
            updateCurrentScore={this.updateCurrentScore}
            updateHighScore={this.updateHighScore}
        />
        <CharacterCardContainer
          updateCurrentScore={this.updateCurrentScore}
          updateHighScore={this.updateHighScore}
        />
      </Wrapper>
    );
  }
}

export default App;
