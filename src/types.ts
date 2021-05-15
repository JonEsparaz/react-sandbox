import { Action } from "redux";

export const MULTIPLICATIVE = "MULTIPLICATIVE";
export const ADDITIVE = "ADDITIVE";

export type CounterOperator = typeof MULTIPLICATIVE | typeof ADDITIVE;

export interface CounterAction extends Action {
  value: number;
  operator: CounterOperator;
}

export type CounterState = {
  count: number;
};
