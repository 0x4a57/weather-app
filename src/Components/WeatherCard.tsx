
import { LocationData } from './CreateLocationsData';

type IProps = {
    userLocation: LocationData,
    isLoading: boolean
 }
function WeatherCard({ userLocation, isLoading }: IProps) {
    return (
        <>
        <div className="col w-100">
            <div className="card text-center">
                <div className="card-header">
                    <h1><strong>Weather</strong></h1>
                </div>

                { isLoading ? 
                    <div className="card-body">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    : 
                    <>
                        <div className="card-body">
                            <h5 className="card-title">Location: {userLocation.name}</h5>
                            <p className="card-text">Country: {userLocation.country}, Region: {userLocation.region}</p>
                            <p className="card-text">Cloud: {userLocation.cloud}, Humidity: {userLocation.humidity}</p>
                            <p className="card-text">Feels Like: {userLocation.feelslike_c}, UV: {userLocation.uv}</p>
                        </div>
                        <div className="card-footer text-body-secondary">
                            Updated {userLocation.last_updated}
                        </div>
                    </>
                }
            </div>
            </div>
            
        </>
    );
}

export default WeatherCard
