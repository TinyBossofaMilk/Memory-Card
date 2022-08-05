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

  const isPreviouslySelected = (selectedCard) => {
    
  };

  const onCardClick = (e) => {
    const selectedid = e.target.id;
    // console.log(e.target.id)
    console.log(history)

    if(history.length === 0 || history.every((id) => {
      console.log(id + "//" + selectedid)
      return id !== selectedid})){
      setHistory(history.concat(selectedid));
      console.log(history)
      setScore(score + 1);
      
      if(score === setHistory.length){
        setGameOver(true);
      }
    }
    else {
      console.log("gameOVer ran")
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
