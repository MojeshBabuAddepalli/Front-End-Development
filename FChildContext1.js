import React, { useContext } from 'react';
import { Context } from './FParentContext';

function FChildContext1() {
    const name = useContext(Context);
    return ( <
        div >
        <
        h1 > Child1 - { name } < /h1> <
        /div>
    );
}
export default FChildContext1;