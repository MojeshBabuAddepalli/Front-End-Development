import React, { Component } from "react";
//import {UserContext} from "./UserContext";
import { UserConsumer } from "./UserContext";
class ConsumerContext extends Component {
    render() {
        return ( <
            UserConsumer > {
                (props) => {
                    return ( <
                        div >
                        <
                        h1 > Provider - Consumer Context < /h1> <
                        h1 > { props } < /h1> <
                        /div>
                    );
                }
            } <
            /UserConsumer>

        );
    }
}
export default ConsumerContext;