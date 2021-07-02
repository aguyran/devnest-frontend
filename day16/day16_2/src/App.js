import "./App.css";
const array2 = [];
for (let i = 0; i < 10; i++) {
  array2.push([]);
  for (let j = 0; j < 10; j++) {
    array2[i].push(j);
  }
}
function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <div className="board">
        {array2.map((i, index) => {
          return array2[index].map((j, index2) => {
            if (index === 0 || index2 === 9 || index2 === 0 || index === 9) {
              return <div className="black" key={i}></div>;
            } else if (index % 2 !== 0) {
              if (index2 % 2 !== 0)
                return <div className="black" key={i}></div>;
              else return <div className="test" key={i}></div>;
            } else if (index % 2 === 0) {
              if (index2 % 2 === 0)
                return <div className="black" key={i}></div>;
              else return <div className="test" key={i}></div>;
            }
          });
        })}
      </div>
    </div>
  );
}

export default App;
