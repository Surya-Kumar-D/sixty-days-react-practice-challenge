import { useEffect, useRef, useState } from "react";

function Day5() {
  const [timer, setTimer] = useState(0);
  const [isrunning, setIsrunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isrunning) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    } else if (!isrunning && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer, isrunning]);
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };
  return (
    <div style={{ margin: "auto", display: "inline-block" }}>
      <h1>{formatTime(timer)}</h1>
      <button onClick={() => setIsrunning(false)}>Stop</button>
      <button
        onClick={() => {
          setTimer(0);
          setIsrunning(false);
        }}
      >
        Restart
      </button>
      <button onClick={() => setIsrunning(true)}>Start</button>
    </div>
  );
}

export default Day5;
