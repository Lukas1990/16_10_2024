import rain from '../../img/rain.gif';
import snow from '../../img/snow.gif';
import temperature from '../../img/temperature.gif';
import wind from '../../img/wind.gif';
import partly_cloudy from '../../img/partly_cloudy.gif';

import GetWeather from "./GetWeather"
import ListWeather from "./ListWeather"

import {useState} from "react"


function WeatherForecast(props) {

  const [weatherData, setWeatherData] = useState()

  function handeGetWeatherData(data) {
    setWeatherData(data)
  }

  return (
    <div className="kontajner" id="predpoved">

      <GetWeather onSubmitData={handeGetWeatherData} phrase={props.phrase}/>
      <ListWeather weatherData={weatherData} phrase={props.phrase}/>

      <p>{props.phrase["The data is obtained"]} <strong><a href="https://open-meteo.com/">open-meteo.com</a></strong></p>
    </div>
  );
}

export default WeatherForecast;
