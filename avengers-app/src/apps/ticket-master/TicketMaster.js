import { useEffect, useState, useRef } from 'react';
const TicketMaster = (props) => {

    const [events, setEvents] = useState([]);
    
    let eventsList = document.getElementById('events-list');
    let listItem = document.createElement('li');
    let listItemName = document.createElement('h4');
    let listItemURL = document.createElement('a');
    let listItemImageURL = document.createElement('img');

    
    let [eventName, setEventName] = useState("");

    // return (
    //     <div>
    //         <br />
    //         <h3>
    //         OpenWeather API
    //         </h3>
    //         open weather content
    //     </div>

    // );

    
    const {lat, long} = props;
    let url = `https://app.ticketmaster.com/discovery/v2/events?apikey=etyd9ynkKnLqJWFl0KV66dolqNYGtCIK&latlong=${lat},${long}&radius=25&unit=miles&source=%20universe&locale=*`;

    console.log(`top of TicketMaster - Lat: ${lat}, Lon: ${long}`);


    console.log(`URL: ${url}`);

    useEffect(() => {

        const getLocalEvents = async () => {

            const res = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`);
            const jsonData = await res.json();
            let allEventsArray = jsonData._embedded.events;

            console.log(`---------------------------------`);
            for (let i=0; i<allEventsArray.length; i++) {
                console.log(allEventsArray[i].name);
                console.log(allEventsArray[i].url);
                console.log(allEventsArray[i].images[2].url);

            };
            console.log(`---------------------------------`);

            setEvents(allEventsArray);

            return;
        };
        getLocalEvents();

    }, [url]);


    console.log(`*********** RETURNED EVENTS ARRAY ************ ${events}`);
    for (let i=0; i<events.length; i++) {
        listItemURL.setAttribute("href", events[i].url);
        listItemURL.textContent = events[i].name;
        listItemImageURL.setAttribute("src", events[i].images[2].url);

        listItemName.appendChild(listItemURL);
        eventsList.appendChild(listItem);
        listItem.appendChild(listItemImageURL);
        listItem.appendChild(listItemName);
    }

if (lat && long) {
    // document.getElementById('testmeh').innerText=eventName;
    console.log(`last go at eventName ${eventName}`);
    return (
        (
            <div>
                <br />
                <h3>Events within about 25 miles of you</h3>
                <div>
                    {/* <p>if we get lat lon, list any returns here</p> */}
                    <ul id='events-list'>
                    {/* {`${JSON.stringify(events, null, 4)}`} */}
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