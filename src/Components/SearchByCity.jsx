import { useState } from 'react'
import axios from 'axios'

const SearchByCity = ({setIcon, setWeather}) => {

const [city, setCity] = useState('')


const searchCity = () => {
    
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b1422ce73fb514e80f02246a9f668d87&units=metric`) 
    .then(response => {
            setWeather(response.data)
            setIcon(response.data.weather[0])
        })
         .catch(err => console.log(err))

}


    return(
        <>
        <div>
            <button className="button-search" onClick={searchCity}><i className='bx bx-search'></i></button>
            <input className='label-input' type='text' id="inputId" 
            value={city} name="SearchByCity" placeholder="Search by city" onChange={(e) => setCity(e.target.value)
}/>
            </div>
        </>
    )
}

export default SearchByCity