const key = "9fde65445c9d21ecb270ad0151136f73";

const getData = (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data));
};

const getWeatherData = () => {
  const cityName = document.getElementById("city").value;
  getData(cityName);
};

const displayData = (data) => {
  console.log(data);
  document.getElementById("show-city").innerText = data.name;
  const kelvinTemp = (document.getElementById("show-temperature").innerText =
    data.main.temp);
  const celciusTemp = kelvinTemp - 273.15;
  document.getElementById("show-temperature").innerText =
    celciusTemp.toFixed(0);
  document.getElementById("weather-status").innerText =
    data.weather[0].description;
  document
    .getElementById("icon")
    .setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    );

  document.getElementById("city").value = "";
};
getData("Dhaka");
