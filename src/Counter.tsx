import { CSSProperties, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { increment, decrement, reset } from "./actions";
import {
  ADDITIVE,
  MULTIPLICATIVE,
  CounterOperator,
  CounterState,
} from "./types";

const rowStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
};

const colStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector<CounterState, number>((state) => state.count);
  const [step, setStep] = useState(1);
  const [operator, setOperator] = useState<CounterOperator>(ADDITIVE);

  return (
    <div style={colStyle}>
      <h1>Redux Counter</h1>
      <span>{count}</span>
      <div style={rowStyle}>
        <button onClick={() => dispatch(decrement(step, operator))}>
          {operator === ADDITIVE ? "-" : "÷"} {step}
        </button>
        <button
          onClick={() => {
            dispatch(reset());
            setStep(1);
            setOperator(ADDITIVE);
          }}
        >
          Reset
        </button>
        <button onClick={() => dispatch(increment(step, operator))}>
          {operator === ADDITIVE ? "+" : "×"}
          {step}
        </button>
      </div>
      <label htmlFor="step">Step size (between 1 and 10)</label>
      <input
        id="step"
        type="range"
        min={1}
        max={10}
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <label htmlFor="operator">Choose operation type:</label>
      <select
        id="operator"
        value={operator}
        onChange={(e) => setOperator(e.target.value as CounterOperator)}
      >
        <option value={ADDITIVE}>Add / Subtract</option>
        <option value={MULTIPLICATIVE}>Multiply / Divide</option>
      </select>
    </div>
  );
};

export default Counter;
