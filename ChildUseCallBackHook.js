import React from "react";

function ChildUseCallBack({ onClick }) {
    console.log("Child Rendered");
    return ( < div >
        <
        button onClick = { onClick } > Increment < /button> <
        /div>);

    }
    export default ChildUseCallBack;