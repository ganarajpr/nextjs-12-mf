import React, { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);
    return <>
        <div>Count : {count} </div>
        <button className="p-1 border" onClick={() => setCount(count+1)}>Count</button>
    </>
};


export default Counter;
