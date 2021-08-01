import { useSelector } from "react-redux";
const WeatherCard = () => {
  const place = useSelector((state) => state.placeData);
  const theme = useSelector((state) => state.theme);
  return (
    <div className="container">
      <div className="offset-md-4 col-12 col-md-4 weather">
        <div className={theme ? "card dark" : "card"}>
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
                      {place.current.wind_kph} <span className="unit">KM</span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="title">Humidity</div>
                    <div className="data">
                      {place.current.humidity} <span className="unit">%</span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="title">Precipitation</div>
                    <div className="data">
                      {place.current.precip_in} <span className="unit">in</span>
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
  );
};

export default WeatherCard;
