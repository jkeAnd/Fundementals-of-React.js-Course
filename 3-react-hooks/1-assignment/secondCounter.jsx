/* ---Section 3 -- assignment 1 --
#1st evaluate outputs: two buttonse . a) increase & b) decrease 
#2nd each button updates state
#3rd save the file call it counter - then import to app file */

//----create counter---//
import {useState} from 'react';


function SecondCounter() {

    const [value, setValue]  = useState(0);

    return (
        <div>
            <p> Second Counter: {value}</p>

            <button onClick={() => setValue(value +1)}>
            Increase
            </button>

            <button onClick={() => setValue(value -1)}>
            Decrease
            </button>
        </div>
    );
    }

    export default SecondCounter;