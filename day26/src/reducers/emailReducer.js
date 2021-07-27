const emailReducer = (state = "", action) => {
  if (action.type === "TEXT_WRITTEN") {
    return action.text;
  }
  return state;
};
export default emailReducer;
