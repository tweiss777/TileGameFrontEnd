import { React, memo } from "react";
import Countdown from "react-countdown";
const Timer = ({ setTimesOver }) => {
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      setTimesOver(true);
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
      <Countdown date={Date.now() + 40000} renderer={renderer}></Countdown>
    </div>
  );
};

export default memo(Timer);
