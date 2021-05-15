import { CounterAction } from "./types";

export const add = (value: number): CounterAction => ({ type: "ADD", value });

export const subtract = (value: number): CounterAction => ({
  type: "SUBTRACT",
  value,
});

export const multiply = (value: number): CounterAction => ({
  type: "MULTIPLY",
  value,
});

export const divide = (value: number): CounterAction => ({
  type: "DIVIDE",
  value,
});

export const reset = (): CounterAction => ({
  type: "RESET",
  value: 0,
});
