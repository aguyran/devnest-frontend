import { FC } from "react";
import { todoStruct } from "./App";
import { CardContainerProps } from "./CardContainer";

export interface ListCardProps extends todoStruct, CardContainerProps {
  index: number;
}

const ListCard: FC<ListCardProps> = ({
  description,
  status,
  index,
  todos,
  setTodos,
}) => {
  return (
    <div className="container_card">
      <div className={status ? "done description" : "description"}>
        {description}
      </div>
      <button
        className="markStatus"
        onClick={() => {
          const temp = [...todos];
          temp[index].status = !temp[index].status;
          setTodos(temp);
        }}
      >
        {!status ? "Done" : "X"}
      </button>
      <button
        className="deleteBtn"
        onClick={() => {
          const temp = todos.filter((el, i) => i !== index);
          setTodos(temp);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default ListCard;
