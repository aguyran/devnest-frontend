const todoReducer = (state = [], action) => {
  if (action.type === "ADD_ITEM") {
    return [...state, action.payload];
  } else if (action.type === "REMOVE_ITEM") {
    return state.filter((item, index) => index !== action.payload);
  } else if (action.type === "LOAD_ITEM") {
    return action.payload.slice(0, 5);
  } else if (action.type === "DONE_ITEM") {
    state[action.payload].completed = !state[action.payload].completed;
    return JSON.parse(JSON.stringify(state));
  }
  return state;
};
export default todoReducer;
