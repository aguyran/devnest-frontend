import { useDispatch, useSelector } from "react-redux";
import { removeItem, doneItem } from "../actions";
const ListTodo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  return (
    <div className="list">
      {todos.map((el, index) => (
        <div className="card-container" key={index}>
          {el.completed ? (
            <h5 className="Completed">{el.title}</h5>
          ) : (
            <h5>{el.title}</h5>
          )}

          <button
            className="delete"
            onClick={() => dispatch(removeItem(index))}
          >
            Delete
          </button>
          <button className="done" onClick={() => dispatch(doneItem(index))}>
            Done
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListTodo;
