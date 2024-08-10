import "./WeatherCard.css";
import { weatherOptions } from "../../utils/Constants.jsx";

const WeatherCard = ({ weatherTemp, day, type, currentTemperatureUnit }) => {
  const imageSrc = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });

  // Assume weatherTemp is an object with a "temperature" property
  const temperature =
    typeof weatherTemp === "object" && weatherTemp.temperature
      ? weatherTemp.temperature[currentTemperatureUnit]
      : weatherTemp;

  if (imageSrc) {
    const imageSrcUrl = imageSrc.url || ""; // Added a check here
    return (
      <section className="weather" id="weather">
        <div className="weather__info">
          {temperature} {currentTemperatureUnit}º
        </div>
        <img
          src={imageSrcUrl}
          alt="weather display"
          className="weather__image"
        />
      </section>
    );
  }
  return null;
};

export default WeatherCard;
