import { render } from "@testing-library/react";
import React from "react";

const Scoreboard = (props) => {
    const {score} = props;
    return (
        <div>
            Scoreboard Here!
            Score: {score}
        </div>
    );
}

export default Scoreboard;