import { createStore } from "redux";
import { Provider } from "react-redux";

import { CounterAction } from "./types";
import Counter from "./Counter";

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action: CounterAction) => {
  console.debug("reducer", state, action);

  switch (action.type) {
    case "ADD":
      return {
        count: state.count + action.value,
      };

    case "SUBTRACT":
      return {
        count: state.count - action.value,
      };

    case "MULTIPLY":
      return {
        count: state.count * action.value,
      };

    case "DIVIDE":
      return {
        count: state.count / action.value,
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
