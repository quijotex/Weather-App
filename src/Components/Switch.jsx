import { useEffect, useState } from "react";

const Switch = () => {

    const [isLight, setIsLight] = useState('light');

    useEffect(() => {

        document.body.setAttribute('data-theme', isLight);

    }, [isLight]);

    const handleChange = (e)=>setIsLight(e.target.checked ? 'dark' : 'light');

    return (
       <>
        <div  className="container-switch">
            <label className="switch">
                <input type="checkbox" onChange={handleChange} checked={isLight === 'dark'} />
                <span className="slider"></span>
            </label>
        </div>
       </>
        
    )
}
export default Switch
