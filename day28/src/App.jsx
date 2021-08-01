import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { apiKey } from "./constants";
function App() {
  const [place, setPlace] = useState("");
  const [inputData, setInput] = useState("");
  const searchPlaceData = () => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputData}`
    ).then((res) => {
      res.json().then((data) => {
        setPlace(data);
        console.log(data);
      });
    });
  };
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 form">
            <input
              type="text"
              value={inputData}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button className="btn btn-primary" onClick={searchPlaceData}>
              Submit
            </button>
          </div>
          <div className="offset-md-4 col-12 col-md-4 weather">
            <div className="card">
              {place.location ? (
                <div>
                  <img
                    src={place.current.condition.icon}
                    alt={place.current.condition.text}
                  />
                  <div className="temp">{place.current.temp_c}°C</div>
                  <div className="desc">{place.current.condition.text}</div>
                  <div className="place">{place.location.name}</div>
                  <div className="container">
                    <div className="row whp">
                      <div className="col">
                        <div className="title">Wind Now</div>
                        <div className="data">
                          {place.current.wind_kph}{" "}
                          <span className="unit">KM</span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="title">Humidity</div>
                        <div className="data">
                          {place.current.humidity}{" "}
                          <span className="unit">%</span>
                        </div>
                      </div>
                      <div className="col">
                        <div className="title">Precipitation</div>
                        <div className="data">
                          {place.current.precip_in}{" "}
                          <span className="unit">in</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <h2>Place not found</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
