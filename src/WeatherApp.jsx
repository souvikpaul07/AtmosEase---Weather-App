import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState, useEffect } from "react";

export default function WeatherApp(){

    const [weatherInfo, setWeatherInfo] = useState({
        city : "Kolkata",
        temp : 0,
        minTemp : 0,
        maxTemp : 0,
        feelsLike : 0,
        humidity : 0,
        pressure : 0,
        weather : "haze"
    });

    useEffect(()=>{   // to render the first data of Kolkata
        const API_URL="https://api.openweathermap.org/data/2.5/weather"
        const API_KEY="48419f69850d52a375b3b64aca39b34f"
        const city = "Kolkata"
        async function getFirstData(){
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
            let JsonResponse = await response.json();
            setWeatherInfo({
                city : city,
                temp : JsonResponse.main.temp,
                minTemp : JsonResponse.main.temp_min,
                maxTemp : JsonResponse.main.temp_max,
                feelsLike : JsonResponse.main.feels_like,
                humidity : JsonResponse.main.humidity,
                pressure : JsonResponse.main.pressure,
                weather : JsonResponse.weather[0].description
            });
        }
        getFirstData();
    }, [])



    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>   {/*passed a prop "weatherInfo" as info} */}
        </div>
    )
}