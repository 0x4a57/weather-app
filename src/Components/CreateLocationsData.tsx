
import { useState } from 'react'
import { useEffect } from 'react'

import WeatherCard from './WeatherCard'
import ForecastCard from './ForecastCard'

export type LocationData = {
        name: string,
        country?: string,
        region?: string,
        humidity?: string,
        cloud?: string,
        feelslike_c?: string,
        uv?: string
        last_updated?: string
}

export type ForecastData = {
    date: string
    astro: {
        sunset: string,
        sunrise: string,
    }
    day: { 
        avghumidity:string,
        avgtemp_c:string,
        condition: {
            text: string,
            icon: string,
            maxtemp_c:string,
        }
    }
}



function Output(props: any) {

    const [userLocation, setLocation] = useState<LocationData>({name: ''});

    const [forecastData, setForecastData] = useState([]);

    const [loading, setIsLoading] = useState(false);

    function loadData() {
        setIsLoading(true);
        if (props.userInput.length >= 3) {
            setLocation({
                ...userLocation, 
                name: props.userInput 
            });
            setForecastData([]);  
            fetch('https://api.weatherapi.com/v1/forecast.json?key=e377c29f8c5644a5be7124808240209&q=' + props.userInput + '&days=5&aqi=no&alerts=no')
                .then((response) => {
                    if (!response.ok) throw new Error();
                    else return response.json();
                })
                .then((data) => {
                    setIsLoading(false);
                    setLocation({
                        ...userLocation,
                        name: data.location.name,
                        country: data.location.country,
                        region: data.location.region,
                        humidity: data.current.humidity,
                        cloud: data.current.cloud,
                        feelslike_c: data.current.feelslike_c,
                        uv: data.current.uv,
                        last_updated: data.current.last_updated
                    });
                    setForecastData(data.forecast.forecastday);   
                })
                
                .catch((error) => {
                    console.log(error);
                });
        }
        
    }

    useEffect(loadData, [props.userInput]);

    return (
        <>
        
                <WeatherCard isLoading={loading} userLocation={userLocation} />
                <div className="clearfix"></div>
                <>
                {forecastData.map((data, index) => {
                     console.log(data);
                    return  <ForecastCard isLoading={loading} key={index} userLocationForecast={data} />
                }) }
                </>
            
        </>
    );
}

export default Output
