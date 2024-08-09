import "./SearchBox.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


export default function SearchBox({updateInfo}){    // props from WeatherApp.jsx

    const [city, setCity] = useState("");

    const [error, setError] = useState(false);

    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY="48419f69850d52a375b3b64aca39b34f"
    // Geocoding API call : "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"

    let getWeatherReport = async() =>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)  // "&units=metric" is to convert the temp & other unit's data. (available in openweathermap.org documentation)
            let JsonResponse = await response.json();
            console.log(JsonResponse);

            let weatherData = {
                city : city,
                temp : JsonResponse.main.temp,
                minTemp : JsonResponse.main.temp_min,
                maxTemp : JsonResponse.main.temp_max,
                feelsLike : JsonResponse.main.feels_like,
                humidity : JsonResponse.main.humidity,
                pressure : JsonResponse.main.pressure,
                weather : JsonResponse.weather[0].description
            }
            console.log(weatherData);
            return weatherData;

        } catch(err){
            throw err;
        }
    }



    let handleChange = (event) =>{
        setCity(event.target.value)
    }


    let handleSubmit = async (event) =>{
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherReport();
            updateInfo(newInfo);
        } catch(err){
            setError(true);
            setTimeout(()=>{   // so that setError sets it false again.
                setError(false);
            }, 1500);
        }
    }


    return(
        <div className="searchBox">
            <form onSubmit={handleSubmit} >
                <TextField id="city" label="City name" variant="outlined" required value={city} onChange={handleChange}/> <br /> <br />
                <Button variant="contained" type="submit" style={{backgroundColor:"green"}}>search</Button>

                {error && <h4 style={{color : "red"}}>Oops! No such place exists in our Api</h4>}
            </form>
        </div>
    );
}