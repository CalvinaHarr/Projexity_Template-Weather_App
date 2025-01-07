import React from 'react';
import './WeatherApp.css';

const WeatherApp = () => {
    return (
        <div>
            <h1>Weather App</h1>
            <button className="cities">New York</button>
            <button className="cities">Washington, D.C.</button>
            <button className="cities">Los Angeles</button>
        </div>
    );
};

export default WeatherApp;