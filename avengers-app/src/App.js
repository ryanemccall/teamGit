import React, { useState } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
//import Sidebar from "./Sidebar";
import TicketMaster from "./apps/ticket-master/TicketMaster";
import Nasa from "./apps/nasa/Nasa";
import OpenWeather from "./apps/open-weather/OpenWeather";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  
  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(function (position) {
        // console.log(position);
        setLat((position.coords.latitude).toFixed(3)); //to fixed will round the variable to 3 decimal points
        setLong((position.coords.longitude).toFixed(3));
      });
  };
  
  getLocation();
  console.log(`Latitude is ${lat}`);
  console.log(`Longitude is ${long}`);
  
  return (
    <div className="App">
      <header className="App-header">
        <br />
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        
        <h1>
          The Avengers 72-hr Project
        </h1>
        <p class="small">An app all about location, location, location. </p>
          <p>
          Your current location:
          <br />
          latitude: {lat}
          <br />
          longitude: {long}
        </p>
        
        <Router>
          {/* <Sidebar /> */}
          
          <Nasa
            setLat={setLat}
            setLong={setLong}
            lat={lat}
            long={long}
          />

          <OpenWeather
            setLat={setLat}
            setLong={setLong}
            lat={lat}
            long={long}
          />
          <TicketMaster
            setLat={setLat}
            setLong={setLong}
            lat={lat}
            long={long}
          />

        </Router> 

        <br />
        <small className="text-muted">
        <h5>Group Members
        </h5>
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
          </small>
      
      </header>
    </div>
  );
};

export default App;
