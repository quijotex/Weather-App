import { useState, useEffect } from 'react'
import axios from 'axios'

const SearchByCity = ({setIcon, setWeather}) => {

const [ data, setData] = useState({})
const [ img, setImg ] = useState({})
const [city, setCity] = useState('')



useEffect(() => 
{ 
   
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b1422ce73fb514e80f02246a9f668d87&units=metric`) 
    .then(response => {
        setData(response.data)
        setImg(response.data.weather[0])
        })
     .catch(err => console.log(err))
    }, [city])


const searchCity = () => {
        setWeather(data)
        setIcon(img)
}

    return(
        <>
        <div>
            <button className="button-search"onClick={searchCity}><i class='bx bx-search'></i></button>
            <label >
            <input className='label-input' type='search' id="inputId" name="SearchByCity" value={city} placeholder="Search by city" onChange={e => setCity(e.target.value)}/>
            </label>
            </div>
        </>
    )
}

export default SearchByCity