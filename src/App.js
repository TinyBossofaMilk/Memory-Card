import React, { useState } from "react";
import Scoreboard from './components/Scoreboard'
import CardSelection from "./components/CardSelection";
import GameOverScreen from "./components/GameOverScreen";
import uniqid from "uniqid"
import './App.css';

function App() {
  const [cards, setCards] = useState(
    [{
    value: 1,
    id: uniqid()
    },
    {value: 2,
    id: uniqid()
    },
    {value: 3,
      id: uniqid()
    },
    {value: 4,
      id: uniqid()
    },
    {value: 5,
      id: uniqid()
    }]
  );
  const [history, setHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // const init = (() => {
  //   for(let i = 1; i < 6; i++){
  //     setCards(cards.concat([{
  //       value: i,
  //       id: uniqid()
  //     }]));
  //   }
  //   setScore(0);
  // })();

  const reset = () => {
    setHistory([]);
    setScore(0);
    setGameOver(false);
  };

  const onCardClick = (e) => {
    const selectedid = e.target.id;

    if(history.length === 0 || history.every((id) => {return id !== selectedid})){
      setHistory(history.concat(selectedid));
      setScore(score + 1);      
      if(score === cards.length){setGameOver(true);}
    }
    else {
      setGameOver(true);
    }
  };

  return (
    <div className="App">

      <button type="button" onClick={reset}>Reset</button>
      <Scoreboard score={score}/>
      <CardSelection cards={cards} onCardClick={onCardClick}/>
      {gameOver ? <GameOverScreen won={score === cards.length}/> : null}
    </div>
  );
}

export default App;
