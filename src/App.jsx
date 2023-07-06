import './App.css'
import { useState } from 'react'
import Weather from './Components/Weather'
import Loader from './Components/Loader'

function App() {
 
  const [ isLoading, setIsLoading] = useState(true)
  
  return (
    <>
      {isLoading && <Loader/>}
      <Weather
      setIsLoading={setIsLoading}></Weather>
    </>
  )
}

export default App
