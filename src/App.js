import "./styles.css";
import axios from 'axios';

export default function App() {
 //const api =  `https://api.openweathermap.org/data/2.5/weather?lat=12.971599&lon=77.594566&appid=337a5869eb06d30e9680623d3fe09357`
  return (
    <div className="App">
      `<div className="container">
          <div className="top">
            <div className="location"> Bangalore </div>
            <div className="tempertaure"> 29.39 Degree Celsius </div>
            <div className="description"> scattered clouds </div>
          </div>
          <div className="bottom">
            <div className="feels">30.46</div>
            <div className="humidity">52</div>
            <div className="wind">5.14</div>
          </div>
        </div>`
    </div>
  );
}
