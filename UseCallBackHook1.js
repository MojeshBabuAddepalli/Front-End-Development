import { useState, useCallback } from "react";
import ChildUseCallBack from "./ChildUseCallBackHook";

function useCallBackHook1() {
    const [count, setCount] = useState(0);
    const handleClick = useCallback(() => { console.log("Button Clicked...") }, [count]);
    return ( < div >
        <
        h1 > count - { count } < /h1> <
        button onClick = {
            () => { setCount(count + 1) } } > count++ < /button> <
        ChildUseCallBack onClick = { handleClick }
        />

        <
        /div>);
    }
    export default useCallBackHook1;