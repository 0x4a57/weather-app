
import { useState } from 'react'
import { useEffect } from 'react'

import { WeatherCard }  from './WeatherCard'
import { ForecastCard }  from './ForecastCard'

export type LocationData = {
    name?: string,
    country?: string,
    region?: string,
    humidity?: string,
    cloud?: string,
    feelslike_c?: string,
    uv?: string
    last_updated?: string,
    condition?: {
        text: string,
        icon: string,
    }
}

export type ForecastData = {
    date: string
    date_epoch: number,
    astro: {
        sunset: string,
        sunrise: string,
    }
    day: { 
        avghumidity:string,
        avgtemp_c:string,
        maxtemp_c: string,
        mintemp_c: string,
        condition: {
            text: string,
            icon: string,
            maxtemp_c:string,
        }
    }
}


function LocationDataComponent(props: any) {

    const [userLocation, setLocation] = useState<LocationData>({});

    const [forecastData, setForecastData] = useState([]);

    const [loading, setIsLoading] = useState(false);

    function loadData() {
        setIsLoading(true);
        if (props.userInput.length >= 3) {
            setTimeout(function() {

                setLocation((userLocation) => ({
                    ...userLocation, 
                    name: props.userInput 
                }));
                setForecastData([]);  
                
                fetch('https://api.weatherapi.com/v1/forecast.json?key=e377c29f8c5644a5be7124808240209&q=' + props.userInput + '&days=5&aqi=no&alerts=no')
                    .then((response) => {
                        if (!response.ok) throw new Error();
                        else return response.json();
                    })
                    .then((data) => {
                        setIsLoading(false);
                        setLocation((userLocation) => ({
                            ...userLocation,
                            name: data.location.name,
                            country: data.location.country,
                            region: data.location.region,
                            humidity: data.current.humidity,
                            cloud: data.current.cloud,
                            feelslike_c: data.current.feelslike_c,
                            uv: data.current.uv,
                            last_updated: data.current.last_updated,
                            condition: data.current.condition
                        }));
                        setForecastData(data.forecast.forecastday);   
                    })
                    
                    .catch((error) => {
                        console.log(error);
                    });
            }, 300)
        }
        
    }

    useEffect(loadData, [props.userInput]);

    return (
        <>
        
            <WeatherCard isLoading={loading} userLocation={userLocation} />
            <div className="clearfix"></div>
            <>
            <div className="d-flex justify-content-around text-center align-items-center px-5 py-5 dark-background mt-3 forecast">
                {forecastData.map((data, index) => {
                    console.log(data);
                    return  <ForecastCard isLoading={loading} key={index} userLocationForecast={data} />
                }) }
            </div>
            </>
            
        </>
    );
}

export default LocationDataComponent
