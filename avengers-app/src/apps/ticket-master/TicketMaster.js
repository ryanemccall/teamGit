import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle, Button,  CardImg} from 'reactstrap';

const TicketMaster = (props) => {

    const [events, setEvents] = useState([]);
    const {lat, long} = props;
    
    let url = `https://app.ticketmaster.com/discovery/v2/events?apikey=etyd9ynkKnLqJWFl0KV66dolqNYGtCIK&latlong=${lat},${long}&radius=25&unit=miles&sort=random&locale=*`;

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
                <div className="apiDisplay">
                    <br />
                    <h2>Events Near You
                    </h2>
                    <p>Upcoming events within 25 miles of your location:</p>
                    
                    <div>
                        {/* <p>if we get lat lon, list any returns here</p> */}
                        
                        <Card>
                            {events.map((event, index) => {
                                return (
                                    <Card key={index}>
                                    
                                        <CardImg src={event.images[1].url}
                                            alt="promotional shot of the event" />
                                        <CardBody>
                                            <CardTitle>{event.name}</CardTitle>
                                            <Button
                                                href={event.url} target="_blank" rel="noreferrer">
                                                More Info
                                            </Button>
                                            {/* //image used to be here */}
                                        </CardBody>
                                    </Card>
                                );
                             
                            })}
                            <p>
                                <small className="text-muted">
                                    All event information sourced from the <a class="App-link" href="https://developer.ticketmaster.com/products-and-docs/apis/getting-started/" target="_blank" rel="noreferrer">Ticket Master API.</a>
                                </small>
                    
                            </p>
                        </Card>
                        <br />
                 
                    </div>
                    
                </div>
            )
        )
    } else {
        return (
                // if we don't get lat lon, serve this instead
                <div class="apiDisplay">
                <br />
                <h3>Events within about 25 miles of you</h3>
                <p>Whoops! We cannot determine your location. Technically, all events on Earth could be available to you, though not all will be convenient.</p>
            </div>
        )
    }
};

export default TicketMaster;