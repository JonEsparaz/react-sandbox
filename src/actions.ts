import { ADDITIVE, CounterAction, CounterOperator } from "./types";

export const decrement = (
  value: number,
  operator: CounterOperator
): CounterAction => ({ type: "DECREMENT", value, operator });

export const increment = (
  value: number,
  operator: CounterOperator
): CounterAction => ({ type: "INCREMENT", value, operator });

export const reset = (): CounterAction => ({
  type: "RESET",
  value: 0,
  operator: ADDITIVE,
});
