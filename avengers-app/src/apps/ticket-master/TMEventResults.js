import { element } from 'prop-types';
import React from 'react';
import { Table, Col, Row } from 'reactstrap';


const TMEventResults = (props) => {

    return (
        
        <div className="mainDiv">

            {props.eventResults.map(
                //just randomly call each element in array an element
                elementInArray =>
                    return (
                        //turning each element / result into JSX unique keys are required when u use map 
                        //we set unique key to the _id of the result (taken from api returned obj)
                    //STOP HERE AND LOOK AT DOCS 
                    <div key={element._eventID})
            )}
            <Table>
                <tr>
                    <thead>
                        <th>
                            Event Name
                        </th>
                        <th>
                            Event Date
                        </th>
                        <th>
                            Event Location
                        </th>
                    </thead>
                </tr>
                <tr>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                </tr>
            
                <tr>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                </tr>
        
        
        
            </Table>
        </div>
    );
};


export default TMEventResults;