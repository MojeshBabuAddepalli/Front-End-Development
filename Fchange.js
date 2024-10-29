import React, { useEffect, useState } from "react";

function Fchange() {
    const [count, ChangeCount] = useState(0);
    const [flag, ChangeFlag] = useState(true);
    useEffect(() => {
        ChangeCount(count + 1);
        return () => {
            console.log("Clearing All Dependencies")
        }
    }, [flag]);
    return ( < div >
        <
        button onClick = {
            () => { ChangeFlag(!flag) } } > { flag.ToString } < /button> <
        h1 > count - { count } < /h1> <
        /div>);
    }
    export default Fchange;