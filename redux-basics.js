const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  counter: 0
};

// reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      counter: state.counter + 1
    };
  }
  if (action.type === "ADD") {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
  console.log("[Subscription]", store.getState());
});

// Dispatching
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "ADD", value: 10 });
console.log(store.getState());
