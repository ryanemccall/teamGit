import React, { useState } from "react";

const baseURL = 'https://api.openweathermap.org/data/2.5/onecall'
const key = '025f21b62fdecae856acb53863070e47';

const OpenWeather = (props) => {
    const {lat, long} = props;
const [search, setSearch] = useState('');
const [results, setResults] = useState([]);
    const fetchResults = () => {
        let url = `${baseURL}?lat=${lat}&lon=${long}&exclude=minutely&appid=${key}`

        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
        
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        fetchResults();
    }
    
    return (
        <div>
            <h3>
            OpenWeather API
            </h3>
            open weather content
            <div>
                <button onClick={(event) => handleSubmit(event)}>Click Here for Current Weather in your Area!</button>
            </div>
        </div>

    );
};


export default OpenWeather;