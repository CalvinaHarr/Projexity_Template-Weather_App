import React, { useState } from 'react';
import './WeatherApp.css';


const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState(null);
    
    const handleFetch = async (lat, lon) => {
        try{
            const response = await fetch(`https://api.weather.gov/points/${lat},${lon}`);
            const data = await response.json();
            console.log(data);
            setWeatherData(data);// Set the fetched data in the state
        } catch (error) {
            console.error('Error:', error);
        }
    };
    
    return (
        <div>
            <h1>Weather App</h1>
            <button className="cities" onClick={() => handleFetch(40.7143, -74.0060)}>
                New York</button>
            {weatherData && (
                <div>
                    <h1>bruh</h1>
                    <p>City: {weatherData.properties.relativeLocation.properties.city}</p>
                    <p>Temperature: {weatherData.properties.temperature.value}°F</p>
                    <p>Forecast: {weatherData.properties.periods[0].detailedForecast}</p>
                </div>
            )}
            <button className="cities" onClick={() => handleFetch(38.8894, -77.0352)}>
                Washington, D.C.</button>
            {weatherData && (
                <div>
                    <p>City: {weatherData.properties.relativeLocation.properties.city}</p>
                    <p>Temperature: {weatherData.properties.temperature.value}°F</p>
                    <p>Forecast: {weatherData.properties.periods[0].detailedForecast}</p>
                </div>
            )}
            <button className="cities" onClick={() => handleFetch(34.0522, -118.2437)}>
                Los Angeles</button>
            {weatherData && (
                <div>
                    <p>City: {weatherData.properties.relativeLocation.properties.city}</p>
                    <p>Temperature: {weatherData.properties.temperature.value}°F</p>
                    <p>Forecast: {weatherData.properties.periods[0].detailedForecast}</p>
                </div>
            )}
        </div>
    );
};

export default WeatherApp;