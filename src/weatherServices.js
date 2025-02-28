const key = "51a17df105e024f49c4eb74868e5f16e";

// get icon url
const findIconUrl = (iconId) =>{
    return `https://openweathermap.org/img/wn/${iconId}@2x.png`
}

// Get weather function
const getWeather = async (city, units="metric") => {
    const base = "https://api.openweathermap.org/data/2.5/weather";
    const query = `?appid=${key}&q=${city}&units=${units}`;

    try {
        const response = await fetch(base + query);

        if (!response.ok) {
            // Check if the response is not OK
            alert("City not found, try again!");
            throw new Error("City not found");
        }
        const data = await response.json(); // Parse the JSON data

         // Check if the expected properties exist
         if (!data || !data.main || !data.weather || !data.weather[0]) {
            throw new Error("Invalid data structure");
        }
    // Destructuring weather data
     const {
        weather, 
        main:{
            temp, 
            feels_like, 
            humidity, 
            pressure},
            wind:{speed},
            sys:{country},
            name} = data;
        const {description, icon} = weather[0];

        const convertCountryCode = (country) =>{
            let regionName = new Intl.DisplayNames(["eng"], {type:'region'});
            return regionName.of (country);
          }
          const countryName = convertCountryCode(country);
     return {
        description, 
        iconURL: 
        findIconUrl(icon),
        temp, 
        feels_like, 
        humidity,
        pressure, 
        speed, 
        country: 
        countryName, 
        name
    }}
    catch (error) {
        // Handle errors (network issues, etc.)
        console.error("Error fetching weather data:", error);
    }
  };
  export {getWeather}