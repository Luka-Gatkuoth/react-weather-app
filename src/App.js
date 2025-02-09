import { useEffect } from "react";
import hotImage from "./assets/hot.jpg";
// import coldImage from "./assets/cold.jpg";
import Description from "./components/Description";
import { getWeather } from "./weatherServices";

function App() {
  useEffect(() =>{
      const fetchgetWeather = async()=>{
        const data = await getWeather("London");
        console.log(data);
      }
      fetchgetWeather()
  }, [])


  return (
    <div className="App" style={{background: `url(${hotImage})`}}>
      <div className="overlay">
        <div className="container">
          <div className="section section__input">
            <input type="text" name="city" placeholder="Enter the city"/>
            <button>°F</button>
          </div>
          <div className="section section__temperature">
            <div className="weather__info">
              <h3>London, GB</h3>
              <p>date</p>
              {/* add image here from open weather api */}
              <img src="" alt="weatherIcon"/>
              <h3>Cody</h3>
            </div>
            <diV className="temperature">
              <h2>34°</h2>
            </diV>
          </div>
          {/* bottom description */}
          <Description/>
        </div>
      </div>
    </div>
  );
}

export default App;
