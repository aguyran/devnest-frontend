import { useState } from "react";
import Card from "./Card";
const Container = ({ cards, handleClick }) => {
  const handleDelete = (index) => {
    const newCards = cards.filter((i, index2) => index2 !== index);
    handleClick(newCards);
  };
  const handleEdit = (index)=>{

  }
  return (
    <div className="Container">
      {!cards ? (
        <div>yeye</div>
      ) : (
        cards.map((i, index) => (
          <Card
            title={i.title}
            value={i.value}
            key={index}
            handleClick={() => handleDelete(index)}
            handleEdit={(e) => handleEdit(index,e)}
          />
        ))
      )}
    </div>
  );
};

export default Container;
