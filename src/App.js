import { useEffect, useState } from "react";
import hotImage from "./assets/hot.jpg";
// import coldImage from "./assets/cold.jpg";
import Description from "./components/Description";
import { getWeather } from "./weatherServices";

function App() {
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('metric');

  useEffect(() =>{
      const fetchgetWeather = async()=>{
        const data = await getWeather("Gambela", units);
        // console.log(data);
        setWeather(data)
      }
      fetchgetWeather()
  }, [])

  

  return (
    <div className="App" style={{background: `url(${hotImage})`}}>
      <div className="overlay">
        {weather && ( <div className="container">
          <div className="section section__input">
            <input type="text" name="city" placeholder="Enter the city"/>
            <button>°F</button>
          </div>
          <div className="section section__temperature">
            <div className="weather__info">
              <h3>{weather.name}, {weather.country}</h3>
              <p>date</p>
              <img src={weather.iconURL}alt="weatherIcon"/>
              <h3>{weather.description}</h3>
            </div>
            <div className="temperature">
              <h2>{`${weather.temp.toFixed()} °${units ==="metric"?"C":"F"}`}</h2>
            </div>
          </div>
          {/* bottom description */}
          <Description weather={weather} units={units} />
        </div>)}
      </div>
    </div>
  );
}

export default App;
