import React, { useState, useEffect } from 'react';

function FChangeTitle() {
    const [count, setCount] = useState(0);
    useEffect(() => { document.title = "count is updated to${count}" }, [count]);
    return ( < div >
        <
        button onClick = {
            () => { setCount(count + 1) } } > count - { count } < /button>

        <
        /div>);

    }
    export default FChangeTitle;