const key = "51a17df105e024f49c4eb74868e5f16e";

// get icon url
const iconUrl = (iconId) =>{
    `https://openweathermap.org/img/wn/${iconId}@2x.png`
}
// Get weather function
const getWeather = async (city, units="metric") => {
    const base = "https://api.openweathermap.org/data/2.5/weather";
    const query = `?appid=${key}&q=${city}&units=${units}`;
  
    const response = await fetch(base + query);
    if (!response.ok) {
      // Check if the response is not OK
      alert("City not found, try again!");
      throw new Error("City not found");
    }
  
    const data = await response.json(); // Parse the JSON data
    // return data; // Return the data

    // Destructuring weather data
     const {
        weather, 
        main:{temp, feel_likes, humidity, pressure},
         wind:{speed},
         sys:{country},
         name
        } = data;
        const {description, icon} = weather[0];
     return {description, icon, temp, feel_likes, humidity, pressure, speed, country, name}; // Return the data
  };
  export {getWeather}