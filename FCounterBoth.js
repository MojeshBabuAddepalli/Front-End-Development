import React from "react";

function FCounterBoth() {
    const [count, setCount] = React.useState(0);
    return ( <
        div >
        <
        button onClick = {
            () => setCount(count + 1) } > Increment < /button> <
        button onClick = {
            () => setCount(count - 1) } > Decrement < /button> <
        h1 > Counter: { count } < /h1>

        <
        /div>
    );
}
export default FCounterBoth;