//key 9ed2af8b44ccce6e0959621de59c2764
//api https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

//const longitude = 12.9833;
//const latitude = 77.6167;

const latitude = 32.779167;
const longitude = -96.80889;
const APIkey = "9ed2af8b44ccce6e0959621de59c2764";
const apiRequest = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`;

export const getForecastWeather = () => {
  const weatherApi = fetch(apiRequest).then((res) => {
    console.log(res);
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status} ${res.statusText}`);
    }
  });

  return weatherApi;
};

export const parseWeatherData = (data) => {
  const main = data.main;
  const temperature = data.main.temp;
  const weather = {
    temperature: {
      F: Math.round(temperature),
      C: Math.round(((temperature - 32) * 5) / 9),
    },
  };
  // console.log(temperature);
  return weather;
};