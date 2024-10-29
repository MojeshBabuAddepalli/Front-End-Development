import React, { Component } from 'react';
import ConsumerContext from "./ConsumerContext";
import { UserProvider } from "./UserContext";
class ProviderContext extends Component {
    render() {
        return ( <
            UserProvider value = "VVIT" >
            <
            ConsumerContext / >
            <
            /UserProvider>
        );
    }
}
export default ProviderContext;