'use client'

import { useState } from "react";

const Counter = () => {
     const [count, setCount] = useState(0);
    console.log('count value in counter components', count);
    return (
        <div>
            <h2 className=" text-5xl">Counter: </h2>
            <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
        </div>
    );
};

export default Counter;