//all the elements we import from react router dom that we use in our app 
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';

import TicketMaster from './apps/ticket-master/TicketMaster';
import Nasa from './apps/nasa/Nasa';
import OpenWeather from './apps/open-weather/OpenWeather';

const Sidebar = () => {
   
    //url endpoints are included here 
    return (
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                     <li><Link to='/ticketmaster'>Ticket Master API</Link>
                    </li>
                     <li><Link to='/nasa'>Nasa API</Link>
                    </li>
                    <li><Link to='/openweather'>Open Weather API</Link>
                    </li> 
                </ul>
            </div>
            
          
            <div className='sidebar-route'>
                <Switch>
                    <Route exact path='/ticketmaster'><TicketMaster
                    /></Route>
                    <Route exact path='/nasa'><Nasa /></Route>
                    <Route exact path='/openweather'><OpenWeather />
                    </Route>
                </Switch>
            </div>
        </div>
    );
};
//above tells the router where to go when the links are clicked 
//switch makes sure only one path is true at once 


export default Sidebar;