<<<<<<< HEAD
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
=======
import { useEffect, useState } from 'react';
const TicketMaster = (props) => {

    const [events, setEvents] = useState([]);
    const {lat, long} = props;
    
    let url = `https://app.ticketmaster.com/discovery/v2/events?apikey=etyd9ynkKnLqJWFl0KV66dolqNYGtCIK&latlong=${lat},${long}&radius=25&unit=miles&sort=random&locale=*`;
>>>>>>> 70935e9b836a8f461557ec1b260f020222e0f1b7


    useEffect(() => {

        const getLocalEvents = async () => {

            const res = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`);
            const jsonData = await res.json();
            let allEventsArray = jsonData._embedded.events;

            setEvents(allEventsArray);

            return;
        };
        getLocalEvents();

    }, [url]);


    if (lat && long) {

        return (
            (
                <div>
                    <br />
                    <h3>Here's an event or 20, coming soon to within about 25 miles of you</h3>
                    <div>
                        {/* <p>if we get lat lon, list any returns here</p> */}
                        
                        <ul>
                        {events.map((event, index) => {
                            return (
                                <li key={index}>
                                <h4>
                                <a href={event.url}>
                                {event.name}
                                </a>
                                </h4>
                                <img src={event.images[1].url} 
                                height={'auto'} 
                                width={'80%'}
                                alt="promotional shot of the event" />
                                <hr />
                                </li>
                            );
                        })}
                        </ul>
                    </div>
                </div>
                )
        )
    } else {
        return (
                // if we don't get lat lon, serve this instead
                <div>
                <br />
                <h3>Events within about 25 miles of you</h3>
                <p>Unfortunately, we cannot determine your location. In a broad sense, then, all events on Earth could be available to you, though not all will be convenient.</p>
            </div>
        )
    }
};

export default TicketMaster;