import { useEffect, useState, useRef } from 'react';
const TicketMaster = (props) => {
    
    let [eventName, setEventName] = useState("");
    let [eventURL, setEventURL] = useState("");
    let [eventImgURL, setEventImgURL] = useState("");
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

    useRef(() => {
        if (lat && long) {
            url = `https://app.ticketmaster.com/discovery/v2/events?apikey=etyd9ynkKnLqJWFl0KV66dolqNYGtCIK&latlong=${lat},${long}&radius=25&unit=miles&source=%20universe&locale=*`;
        }
    });
    


    console.log(`URL: ${url}`);


    const getLocalEvents = async () => {
        // This code only deals with one event - so so so brittle. But right now I would be happy to get ANY event onto the page, and not just console.log. Still, the giant TODO is to have it iterate through a collection of events, if any, and display, or fail gracefully when no events. https://allorigins.win/ fixes the CORS issue
            const res = await fetch(`https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`);
            const jsonData = await res.json();
            let allEventsArray = jsonData._embedded.events;
            let eventsList = document.getElementById('events-list');
            let listItem = document.createElement('li');
            let listItemName = document.createElement('h4');
            let listItemURL = document.createElement('a');
            let listItemImageURL = document.createElement('img');

            console.log(`***** EVENT URL Data: ${JSON.stringify(jsonData._embedded.events[0].url,null,4)}`);

            console.log(`***** EVENT NAME Data: ${JSON.stringify(jsonData._embedded.events[0].name,null,5)}`);

            console.log(`DIRECT FROM jsonData\n${jsonData._embedded.events[0].name}`);


            console.log(`---------------------------------`);
            
            for (let i=0; i<allEventsArray.length; i++) {
                console.log(allEventsArray[i].name);
                console.log(allEventsArray[i].url);
                console.log(allEventsArray[i].images[2].url);

                eventsList.appendChild(listItem);
                listItem.appendChild(listItemName);
            
            };
            console.log(`---------------------------------`);

            setEventName(() => {
                eventName = jsonData._embedded.events[0].name;
            })
            setEventURL(() => {
                eventURL = jsonData._embedded.events[0].url;
            })
            setEventImgURL(() => {
                eventImgURL = jsonData._embedded.events[0].images[2].url;
            })

            console.log(`eventNAME: ${eventName} \neventURL: ${eventURL}\neventImgURL: ${eventImgURL}`);

            return;
    };


if (lat && long) {
    getLocalEvents();
    // document.getElementById('testmeh').innerText=eventName;
    console.log(`last go at eventName ${eventName}`);
    return (
        (
            <div>
                <br />
                <h3>Events within about 25 miles of you</h3>
                <div>
                    <p>if we get lat lon, list any returns here</p>
                    <ul id='events-list'>

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
// return lat && long ? 
//         (
//         <div>
//             <br />
//             <h3>Events within about 25 miles of you</h3>
//             <div>
//                 <p>if we get lat lon, list any returns here</p>
//                 <p id='testmeh'>display</p>
//                 <p>{eventName}</p>
//             </div>
//         </div>
//         )
//     :
//         (
//             // if we don't get lat lon, serve this instead
//         <div>
//             <br />
//             <h3>Events within about 25 miles of you</h3>
//             <p>Unfortunately, we can't determine your location. In a broad sense, then, all events on Earth could be available to you, though not all will be convenient.</p>
//         </div>
//         );

};

export default TicketMaster;