import { useEffect, useState } from 'react';
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
                <p>Unfortunately, we can't determine your location. In a broad sense, then, all events on Earth could be available to you, though not all will be convenient.</p>
            </div>
        )
    }

};

export default TicketMaster;