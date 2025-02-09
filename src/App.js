import { useEffect, useState } from "react";
import hotImage from "./assets/hot.jpg";
import coldImage from "./assets/cold.jpg";
import Description from "./components/Description";
import { getWeather } from "./weatherServices";

function App() {
  const [city, setCity] = useState("Moscow")
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('metric');
  const [bg, setbg] = useState(hotImage);

  useEffect(() => {
    const fetchgetWeather = async () => {
      const data = await getWeather(city, units);

      // Check if data is valid
      if (data) {
        setWeather(data);

        // dynamic background
        const threshold = units === "metric" ? 20 : 60;
        if (data.temp <= threshold) {
          setbg(coldImage);
        } else {
          setbg(hotImage);
        }
      } else {
        // Handle the case where data is null or undefined
        setWeather(null);
        setCity('Moscow')
      }
    };
    fetchgetWeather();
  }, [units, city]);

  const handlingClick = (e) =>{
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1)
    console.log(currentUnit);
    // checking unit

    const isCelsius = currentUnit === 'C';
    button.innerText = isCelsius? "°F":"°C"
    setUnits(isCelsius?"metric":"imperial");
  }
  
  //handling key press
  const enterkeyPress = (e) =>{
    if(e.keyCode ===13){
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  }
  return (
    <div className="App" style={{background: `url(${bg})`}}>
      <div className="overlay">
        {weather && ( <div className="container">
          <div className="section section__input">
            <input onKeyDown={enterkeyPress}type="text" name="city" placeholder="Enter the city"/>
            <button onClick={(e) => handlingClick(e)}>°F</button>
          </div>
          <div className="section section__temperature">
            <div className="weather__info">
              <h3>{weather.name}, {weather.country}</h3>
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
