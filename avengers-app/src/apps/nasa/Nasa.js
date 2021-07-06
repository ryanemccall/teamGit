const Nasa = (props) => {
    
    const {lat, long} = props;

    const url = `https://api.nasa.gov/planetary/earth/imagery?lat=${lat}&lon=${long}&date=2021-03-01&dim=0.12&api_key=NaizQPaQqSpzzctFT5TvFMOCYdK63cXOoPlhjnfi`;
    const defaultURL = `https://images-assets.nasa.gov/image/PIA18033/PIA18033~orig.jpg`;

    // if location is available, use the location-enabled URL. If Location is not available, use the default URL.
    const imgData = lat && long ? url : defaultURL;

    return (
        <div className="apiDisplay">
            <br />
            <h2>Satellite View</h2>
            <p>The best available shot of your current location:</p>
            
            <img
                id="satImg"
                src={imgData}
                alt='the best available satellite shot of your location'
                width='50%'
                max-width='800px'
                height='auto' />
           
            <p>
                <small className="text-muted high-contrast">All satellite images sourced from the <a class="App-link" href="https://api.nasa.gov/" target="_blank" rel="noreferrer">NASA API.</a></small>
            </p>
        </div>
    );
};


export default Nasa;