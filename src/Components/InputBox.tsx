
import { useState } from 'react'
import LocationDataComponent from './LocationDataComponent'


export function InputBox() {
    const [value, setValue] = useState("");
 
    return (
        <>
            <div className="input-group input-group-lg mb-3">
                
                <input type="text" className="form-control rounded" placeholder="Search for a location" aria-label="location" aria-describedby="basic-addon1" value={value} onChange={event => setValue(event.target.value)}></input>
                    
            </div>
            

            { value.length <= 2 || value == "" ? 
                <></>
            : 
                <LocationDataComponent userInput={value} />
            }

            
        </>
    );
}

