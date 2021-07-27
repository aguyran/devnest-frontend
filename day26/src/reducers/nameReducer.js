const nameReducer = (state = "", action) => {
  if (action.type === "NAME_WRITTEN") {
    return action.text;
  }
  return state;
};
export default nameReducer;
