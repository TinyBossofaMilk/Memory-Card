import { render } from "@testing-library/react";
import React from "react";

const Scoreboard = (props) => {
    const {score} = props;
    return (
        <div>
            Score: {score}
        </div>
    );
}

export default Scoreboard;