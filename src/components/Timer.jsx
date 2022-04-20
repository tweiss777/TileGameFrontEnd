import { React, useState } from "react";
import Countdown from "react-countdown";
const Timer = ({ setTimesOver }) => {
  const [score, setScore] = useState(0);

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      setTimesOver(true);
      setScore((100 - seconds) * 10);
      console.log(score);
    } else {
      return (
        <span>
          Time left: {minutes}:{seconds}
        </span>
      );
    }
  };
  return (
    <div>
      <Countdown date={Date.now() + 50000} renderer={renderer}></Countdown>
    </div>
  );
};

export default Timer;
