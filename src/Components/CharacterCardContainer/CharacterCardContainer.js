//Task 10: Capstone Project -  Memory Game - CharacterCardContainer.js

/*
This component contains the game functionality/logic of the Memory Game, and returns all the Character Cards.
*/

import React, { Component } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import characters from '../../characters.json';
import shuffle from 'shuffle-array';

class CharacterCardContainer extends Component {
  // Set initial state
  state = {
    characters,
    score: 1,
    selected: []
  };

  // Handle for when a character is clicked
  handleClick = event => {
    const name = event.target.name;

    // This checks if a character is already in the  'selected' array
    if (this.state.selected.indexOf(name) === -1) {
      /* If not:
       It is pushed into the 'selected' array,
       The user is informed that he/she guessed correctly, and
       The score is updated
      */
      this.setState({ selected: [...this.state.selected, name] });
      document.getElementById('guess').innerHTML = 'You guessed correctly!';
      this.updateScore();
    //If a character that is not in the 'selected' array is selected/clicked and the score is updated to 12, the 'winGame()' function will be called.
      if (this.state.score === 12) {
        this.winGame();
      }
      this.shuffleCharacters();
    } 
     //If a character that is already in the 'selected' array is selected/clicked again, the 'endGame()' function will be called.
    else if(this.state.selected.indexOf !== -1) {
      this.endGame();
    }
  };

  // Function to update score
  updateScore = () => {
    this.setState({ score: this.state.score + 1 });
    this.props.updateCurrentScore(this.state.score);
  };

  // Function to shuffle Character Card
  shuffleCharacters = () => {
    this.setState({ characters: shuffle(this.state.characters) });
    this.setState({characters});
  };

  // Function to end the game
  endGame = () => {
    alert(`Game Over :( \n\nScore: ${this.state.score - 1}/12 \n\nClick "OK" to Restart.`);
    this.resetGame();
  };

  // Function for when player wins
  winGame = () => {
    document.getElementById('guess').innerHTML = ' ';
    alert(`You Win :) \n\nScore: ${this.state.score}/12 \n\nClick "OK" to Play Again.`);
    this.props.updateHighScore(this.state.score + 1);
    this.setState({ score: 1, selected: [] });
    this.props.updateCurrentScore(0);
  };

  // Function to reset the game
  resetGame = () => {
    document.getElementById('guess').innerHTML = ' ';
    this.props.updateHighScore(this.state.score);
    this.setState({ score: 1, selected: [] });
    this.props.updateCurrentScore(0);
  };

  render() {
    return (
      <div className="main-container">
    {/*Here the 'array.Map() method is used to return all the Character Cards.*/}
        {characters.map(character => (
          <CharacterCard
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            endGame={this.endGame}
            handleClick={this.handleClick}
            score={this.state.score}
          />
        ))}
      </div>
    );
  }
}

export default CharacterCardContainer;
