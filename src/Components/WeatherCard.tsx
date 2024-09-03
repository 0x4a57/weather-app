
import { IlocationData } from '../Components/CreateLocationsData';

interface IProps {
    locationData: IlocationData
    isLoading: boolean
 }
function WeatherCard({ locationData, isLoading }: IProps) {
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
                            <h5 className="card-title">Location: {locationData.name}</h5>
                            <p className="card-text">Country: {locationData.country}, Region: {locationData.region}</p>
                            <p className="card-text">Cloud: {locationData.cloud}, Humidity: {locationData.humidity}</p>
                            <p className="card-text">Feels Like: {locationData.feelslike_c}, UV: {locationData.uv}</p>
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
