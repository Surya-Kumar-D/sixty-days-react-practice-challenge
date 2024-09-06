import { useState } from "react";

function Day2() {
  const [counter, setCounter] = useState(0);
  function decrement() {
    if (counter === 0) {
      return counter;
    }
    return setCounter((prev) => prev - 1);
  }
  return (
    <div className="container">
      <div className="counter-box">
        <h1>Counter App 🧮</h1>
        <p className="counter">Clicked: {counter}</p>
        <div className=" u-inline-block u-margin-right-small btn-container">
          <button className="btn " onClick={decrement}>
            Decrement
          </button>
        </div>
        <div className="u-inline-block btn-container">
          <button
            className="btn "
            onClick={() => setCounter((prev) => prev + 1)}
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}

export default Day2;
