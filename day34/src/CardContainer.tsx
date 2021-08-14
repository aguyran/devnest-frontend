import { FC } from "react";
import { useSelector } from "react-redux";
import ListCard from "./ListCard";
import { RootState } from "./store";

const CardContainer: FC = () => {
  const todos = useSelector((state: RootState) => state.todos);
  return (
    <div className="container">
      {todos.map((el, i) => (
        <ListCard
          description={el.description}
          status={el.status}
          index={i}
          key={i}
        ></ListCard>
      ))}
    </div>
  );
};

export default CardContainer;
