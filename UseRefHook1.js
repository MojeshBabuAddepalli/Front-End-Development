import React, { useState, useEffect, useRef } from 'react';

function UseRefHook1() {
    const [count, setCount] = useState(0);
    const prevc = useRef(0);
    useEffect(() => {
        prevc.current = count;
    }, [count])
    return ( < div >
        <
        h1 > count - { count } < /h1> <
        h1 > Prevcount - { prevc.current } < /h1> <
        button onClick = {
            () => setCount(count + 1) } > count < /button> <
        /div>)
    }
    export default UseRefHook1;