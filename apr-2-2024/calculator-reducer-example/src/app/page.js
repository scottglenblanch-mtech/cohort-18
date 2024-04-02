"use client";

import { useReducer } from "react";

function getSolution({ firstValue, secondValue, operatorValue }) {
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

  return newSolution;
}

function reducer(state = {}, action) {
  const { type } = action;
  let newState = { ...state };

  switch (type) {
    case "UPDATE_FIRST_VALUE": {
      newState["firstValue"] = action.firstValue;
      break;
    }
    case "UPDATE_SECOND_VALUE": {
      newState["secondValue"] = action.secondValue;
      break;
    }
    case "UPDATE_OPERATOR_VALUE": {
      newState["operatorValue"] = action.operatorValue;
      break;
    }
  }

  newState["solution"] = getSolution(newState);

  return newState;
}

export default function Home() {
  const operators = ["+", "-", "*", "/"];
  const [state, dispatch] = useReducer(reducer, {
    firstValue: 0,
    secondValue: 0,
    operatorValue: operators[0],
    solution: 0,
  });

  const { firstValue, secondValue, operatorValue, solution } = state;

  const onChangeFirstValue = (e) => {
    dispatch({
      type: "UPDATE_FIRST_VALUE",
      firstValue: Number(e.target.value),
    });
  };

  const onChangeSecondValue = (e) => {
    dispatch({
      type: "UPDATE_SECOND_VALUE",
      secondValue: Number(e.target.value),
    });
  };

  const onChangeOperatorValue = (e) => {
    dispatch({
      type: "UPDATE_OPERATOR_VALUE",
      operatorValue: e.target.value,
    });
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
      <button>=</button>
      <input type="number" disabled value={solution} />
    </main>
  );
}
