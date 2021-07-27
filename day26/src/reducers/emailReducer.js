const emailReducer = (state = "", action) => {
  if (action.type === "TEXT_WRITTEN") {
    console.log(action.text);
    state = action.text;
    return state;
  }
  return state;
};
export default emailReducer;
