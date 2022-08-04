import { render } from "@testing-library/react";
import React from "react";

const CardSelection = (props) => {
    const {cards} = props;
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
    
    let scrambledCards = scrambleCards(cards);
    console.log(scrambledCards)
    return (
        <div>
            CardSelection here!
            {scrambledCards.forEach((e) => <div>{e}</div>)}            
        </div>
    )
}

export default CardSelection;