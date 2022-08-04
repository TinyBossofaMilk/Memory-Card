import React, { useState } from "react";
import Scoreboard from './components/Scoreboard'
import CardSelection from "./components/CardSelection";
import GameOverScreen from "./components/GameOverScreen";
import './App.css';

function App() {
  const [cards, setCards] = useState([1, 2, 3, 4, 5]);
  const [history, setHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // const init = (() => {
  //   setCards([1, 2, 3, 4, 5]);
  //   setScore(0);
  // })();

  const collision = (selectedCard) => {
    if(history.indexOf(selectedCard) === -1){
      setHistory(history.push(selectedCard));
      setScore(score + 1);
      
      if(score === setHistory.length){
        setGameOver(true);
      }
    }
    else {
      setGameOver(true);
    }
  };

  const onCardClick = (e) => {

  };

  return (
    <div className="App">
      <Scoreboard score={score}/>
      <CardSelection cards={cards}/>
      <GameOverScreen />
    </div>
  );
}

export default App;
