import React from "react";
import { useReducer } from "react";
const initialstate = 0;
const reduce = (state, action) => {
    switch (action) {
        case "add":
            return state + 1;
        case "sub":
            return state - 1;
        default:
            return 0;
    }
}

function UserReducerHook() {
    const [count, dispatch] = useReducer(reduce, initialstate);
    return ( < div >
        <
        h1 > count - { count } < /h1> <
        button onClick = {
            () => { dispatch("add") } } > Increment < /button> <
        button onClick = {
            () => { dispatch("sub") } } > Decrement < /button> <
        button onClick = {
            () => { dispatch("reset") } } > reset < /button> <
        /div>);
    }
    export default UserReducerHook;