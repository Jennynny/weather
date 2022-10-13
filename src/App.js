
import './App.css';
import { useState } from 'react';

const api = {
  key: "1b5a3319844b88508ae229aa7685bbd2",
  base: "https://api.openweathermap.org/data/2.5/",
};
const ICON_URL = 'http://openweathermap.org/img/wn/';

function App() {
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState({});
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      setWeather(result);
    });
  };

  return (
    <div className="App">
      <header className="App-header">

      {/* Header */}
      <h1>Weather</h1>

        {/* Search Box */} {/* Placeholder text */}
        <div>
          <input type="text" 
          placeholder='Enter city...' 
          onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>
      
      {typeof weather.main !== 'undefined' ? (
        <div>

          {/*Location: City and country*/}
          <p>{weather.name} ({weather.sys.country})</p>

          {/* Temperature °C */}
          <p>{weather.main.temp} °C</p>

          {/* Feels Like °C */}
          <p>Feels Like {weather.main.feels_like} °C</p>

          {/* Condition (Sunny,clouds etc. ) */}
          <p>{weather.weather[0].main}</p>
          <p>({weather.weather[0].description})</p>

          {/* Humidity */}
          <p>Humidity {weather.main.humidity} %</p>

          {/*Image Icon*/}
          <img src={ICON_URL + weather.weather[0].icon + '@2x.png'}alt=""/>

        </div>

      ) : (
        ""
      )}

      </header>
    </div>
  );
}

export default App;
