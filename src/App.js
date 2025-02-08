import hotImage from "./assets/hot.jpg";
import coldImage from "./assets/cold.jpg";

function App() {
  return (
    <div className="App" style={{background: `url(${hotImage})`}}>
      <div className="overlay">
        <div className="container">
          <div className="section section__input">
            <input type="text" name="city" placeholder="Enter the city"/>
            <button>°F</button>
          </div>
          <div className="section section__temperature">
            <div className="icon">
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
          
        </div>
      </div>
    </div>
  );
}

export default App;
