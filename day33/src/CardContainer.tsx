import { FC } from "react";
import { todoStruct } from "./App";
import ListCard from "./ListCard";

export interface CardContainerProps {
  todos: Array<todoStruct>;
  setTodos: (value: todoStruct[]) => void;
}

const CardContainer: FC<CardContainerProps> = ({ todos, setTodos }) => {
  return (
    <div className="container">
      {todos.map((el, i) => (
        <ListCard
          description={el.description}
          status={el.status}
          index={i}
          key={i}
          todos={todos}
          setTodos={setTodos}
        ></ListCard>
      ))}
    </div>
  );
};

export default CardContainer;
