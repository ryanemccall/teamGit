const TicketMaster = (props) => {
    // import { useEffect } from 'react';

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

    console.log(`top of TicketMaster - Lat: ${lat}, Lon: ${long}`);
    

    if (lat && long) {
    const url = `https://app.ticketmaster.com/discovery/v2/events?apikey=etyd9ynkKnLqJWFl0KV66dolqNYGtCIK&latlong=${lat},${long}&radius=25&unit=miles&source=%20universe&locale=*`;

    console.log(url);

    // let localEvents = JSON.parse(url);
    // console.log(localEvents );

    const getLocalEvents = async () => {
        try {
            const res = await fetch(url);
            const jsonData = res.json();
            console.log(`***** Data: ${JSON.stringify(jsonData, null,4)}, ${JSON.stringify(jsonData._embedded.events[0].url,null,4)}`);
            console.log(`***** Drilled-in Data: ${JSON.stringify(jsonData._embedded.events[0].name,null,5)}`);
            let display = JSON.stringify(jsonData._embedded.events[0].name);
            return display;
        } catch(err) {
            console.error(`Error: ${err},`);
            return
        }

        // return "RETURN DISPLAY HERE " + display;
    };

    getLocalEvents();
}


    // let display = getLocalEvents();
    // useEffect(() => {
    //     document.getElementById('testmeh').innerText = 'test meee';
    // });

    // document.getElementById('testmeh').innerText = 'test meee';

    // const displayEvent = getLocalEvents();

return lat && long ? 
        (
        <div>
            <br />
            <h3>Events within about 25 miles of you</h3>
            <div>
                <p>if we get lat lon, list any returns here</p>
                <p id='testmeh'>display</p>
                {/* list them out here */}
            </div>
        </div> 
        )
    :
        (
            // if we don't get lat lon, serve this instead
        <div>
            <br />
            <h3>Events within about 25 miles of you</h3>
            <p>Unfortunately, we can't determine your location. In a broad sense, then, all events on Earth could be available to you, though not all will be convenient.</p>
        </div>
        );

};

export default TicketMaster;