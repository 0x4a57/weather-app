
import { useState } from 'react'
import LocationsData from './CreateLocationsData'


function App() {
    const [value, setValue] = useState("LHR");
 
    return (
        <>
            <div className="input-group input-group-lg mb-3">
                
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={value} onChange={event => setValue(event.target.value)}></input>
                    
            </div>

         
            <LocationsData value={value} />
        </>
    );
}

export default App
