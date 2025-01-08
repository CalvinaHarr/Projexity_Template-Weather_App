import React from 'react';
import './WeatherApp.css';

const handleFetch = (lat, lon) => {
    let BASE_URL = "https://api.weather.gov";
    fetch(`https://api.weather.gov/${lat},${lon}`)
        .then(response => response.json())
        .catch(error => console.error('Error:', error));
    console.log("big chungus");
    alert("big chungus");
};

const WeatherApp = () => {
    return (
        <div>
            <h1>Weather App</h1>
            <button className="cities" onClick={() => handleFetch(38.8894, -77.0352)}>
                New York</button>
            <button className="cities" onClick={() => handleFetch(38.8894, -77.0352)}>
                Washington, D.C.</button>
            <button className="cities" onClick={() => handleFetch(38.8894, -77.0352)}>
                Los Angeles</button>
        </div>
    );
};


export default WeatherApp;