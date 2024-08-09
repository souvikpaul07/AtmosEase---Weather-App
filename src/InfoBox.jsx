import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

//Importing icons
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import DownhillSkiingIcon from '@mui/icons-material/DownhillSkiing';

import "./InfoBox.css";



export default function InfoBox({info}){   // passed prop from WeatherApp.jsx
    const INIT_imgURL = "https://us.123rf.com/450wm/mitrarudra/mitrarudra1812/mitrarudra181200128/115011289-beautiful-image-of-sunrise-at-kolkata-maidan-in-a-foggy-winter-morning-sunrises-at-the-horizon-above.jpg?ver=6"
    const HOT_imgURL = "https://www.thecityceleb.com/wp-content/uploads/2023/06/African-secrets-How-to-lead-a-healthy-lifestyle-in-the-hot-summer.png";
    const DESERT_imgURL = "https://plus.unsplash.com/premium_photo-1661962697678-9bf7f75eb561?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const FOGG_imgURL = "https://i.pinimg.com/originals/7b/41/e9/7b41e93aba6e28b6ed6cb2888f13acc1.jpg";
    const SNOW_imgURL = "https://i.pinimg.com/originals/6e/b8/3b/6eb83b89d2d18f8f0c8cbf21ceb4052b.jpg";
    const RAIN_imgURL = "https://i.pinimg.com/originals/fc/fd/b7/fcfdb71f4bb464b00fc7e5fd3b51be6a.jpg";
/*  let info = {
        city : "Kolkata",
        temp : 24.50,
        minTemp : 20.50,
        maxTemp : 26.70,
        feelsLike : 22,
        humidity : 20,
        pressure : 1004,
        weather : "haze"
    }  */

    return(
        <div className="infoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image={info.humidity>85 && info.temp>20 && info.temp<40 ? RAIN_imgURL
                        : info.temp<10 ? SNOW_imgURL
                        : 10<info.temp && info.temp<23 ? FOGG_imgURL
                        : 23<info.temp && info.temp<56 ? HOT_imgURL 
                        : DESERT_imgURL}
                    />
                    <CardContent style={{width: "250px", backgroundColor:"#dbecf0aa"}}>
                      <Typography gutterBottom variant="h5" component="div" style={{textTransform: 'capitalize'}}>
                        {info.city} {info.humidity>85 && info.temp>20 && info.temp<40 ? <ThunderstormIcon/>
                        : info.temp<10 ? <DownhillSkiingIcon/>
                        : 10<info.temp && info.temp<23 ? <AcUnitIcon/>
                        : 23<info.temp && info.temp<56 ? <WbSunnyIcon/> 
                        : DESERT_imgURL}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" component={"span"}>
                          <em>{info.weather}</em>
                          <p>Temparature : {info.temp}&deg; C</p>
                          <p>Min Temp. : {info.minTemp}&deg; C</p>
                          <p>Max Temp. : {info.maxTemp}&deg; C</p>
                          <p>Humidity : {info.humidity}</p>
                          <p>Pressure : {info.pressure}</p>
                          <p>Feels Like {info.feelsLike}&deg; C</p>
                      </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}