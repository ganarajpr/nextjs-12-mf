import React, { useState } from "react";
import useTodo from "../hooks/useTodo";
const Todo = () => {

    const { data: { title} } = useTodo(1);
    return <>
        <div>Title : {title} </div>
    </>
};


export default Todo;
