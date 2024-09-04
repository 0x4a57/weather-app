
import { ForecastData } from './CreateLocationsData';

type IProps = {
    userLocationForecast: ForecastData,
    isLoading: boolean
 }
function ForecastCard({ userLocationForecast, isLoading }: IProps) {
    return (
        <>
        <div className="col w-25">
                <div className="list-group mb-3 mt-3">
                    <div className="list-group-item list-group-item-action " aria-current="true">
                    <h3 className="mb-1 mt-2">Forecast</h3>
                    { isLoading ? 
                        <div className="card-body mb-5 mt-5 text-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    : 
                    <>
                        <div className="row-eq-height">
                        <h5 className="mb-2 mt-2">{userLocationForecast.day.condition.text}</h5>
                            <div className="clearfix"></div>
                            <img className="mb-1 w-25" src={userLocationForecast.day.condition.icon}></img>
                            <div className="clearfix"></div>
                            <p className="mb-1">Date: {userLocationForecast.date}</p>
                            <p className="mb-1">Temp: {userLocationForecast.day.avgtemp_c}</p>
                            <p className="mb-1">Humidity: {userLocationForecast.day.avghumidity}</p>
                            <div className="clearfix"></div>
                            
                            <div className="clearfix"></div>
                            <p className="mb-1">Max Temp: {userLocationForecast.day.condition.text}</p>
                            <div className="clearfix"></div>

                            <p className="mb-1">Sunrise: {userLocationForecast.astro.sunrise}</p>
                            <p className="mb-1">Sunset: {userLocationForecast.astro.sunset}</p>
                        </div>
                        </>
                    }
                    </div>
                </div>
            </div>
        </>
    );
}

export default ForecastCard
