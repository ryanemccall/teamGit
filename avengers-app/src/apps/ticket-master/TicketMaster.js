import React from 'react';
import { Button, Table, Row, Col } from 'reactstrap';
import { useState } from "react";
import TMEventResults from './TMEventResults'

const TicketMaster = (props) => {

    //declare URL & key
    const baseUrl = "http://apiurl";
    const apiKey = "haioasdfkmlkjicun"
    //declare props here again to be called as lat and long
    let lat = { props.lat };
    let long = { props.long };
    
    const [eventResults, setEventResults] = useState([]);
    
    //set method to fetch results
    //pass props inside 
    const getEvents = () => {
        event.preventDefault();
        //set fetch url
        let url = `${baseURL}?api-key=${apiKey}&lat=${lat}&long=${long}`
        //do fetch
        fetch(url)
            //jsonify it 
            .then(res => res.json())
            //name object data so we can refer to it 
            //then store it in the results var by calling on useState
            .then(data => setEventResults(data.walkthruobj.totheevents))
        console.log(data)
            //display errors 
            .catch(err => console.log(err.message))
    };
    
    return (
        <div className="mainDiv">
            <br />
            <h3>
            TicketMaster API
            </h3>
            {/* <p>
             {props.lat}
                <br />
                {props.long} 
            </p> */}
            {/* user location already retrieved
            once click it fires fetch */}
            <Button
                onClick={getEvents}>
                Get Events Near Me
            </Button>
{/*             
            call on child component to display results */}
            <TMEventResults
                //pass event object/var into it
                eventResults={eventResults}
            />
        
        </div>

    );
};


export default TicketMaster;