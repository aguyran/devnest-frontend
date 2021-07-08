import Box from "./Box";
import "./Row.css";
const Row = ({ isOdd }) => {
  const boxes = [];
  let temp = isOdd ? true : false;
  for (let i = 0; i < 8; i++) {
    if (temp) {
      boxes.push(<Box isBlack key={i}></Box>);
      temp = !temp;
    } else {
      boxes.push(<Box key={i}></Box>);
      temp = !temp;
    }
  }
  return (
    <div className="Row">
      {boxes}
    </div>
  );
};

export default Row;
