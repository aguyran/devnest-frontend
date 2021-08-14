import { createSlice } from "@reduxjs/toolkit";
import { todoStruct } from "../App";
export interface actionMethods {
  type: string;
  payload: todoStruct | number;
}
const todosSlice = createSlice({
  name: "todos",
  initialState: [] as todoStruct[],
  reducers: {
    addTodo: (state, action: actionMethods) => {
      if (typeof action.payload !== "number") state.push(action.payload);
    },
    markStatus: (state, action: actionMethods) => {
      if (typeof action.payload === "number")
        state[action.payload].status = !state[action.payload].status;
    },
    deleteTodo: (state, action: actionMethods) => {
      if (typeof action.payload === "number")
        return state.filter(
          (el, filterIndex) => filterIndex !== action.payload
        );
    },
  },
});
export const { addTodo, markStatus,deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
