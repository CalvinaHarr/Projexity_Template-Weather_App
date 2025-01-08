import React from 'react';
import './WeatherApp.css';

const handleFetch = async (lat, lon) => {
    try{
        const response = await fetch(`https://api.weather.gov/points/${lat},${lon}`);
        const data = await response.json();
        console.log(data);
        return response;
    } catch (error) {
        console.error('Error:', error);
    }
};

const WeatherApp = () => {
    return (
        <div>
            <h1>Weather App</h1>
            <button className="cities" onClick={() => handleFetch(40.7143, -74.0060)}>
                New York</button>
            <button className="cities" onClick={() => handleFetch(38.8894, -77.0352)}>
                Washington, D.C.</button>
            <button className="cities" onClick={() => handleFetch(34.0522, -118.2437)}>
                Los Angeles</button>
        </div>
    );
};


export default WeatherApp;