import React from "react";
import Countdown from "react-countdown";

const Timer = ({ setTimesOver }) => {
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      setTimesOver(true);
    } else {
      // Render a countdown
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    }
  };
  return (
    <div>
      <Countdown date={Date.now() + 30000} renderer={renderer}></Countdown>
    </div>
  );
};

export default Timer;
