
import { ForecastData } from './LocationDataComponent';

type IProps = {
    userLocationForecast: ForecastData,
    isLoading: boolean
 }

 const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
 
 export function ForecastCard({ userLocationForecast, isLoading }: IProps) {
    const days = new Date(userLocationForecast.date_epoch * 1000);
    const day = days.getDay();
    return (
        <>
            <div className="flex-column">
                { 
                    isLoading ? 
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                : 
                <>
                    <p className="small white"><strong>{userLocationForecast.day.maxtemp_c} °C <br></br><small>{userLocationForecast.day.mintemp_c}</small> °C</strong></p>
                    <img className="mb-3"src={userLocationForecast.day.condition.icon}></img>
                    <p className="mb-0 white"><strong>{dayNames[day]}</strong></p>
                </>
            }

            </div> 
        
        </>
    );
}


