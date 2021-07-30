import { useDispatch } from "react-redux";

const addItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

const removeItem = (id) => {
  return {
    type: "REMOVE_ITEM",
    payload: id,
  };
};
const loadTodo = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        return dispatch({
          type: "LOAD_ITEM",
          payload: json,
        });
      });
  };
};
const doneItem = (id) => {
  return {
    type: "DONE_ITEM",
    payload: id,
  };
};
export { addItem, removeItem, loadTodo, doneItem };
