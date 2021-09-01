import React from 'react';
import { UserContext } from './App';


const ComponentC = () => {
    return ( <div>
        <h1>Component c</h1>

        <UserContext.Consumer>
            {value =><div>{value }</div> }
        </UserContext.Consumer>

    </div> );
}
 
export default ComponentC;