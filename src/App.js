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

  const isPreviouslySelected = (selectedCard) => {

  };

  const onCardClick = (e) => {
    console.log(e.target)
    console.log(history)
    if(history.indexOf(e.key) === -1){
      setHistory(history.push(e.key));
      console.log(typeof history)
      console.log(history)
      setScore(score + 1);
      
      if(score === setHistory.length){
        setGameOver(true);
      }
    }
    else {
      setGameOver(true);
    }
  };

  return (
    <div className="App">
      {/* <div> ExistingCards here
            {cards.map((e) => {return <div key={e}>{e}</div>})}            
        </div> */}
      <Scoreboard score={score}/>
      <CardSelection cards={cards} onCardClick={onCardClick}/>
      {gameOver ? <GameOverScreen won={score === cards.length}/> : null}
    </div>
  );
}

export default App;
