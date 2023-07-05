import './App.css'
import { useState } from 'react'
import Weather from './Components/Weather'
import SearchByCity from './Components/SearchByCity'
import Switch from './Components/Switch'
import Loader from './Components/Loader'

function App() {
 
  const [ isLoading, setIsLoading] = useState(true)
  
  return (
    <>
      {isLoading && <Loader/>}
      <Switch/>
      <Weather
      setIsLoading={setIsLoading}></Weather>
    </>
  )
}

export default App
