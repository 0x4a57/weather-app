
import { locationData } from '../Components/CreateLocationsData';

interface IProps {
    locationtest: locationData
    isLoading: boolean
 }
function WeatherCard({ locationtest, isLoading }: IProps) {
    return (
        <>
            <div className="card text-center">
                <div className="card-header">
                    <strong>Weather</strong>
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
                            <h5 className="card-title">Location: {locationtest.name}</h5>
                            <p className="card-text">Country: {locationtest.country}, Region: {locationtest.region}</p>
                            <p className="card-text">Cloud: {locationtest.cloud}, Humidity: {locationtest.humidity}</p>
                            <p className="card-text">Feels Like: {locationtest.feelslike_c}, UV: {locationtest.uv}</p>
                        </div>
                        <div className="card-footer text-body-secondary">
                            Updated {locationtest.last_updated}
                        </div>
                    </>
                }
            </div>
            
        </>
    );
}

export default WeatherCard
