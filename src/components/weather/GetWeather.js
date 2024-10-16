import rain from '../../img/rain.gif'
import snow from '../../img/snow.gif'
import temperature from '../../img/temperature.gif'
import wind from '../../img/wind.gif'
import partly_cloudy from '../../img/partly_cloudy.gif'

import {useEffect, useRef} from "react"
import axios from "axios"


function GetWeather(props) {
  const {onSubmitData, phrase} = props

  const select = useRef(0)
  const city = useRef(0)

  function getData() {
    const vybrany_option = select.current.selectedOptions[0]
    city.current.innerText = vybrany_option.innerText

    const latitude = vybrany_option.dataset.latitude
    const longitude = vybrany_option.dataset.longitude

    const url = "https://api.open-meteo.com/v1/forecast?latitude="+latitude+"&longitude="+longitude+"&daily=weather_code,temperature_2m_max,rain_sum,snowfall_sum,wind_speed_10m_max&timezone=Europe%2FBerlin&forecast_days=3"
    
    axios.get(url).then(response => {
      let days = response.data.daily
      let data = []
      for (let i = 0; i < days.time.length; i++) {
        const d = new Date(days.time[i]);
        const date = d.toLocaleString("sk-SK", {dateStyle: "short"});
        
        data.push({
          rain_sum: days.rain_sum[i],
          snowfall_sum: days.snowfall_sum[i],
          temperature_2m_max: days.temperature_2m_max[i],
          time: date,
          weather_code: days.weather_code[i],
          wind_speed_10m_max: days.wind_speed_10m_max[i]
        })
      }
      onSubmitData(data)
      console.log(data);
    })
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <h2>{phrase["Weather forecast"]}</h2>
      <p>{phrase["Find out the weather"]} <strong ref={city}>Košice</strong></p>

      <select ref={select}>
          <optgroup label="Europe">
              <option data-latitude="48.77132" data-longitude="22.08517">Fekišovce</option>
              <option data-latitude="48.716385" data-longitude="21.261074">Košice</option>
              <option data-latitude="52.5235" data-longitude="13.4115" defaultValue>Berlin</option>
              <option data-latitude="48.8567" data-longitude="2.3510" data-asl="34">Paris</option>
              <option data-latitude="51.5002" data-longitude="-0.1262" data-asl="14">London</option>
              <option data-latitude="40.4167" data-longitude="-3.7033" data-asl="588">Madrid</option>
              <option data-latitude="50.4422" data-longitude="30.5367" data-asl="168">Kiev</option>
              <option data-latitude="59.3328" data-longitude="18.0645" data-asl="15">Stockholm</option>
          </optgroup>
          <optgroup label="America">
              <option data-latitude="38.8921" data-longitude="-77.0241" data-asl="2">Washington</option>
              <option data-latitude="40.71" data-longitude="-74.01" data-asl="10">New York</option>
              <option data-latitude="38.5737" data-longitude="-121.4871" data-asl="4">Sacramento</option>
              <option data-latitude="34.05" data-longitude="-118.24" data-asl="89">Los Angeles</option>
              <option data-latitude="41.85" data-longitude="-87.65" data-asl="179">Chicago</option>
              <option data-latitude="-12.0931" data-longitude="-77.0465" data-asl="107">Lima</option>
              <option data-latitude="-34.8941" data-longitude="-56.0675" data-asl="43">Montevideo</option>
          </optgroup>
          <optgroup label="Asia">
              <option data-latitude="34.5155" data-longitude="69.1952" data-asl="1807">Kabul</option>
              <option data-latitude="23.7106" data-longitude="90.3978" data-asl="3">Dhaka</option>
              <option data-latitude="39.9056" data-longitude="116.3958" data-asl="63">Peking</option>
              <option data-latitude="39.9439" data-longitude="32.8560" data-asl="938">Ankara</option>
              <option data-latitude="24.4764" data-longitude="54.3705" data-asl="13">Abu Dhabi</option>
          </optgroup>
          <optgroup label="Africa">
              <option data-latitude="36.7755" data-longitude="3.0597" data-asl="0">Algiers</option>
              <option data-latitude="-8.8159" data-longitude="13.2306" data-asl="6">Luanda</option>
              <option data-latitude="-22.5749" data-longitude="17.0805" data-asl="1721">Windhoek</option>
              <option data-latitude="-25.7463" data-longitude="28.1876" data-asl="1271">Pretoria</option>
          </optgroup>
      </select>
      {" "}
      <button type="submit" className="btn" onClick={getData}>{phrase["Find out"]}</button>

    </div>
  );
}

export default GetWeather;
