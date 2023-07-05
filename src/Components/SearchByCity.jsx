import { useState, useEffect } from 'react'
import axios from 'axios'

const SearchByCity = () => {

const [ city, setCity] = useState('London')

const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b1422ce73fb514e80f02246a9f668d87&units=metric`


useEffect(() => 
{
    
    axios
    .get(baseURL) 
    .then(response => {
        setCity(response.data)
        })
     .catch(err => console.log(err))


}, [])

const handleChange = event => {
    setCity(event.target.value)
}

    return(
        <>
        <form>
            <input type='search' value={city} placeholder="Introduce city name" onChange={handleChange}/>
            <button>Search</button>
        </form>
        </>
    )
}

export default SearchByCity