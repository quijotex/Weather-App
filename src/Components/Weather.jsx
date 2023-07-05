import { useState, useEffect } from "react";
import axios from "axios";
import clearSky from '/src/assets/1.svg'
import fewClouds from '/src/assets/2.svg'
import scatteredClouds from '/src/assets/3.svg'
import brokenClouds from '/src/assets/4.svg'
import showerRain from '/src/assets/5.svg'
import rain from '/src/assets/6.svg'
import snow from '/src/assets/7.svg'
import mist from '/src/assets/8.svg'
import thunderstorm from '/src/assets/9.svg'

const Weather = () => {


    const [weather, setWeather] = useState({})
    const [icon, setIcon] = useState({})
    const [ isCelsius, setisCelsius] = useState(true)
      
    useEffect(() => {

        navigator.geolocation.getCurrentPosition(function(position) {
           const { latitude, longitude } = position.coords

           axios
           .get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b1422ce73fb514e80f02246a9f668d87&units=metric`)
           .then(response => {
            setWeather(response.data)
            setIcon(response.data.weather[0])
           })
           .catch(err => console.log(err))
           
        })
       
    }, [])

  

const iconsWeather = () => {
       
    if(icon.id === 800){ 
      return icon.icon = clearSky
        } else if(icon.id === 801){
         return  icon.icon = fewClouds
        } else if(icon.id === 802){ 
         return   icon.icon = scatteredClouds
        } else if (icon.id === 803){ 
         return  icon.icon = brokenClouds
        } else if(icon.id === 521){ 
         return  icon.icon = showerRain
        } else if(icon.id === 500 || 501 || 502 || 503 || 504){ 
         return   icon.icon = rain
        } else if(icon.id === 601){ 
         return icon.icon = snow
        } else if(icon.id === 701){ 
         return  icon.icon = mist
        } else if(icon.id === 200 || 201 || 202 || 210 || 211 || 212 || 221 || 230 || 231 || 232){ 
         return  icon.icon = thunderstorm
        } else {
         return  icon.icon
        }         
}


   
    const fahrenheit = () => {
        setisCelsius(!isCelsius)
    }

    const celsius = weather.main?.temp.toFixed(0)
    const fahr = ((weather.main?.temp * 9 / 5) + 32).toFixed(0)
    
    return (

        <>
       
     
       

         <section>
        
           <div className="card">
            <div className="content_card">
                 <h1>{ isCelsius ? celsius : fahr} {isCelsius ? "°C" : "°F"}</h1>
                 <h2>{weather.name}, {weather.sys?.country}</h2>
                <h3>{icon.main}</h3>
                <h4>{icon.description}</h4>
                <img src={iconsWeather()} alt="error loading icon"></img>
                <h5>Pressure: {weather.main?.pressure}</h5>
                <p>Humidity: {weather.main?.humidity}</p>
                
            </div>
           </div>
           
        
           <button className="changeUnits" onClick={fahrenheit}>{isCelsius? "Change to °F" : "Change to °C"}</button>
        </section>
        </>
    )

}



export default Weather