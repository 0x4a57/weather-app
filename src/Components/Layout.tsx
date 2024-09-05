
import { InputBox } from './InputBox'
import '../App.css'

export function Layout() {
  
    return (
        <>
            <div className="container vh-100 px-2 py-5 px-md-5 py-md-5 ">
                <div className="row h-100 align-items-center">
                    <div className="col-12 justify-content-center flex-column">
                        <h1 className="mb-5 white ">Weather dashboard with API</h1>
                        <InputBox />
                        <p className="white mt-5">Made by Jack Woodhouse</p>
                    </div>
                </div>
            </div>
        </>
    );
}


