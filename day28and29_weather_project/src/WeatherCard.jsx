import { useSelector } from "react-redux";

import { GoLocation } from "react-icons/go";
import { getMonth } from "./dateUtils";
import { getDay } from "./dateUtils";
const WeatherCard = () => {
  const place = useSelector((state) => state.placeData);
  const theme = useSelector((state) => state.theme);
  return (
    <div className="container">
      <div className="offset-md-4 col-12 col-md-4 weather">
        {place ? (
          <div className={theme ? "card dark" : "card"}>
            <div className="row">
              <div className="col city">
                <GoLocation />
                {place.location.name}
              </div>
              <div className="col weathericon">
                <img
                  src={place.current.condition.icon}
                  alt={place.current.condition.text}
                />
              </div>
            </div>
            <div className="row">
              <div className="col temperature">
                {place.current.temp_c >= 0
                  ? `+${place.current.temp_c}`
                  : `-${place.current.temp_c}`}
                <span className="unit">°C</span>
              </div>
              <div className="col conditionText">
                {place.current.condition.text}
              </div>
            </div>
            {place.forecast.forecastday.map((el, index) => (
              <div className="row days" key={index}>
                <div className="col-6">
                  {getDay(el.date) + " " + getMonth(el.date)}
                </div>
                <div className="col md-auto">
                  <img className="dayIcons"
                    src={el.day.condition.icon}
                    alt={el.day.condition.text}
                  />
                </div>
                <div className="col md-auto maxtemp">{el.day.maxtemp_c}</div>
                <div className="col col-lg-2 mintemp">{el.day.mintemp_c}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className={theme ? "card dark" : "card"}>
            <div>Place Not Found</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherCard;
