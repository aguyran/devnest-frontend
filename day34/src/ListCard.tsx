import { FC } from "react";
import { useDispatch } from "react-redux";
import { todoStruct } from "./App";
import { deleteTodo, markStatus } from "./slices/todosSlice";

export interface ListCardProps extends todoStruct {
  index: number;
}

const ListCard: FC<ListCardProps> = ({ description, status, index }) => {
  const dispatch = useDispatch();
  return (
    <div className="container_card">
      <div className={status ? "done description" : "description"}>
        {description}
      </div>
      <button
        className="markStatus"
        onClick={() => {
          dispatch(markStatus(index));
        }}
      >
        {!status ? "Done" : "X"}
      </button>
      <button
        className="deleteBtn"
        onClick={() => {
          dispatch(deleteTodo(index));
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ListCard;
