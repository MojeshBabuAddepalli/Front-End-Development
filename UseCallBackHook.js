import React, { useState, useCallback } from "react";

function UseCallbackHook() {
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    // Memoize the handler to prevent re-creation on every render
    const onChangeHandler = useCallback((e) => {
        setNumber(e.target.value);
    }, []);

    // Memoize the counter handler to prevent re-creation
    const counterHandler = useCallback(() => {
        setCounter((prevCounter) => prevCounter + 1);
    }, []);

    return (
        <div>
            <h1>Example with useCallback</h1>
            <input
                type="number"
                placeholder="Enter a number"
                value={number}
                onChange={onChangeHandler}
            />

            <div>OUTPUT: {squareNum(number)}</div>
            <button onClick={counterHandler}>
                Counter ++
            </button>
            <div>Counter : {counter}</div>
        </div>
    );
}

// Function to square the value
function squareNum(number) {
    console.log("Squaring will be done!");
    return Math.pow(number, 2);
}

export default UseCallbackHook;
