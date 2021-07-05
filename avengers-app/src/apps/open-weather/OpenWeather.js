import React, { useState } from "react";

const baseURL = 'https://api.openweathermap.org/data/2.5/weather'
const key = '025f21b62fdecae856acb53863070e47';

const OpenWeather = (props) => {
    const {lat, long} = props;
const [search, setSearch] = useState('');
const [results, setResults] = useState([]);
    const fetchResults = () => {
        let url = `${baseURL}?lat=${lat}&lon=${long}&appid=${key}`

        fetch(url)
        .then(res => res.json())
        .then(data => setResults(data.response.docs))
        .catch(err => console.log(err));
    }
    return (
        <div>
            <br />
            <h3>
            OpenWeather API
            </h3>
            open weather content
        </div>

    );
};


export default OpenWeather;