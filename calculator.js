import React, { useState } from "react";

export default function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setResult(result + value);
  };

  const clear = () => {
    setResult("");
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch {
      setResult("Error");
    }
  };

  return (
    <div style={{ width: 200, margin: "50px auto", textAlign: "center" }}>
      <input
        type="text"
        value={result}
        readOnly
        style={{ width: "100%", marginBottom: 10 }}
      />

      <div>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
      </div>

      <div>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
      </div>

      <div>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>
      </div>

      <div>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={clear}>C</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => handleClick("/")}>/</button>
      </div>
    </div>
  );
}
