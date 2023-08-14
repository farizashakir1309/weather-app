import "./styles.css";
import axios from "axios";
import React, {useState} from 'react';

export default function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const api =  `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=337a5869eb06d30e9680623d3fe09357`;

  const searchLocation = (event) => {
    if(event.key === 'Enter') {
      axios.get(api).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation('');
    }
  }

  return (
    <div className="App">
       <div className="search">
        <input 
          type="text" 
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Enter Location"
       />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="tempertaure">
            {data.main ? <h1>{data.main.temp} °F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null }  
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            {data.main ? <p className="bold">{data.main.feels_like} °F</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
          {data.main ? <p className="bold">{data.main.humidity} %</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
          {data.wind ? <p className="bold">{data.wind.speed} MPH</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
