import { useState } from "react";

const Box = () => {
  const [text, setText] = useState(0);
  return (
    <button
      className="counterbtn"
      onClick={() => {
        setText(text + 1);
      }}
    >
      {text}
    </button>
  );
};

export default Box;
