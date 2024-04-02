"use client";
import { useState } from "react";

export default function Home() {
  const operators = ["+", "-", "*", "/"];

  const [firstValue, setFirstValue] = useState(0);

  const [secondValue, setSecondValue] = useState(0);

  const [operatorValue, setOperatorValue] = useState(operators[0]);

  const [solution, setSolution] = useState(0);

  const onChangeFirstValue = (e) => setFirstValue(Number(e.target.value));

  const onChangeSecondValue = (e) => setSecondValue(Number(e.target.value));

  const onChangeOperatorValue = (e) => setOperatorValue(e.target.value);

  const onClickButton = () => {
    let newSolution;

    switch (operatorValue) {
      case "+": {
        newSolution = firstValue + secondValue;
        break;
      }
      case "-": {
        newSolution = firstValue - secondValue;
        break;
      }
      case "*": {
        newSolution = firstValue * secondValue;
        break;
      }
      case "/": {
        newSolution = firstValue / secondValue;
        break;
      }
    }

    setSolution(newSolution);
  };

  return (
    <main>
      <input type="number" value={firstValue} onChange={onChangeFirstValue} />
      <select value={operatorValue} onChange={onChangeOperatorValue}>
        {operators.map((operatorItem) => (
          <option value={operatorItem}>{operatorItem}</option>
        ))}
      </select>
      <input type="number" value={secondValue} onChange={onChangeSecondValue} />
      <button onClick={onClickButton}>=</button>
      <input type="number" disabled value={solution} />
    </main>
  );
}
