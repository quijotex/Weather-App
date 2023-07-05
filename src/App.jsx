import './App.css'
import Weather from './Components/Weather'
import SearchByCity from './Components/SearchByCity'

function App() {
 

  return (
    <>
      <header>
     <div className='header'>
       <h1>Weather App</h1>
       <input type='search' placeholder="🔍 Search by city"/>
       <input type='chexbox'></input>
        </div>
     </header>
      <Weather></Weather>
    </>
  )
}

export default App
