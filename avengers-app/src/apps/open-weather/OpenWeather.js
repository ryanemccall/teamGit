
import React, { useState } from "react";

const baseURL = 'https://api.openweathermap.org/data/2.5/onecall'
const key = '0c0cca99463c77df2df1120359bcb1bd';

const OpenWeather = (props) => {
    const {lat, long} = props;
    const [temperature, setTemperature] = useState("");
    const [feelsLike, setFeelsLike] = useState("");
    const [unit, setUnit] = useState("F");
    const otherUnit = unit === "F" ? "C" : "F";

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
    const handleSubmit = (event) => {
        event.preventDefault();
        fetchResults();
    };

    let convertUnit = () => {
        if (unit === "F") {
            let newTemp = ((temperature -32) * 5) / 9;
            setTemperature(Math.round(newTemp))
            setUnit(otherUnit);
        }
        if (unit === "C") {
            let newTemp = temperature * 1.8 + 32;
            setTemperature(Math.round(newTemp))
            setUnit(otherUnit);
        }
    }
    
    return (
        <div>
            <h3>
            OpenWeather API
            </h3>
            <div>
                <button onClick={(event) => handleSubmit(event)}>Click Here for Current Weather in your Area!</button>
                
            </div>
            <p>
                Current Temperature: {temperature}{unit}
                <br />
                Feels Like: {feelsLike}{unit}
                </p>
                <button onClick={convertUnit}>Convert to {otherUnit}</button>
        </div>

    );
};


export default OpenWeather;
