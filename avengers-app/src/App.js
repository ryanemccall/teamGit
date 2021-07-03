import React, { useState } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Sidebar from "./Sidebar";
import TicketMaster from "./apps/ticket-master/TicketMaster";
import Nasa from "./apps/nasa/Nasa";
import OpenWeather from "./apps/open-weather/OpenWeather";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position);
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  };
  
  getLocation();
  console.log(`Latitude is ${lat}`);
  console.log(`Longitude is ${long}`);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        
        <h1>
          Avengers 72-hr Project
        </h1>
        
          <p>
          Your current location:
          <br />
          latitude: {lat}
          <br />
          longitude: {long}
        </p>
        
        {/* <Router>
          <Sidebar />
        </Router> 
I'm commenting out this for now until it get's sorted - not high priority
also for reason when it is in - the openweather content displays 2x in the app landing
*/}
        
        
        <Router>
          <TicketMaster
            setLat={setLat}
            setLong={setLong}
            lat={lat}
            long={long}
          />
        </Router>
        <Router>
           <Nasa
            // setLat={setLat}
            // setLong={setLong}
            lat={lat}
            long={long}
          />
        </Router>
        
        <Router>
           <OpenWeather
            setLat={setLat}
            setLong={setLong}
            lat={lat}
            long={long}
          />
          
        </Router>
        
        <br />
          <ul>
            <li>
              Shannon
            </li>
            <li>
              Ryan M
            </li>
             <li>
              Em J
            </li>
          </ul>
          
      </header>
    </div>
  );
};

export default App;
