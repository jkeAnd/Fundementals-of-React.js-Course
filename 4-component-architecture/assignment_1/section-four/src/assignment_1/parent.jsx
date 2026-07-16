
import { useState } from 'react';
import Child from './child'
function Parent(props) {
   
    return (
        <div>
            <h1>Parent</h1>
            <Child name={props.name} />
        </div>
    );
}
export default Parent;
