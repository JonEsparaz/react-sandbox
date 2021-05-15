import { createStore } from "redux";
import { Provider } from "react-redux";

import { ADDITIVE, CounterAction } from "./types";
import Counter from "./Counter";

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action: CounterAction) => {
  console.debug("reducer", state, action);

  switch (action.type) {
    case "INCREMENT":
      return {
        count:
          action.operator === ADDITIVE
            ? state.count + action.value
            : state.count * action.value,
      };

    case "DECREMENT":
      return {
        count:
          action.operator === ADDITIVE
            ? state.count - action.value
            : state.count / action.value,
      };

    case "RESET":
      return {
        count: action.value,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
