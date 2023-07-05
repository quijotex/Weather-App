import cloudLoader from '/src/assets/cloudLoader.svg'
const Loader = () => {

    return(
        <div className="loader">
            <div className='cloud'>
            <img src={cloudLoader} alt=''/>
             <h3>Weather App</h3>
             </div>
            <div className="spinner">
                <div className="dot1"></div>
                <div className="dot2"></div>
                <div className="dot3"></div>
            </div>
        </div>
    )

}

export default Loader