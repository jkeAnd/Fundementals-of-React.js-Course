import React, { useState, useEffect} from "react";

const TitleUpdater = () => {
    // use state + useEffect to update document.title 

    const [count, setCount] = useState(0);

    useEffect (() => {

        const interval = setInterval(() => setCount( t => t + 1), 1000); // set timer to move every 1000 milli seconds 
        return () => clearInterval(interval); // CLeanup when unmounted
    }, []);

    useEffect(() => {
        document.title = `Counter: ${count}`;
    }, [count]);

    return <div>Counter value: {count}s</div>;

    };

    export default TitleUpdater;