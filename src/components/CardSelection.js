import { render } from "@testing-library/react";
import React from "react";

const CardSelection = (props) => {
    const {cards, onCardClick} = props;

    const copy = cards.slice();
    // console.log(cards)
    const scrambleCards = (cards) => {
        let numIter = cards.length;
        let output = [];
        for(let i = 0; i < numIter; i++){
            let rand = Math.floor(Math.random() * cards.length);
            output.push(cards[rand]);
            cards.splice(rand, 1);
        }

        return output;
    };
    
    let scrambledCards = scrambleCards(copy);
    // console.log(scrambledCards)
    return (
        <div id="card-selection">
            {/* CardSelection here! */}
            {scrambledCards.map((e) => <div className="card" id={e.id} keygen={e.id} onClick={onCardClick}>{e.value}</div>)}            
        </div>
    )
}

export default CardSelection;