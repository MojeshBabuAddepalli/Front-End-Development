import React, { useState, createContext } from 'react';
import FChildContext from './FChildContext';
export const Context = createContext();

function FParentContext() {
    const [name, ChangeName] = useState("nani");
    return ( < Context.Provider value = { name } >
        <
        h1 > parent - { name } < /h1> <
        FChildContext > < /FChildContext> <
        /Context.Provider>);
    }
    export default FParentContext;