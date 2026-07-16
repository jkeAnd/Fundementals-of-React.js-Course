import React from "react"
import { useState } from "react"
function Parent() {
    const [count, setCount] = React.useState(0);

    return (
        <>
        <Display count={count} />
        <Increment setCount={setCount} />
        </>
    );
}

function Display ({count}) {
    return <p>Count: {count}</p>;
}

function Increment({setCount}) {
    return <button onClick={() => setCount(c => c +1)}>Increment</button>;
}

export default Parent;