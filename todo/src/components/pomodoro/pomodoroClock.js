import React from "react";
import {
  AiFillPauseCircle,
  AiFillPlayCircle,
} from "react-icons/ai";

import "../pomodoro/pomodoroClock.css";

function Pomodoro() {
  const [displayTime, setDisplayTime] = React.useState(0 * 60);
  const [timerOn, setTimerOn] = React.useState(false);

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return (
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds)
    );
  };

  const controlTime = () => {
    let second = 1000;
      let date = new Date().getTime();
    let nextDate = new Date().getTime() + second;
    if (!timerOn) {
      let interval = setInterval(() => {
        date = new Date().getTime();
        if (date > nextDate) {
          setDisplayTime((prev) => {
            return prev + 1;
          });
          nextDate += second;
        }
      }, second);
      
      localStorage.clear();
      localStorage.setItem(1, interval);
     }
    if (timerOn) {
      
      clearInterval(localStorage.getItem(1));
    }
    setTimerOn(!timerOn);
};
  return (
    <div className="time-container timer">
      <div className="session-container">
        <h1 id="timer">{formatTime(displayTime)}</h1>
        <button onClick={controlTime}>
          <AiFillPlayCircle className="button" />
        </button>
      </div>
    </div>
  );
}

export default Pomodoro;
