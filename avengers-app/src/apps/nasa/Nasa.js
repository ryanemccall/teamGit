const Nasa = (props) => {
    
    const {lat, long} = props;

    const url = `https://api.nasa.gov/planetary/earth/imagery?lat=${lat}&lon=${long}&date=2021-03-01&dim=0.12&api_key=NaizQPaQqSpzzctFT5TvFMOCYdK63cXOoPlhjnfi`;
    const defaultURL = `https://images-assets.nasa.gov/image/PIA18033/PIA18033~orig.jpg`;

    // if location is available, use the location-enabled URL. If Location is not available, use the default URL.
    const imgData = lat && long ? url : defaultURL;

    return (
        <div>
            <br />
            <h3>Nasa API</h3>
            <p>The best available shot of your current location:</p>
            <img src={imgData} alt='the best available sattelite shot of your location' width='80%' max-width='800px' height='auto'/>
        </div>
    );
};


export default Nasa;