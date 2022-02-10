import React, { useState } from "react";
import styled from 'styled-components';

const MyButton = styled.button`
    color: blue;
`
const Counter = () => {

    const [count, setCount] = useState(0);
    return <>
        <div>Count : {count} </div>
        <MyButton onClick={() => setCount(count+1)}>Count</MyButton>
    </>
};


export default Counter;