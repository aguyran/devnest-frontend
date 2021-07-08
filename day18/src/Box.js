import "./Box.css"
const Box = ({ isBlack }) => {
  return <div className={isBlack ? "black" : "white"}></div>;
};

export default Box;
