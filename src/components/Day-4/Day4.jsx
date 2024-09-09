import { useState } from "react";

function Day4() {
  const [curValue, setCurValue] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  function handleOperator(e) {
    if (e === "+" || e === "-" || e === "*" || e === "/") {
      setOperator(e);
    } else if (prevValue) {
      setCurValue(Number(e));
    } else {
      setPrevValue(Number(e));
    }
  }
  function handleOperation(e) {
    switch (e) {
      case "+":
        setResult(prevValue + curValue);
        break;
      case "-":
        setResult(prevValue - curValue);
        break;
      case "*":
        setResult(prevValue * curValue);
        break;
      case "/":
        setResult(prevValue / curValue);
        break;
      case "c":
        setCurValue("");
        setPrevValue("");
        setOperator("");
        setResult("");
        break;
      default:
        break;
    }
  }
  return (
    <div className="container container-calculator">
      <div className="input">
        <input
          type="text"
          value={result ? result : `${prevValue} ${operator} ${curValue}`}
        />
      </div>
      <div style={{ display: "inline-block" }}>
        <div className="operator" onClick={() => handleOperator("+")}>
          +
        </div>
        <div className="operator" onClick={() => handleOperator("-")}>
          -
        </div>

        <div className="operator" onClick={() => handleOperator("*")}>
          *
        </div>

        <div className="operator" onClick={() => handleOperator("/")}>
          /
        </div>

        <div className="operator" onClick={() => handleOperation("c")}>
          c
        </div>
      </div>
      <div style={{ display: "inline-block" }}>
        <div className="operator" onClick={() => handleOperator(0)}>
          0
        </div>
        <div className="operator" onClick={() => handleOperator(1)}>
          1
        </div>
        <div className="operator" onClick={() => handleOperator(2)}>
          2
        </div>
        <div className="operator" onClick={() => handleOperator(3)}>
          3
        </div>
        <div className="operator" onClick={() => handleOperator(4)}>
          4
        </div>
      </div>
      <div style={{ display: "inline-block" }}>
        <div className="operator" onClick={() => handleOperator(5)}>
          5
        </div>
        <div className="operator" onClick={() => handleOperator(6)}>
          6
        </div>
        <div className="operator" onClick={() => handleOperator(7)}>
          7
        </div>
        <div className="operator" onClick={() => handleOperator(8)}>
          8
        </div>
        <div className="operator" onClick={() => handleOperator(9)}>
          9
        </div>
      </div>
      <div className="operator" onClick={() => handleOperation(operator)}>
        =
      </div>
    </div>
  );
}

export default Day4;
