
import { useState } from 'react'
import { useEffect } from 'react'

import WeatherCard from './WeatherCard'

interface Props {
  value: string
}

export interface IlocationData {
        name: string,
        country: string,
        region: string,
        wind_mph: string,
        wind_kph: string,
        wind_degree: string,
        wind_dir: string,
        pressure_mb: string,
        pressure_in: string,
        precip_mm: string,
        precip_in: string,
        humidity: string,
        cloud: string,
        feelslike_c: string,
        feelslike_f: string,
        windchill_c: string
        windchill_f: string
        heatindex_c: string
        heatindex_f: string
        dewpoint_c: string
        dewpoint_f: string
        vis_km: string
        vis_miles: string
        uv: string
        gust_mph: string
        gust_kph: string
        last_updated: string
}

function Output(value: Props) {

    const [location, setLocation] = useState({
        name: '',
        country: '',
        region: '',
        wind_mph: '',
        wind_kph: '',
        wind_degree: '',
        wind_dir: '',
        pressure_mb: '',
        pressure_in: '',
        precip_mm: '',
        precip_in: '',
        humidity: '',
        cloud: '',
        feelslike_c: '',
        feelslike_f: '',
        windchill_c: '',
        windchill_f: '',
        heatindex_c: '',
        heatindex_f: '',
        dewpoint_c: '',
        dewpoint_f: '',
        vis_km: '',
        vis_miles: '',
        uv: '',
        gust_mph: '',
        gust_kph: '',
        last_updated: '',
      });

    const [loading, setIsLoading] = useState(false);

    function loadData() {
        setIsLoading(true);
        if (value.value.length >= 3) {
            setLocation({
                ...location,
                name: value.value
            });
            fetch('https://api.weatherapi.com/v1/current.json?key=e377c29f8c5644a5be7124808240209&q=' + value.value + '&aqi=no')
                .then((response) => {
                    if (!response.ok) throw new Error();
                    else return response.json();
                })
                .then((data) => {
                    setIsLoading(false);
                    setLocation({
                        ...location,
                        name: data.location.name,
                        country: data.location.country,
                        region: data.location.region,
                        wind_mph: data.current.wind_mph,
                        wind_kph: data.current.wind_kph,
                        wind_degree: data.current.wind_degree,
                        wind_dir: data.current.wind_dir,
                        pressure_mb: data.current.pressure_mb,
                        pressure_in: data.current.pressure_in,
                        precip_mm: data.current.precip_mm,
                        precip_in: data.current.precip_in,
                        humidity: data.current.humidity,
                        cloud: data.current.cloud,
                        feelslike_c: data.current.feelslike_c,
                        feelslike_f: data.current.feelslike_f,
                        windchill_c: data.current.windchill_c,
                        windchill_f: data.current.windchill_f,
                        heatindex_c: data.current.heatindex_c,
                        heatindex_f: data.current.heatindex_f,
                        dewpoint_c: data.current.dewpoint_c,
                        dewpoint_f: data.current.dewpoint_f,
                        vis_km: data.current.vis_km,
                        vis_miles: data.current.vis_miles,
                        uv: data.current.uv,
                        gust_mph: data.current.gust_mph,
                        gust_kph: data.current.gust_kph,
                        last_updated: data.current.last_updated,
                    });
                    console.log(JSON.stringify(data, null, 2));
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        
    }

    useEffect(loadData, [value.value]);

    return (
        <div>
            
            <div> 
                <WeatherCard isLoading={loading} locationData={location} />
            </div> 
        </div>
    );
}

export default Output
