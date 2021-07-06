
import React, { useState } from "react";
import { Button } from 'reactstrap';

const baseURL = 'https://api.openweathermap.org/data/2.5/onecall'
const key = '0c0cca99463c77df2df1120359bcb1bd';

const OpenWeather = (props) => {
    const {lat, long} = props;
    const [temperature, setTemperature] = useState("");
    const [feelsLike, setFeelsLike] = useState("");
    const [unit, setUnit] = useState("\u00b0 F");
    const otherUnit = unit === "\u00b0 F" ? "\u00b0 C" : "\u00b0 F";

    const fetchResults = () => {
        let url = `${baseURL}?lat=${lat}&lon=${long}&units=imperial&exclude=minutely&appid=${key}`

        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setTemperature(data.current.temp)
            setFeelsLike(data.current.feels_like)
        })
        .catch(err => console.log(err));
        
    };
    // Added the event handler because without a button you will need a paid version of Open Weather because the maximum requests for the day are too low. 
    const handleSubmit = (event) => {
        event.preventDefault();
        fetchResults();
    };

    let convertUnit = () => {
        if (unit === "\u00b0 F") {
            let newTemp = ((temperature -32) * 5) / 9;
            let newFeel = ((feelsLike -32) * 5) / 9;
            setTemperature(Math.round(newTemp))
            setFeelsLike(Math.round(newFeel))
            setUnit(otherUnit);
        }
        if (unit === "\u00b0 C") {
            let newTemp = temperature * 1.8 + 32;
            let newFeel = feelsLike * 1.8 + 32;
            setTemperature(Math.round(newTemp))
            setFeelsLike(Math.round(newFeel))
            setUnit(otherUnit);
        }
    }
    
    return (
        <div>
            <br />
            <h2>
           Local Weather
            </h2>
            <div>
                <p>Local weather conditions as you head out today:</p>
            </div>
            <p>
                Current Temperature: {temperature} {unit}
                <br />
                Feels Like: {feelsLike} {unit}
            </p>
            <Button onClick={(event) => handleSubmit(event)}>Current Weather in your Area</Button>
            <br />
            <br />
            <Button onClick={convertUnit}>Convert to {otherUnit}</Button>
            <br />
            <br />
            <p>
                <small className="text-muted">
                All weather data sourced from the <a class="App-link" href="https://openweathermap.org/current" target="_blank" rel="noreferrer">Open Weather API.</a>
            </small>
            </p>
        </div>

    );
};


export default OpenWeather;
