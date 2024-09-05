
import { LocationData } from './LocationDataComponent';

type IProps = {
    userLocation: LocationData,
    isLoading: boolean
 }

 export function WeatherCard({ userLocation, isLoading }: IProps) {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center px-5 py-5 gradient-custom rounded min-card-height currentweather" >
            { isLoading ? 
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                : 
                <>
                    <div className="col-12 col-md-6">
                        <h2 className="text-dark display-2"><strong>{userLocation.feelslike_c}°C</strong></h2>
                        <p className="text-dark mb-0">{userLocation.name}</p>
                        <p className="text-dark mb-0">{userLocation.condition?.text}</p>
                    </div>
                    <div className="col-12 col-md-6 text-end">
                        <img src={userLocation.condition?.icon} width="120px"></img>
                    </div>
                    </>
            }
            </div>          
        </>
    );
}

