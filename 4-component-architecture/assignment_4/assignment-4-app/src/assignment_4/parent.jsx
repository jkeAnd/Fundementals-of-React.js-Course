import {useState} from "react";
import Child from './child';


function Parent() {
    const [count, setCount] = useState(0);

return(
    <div>
        <h1> Parent Component</h1>
        <button onClick={() => setCount(count + 1)} >
            Increase Count
        </button>

        {/* Use Props to send information to child:
        title + count */}
        <Child
        title="Styling Demo"
        count={count}/>
    </div>
);
}

export default Parent; 