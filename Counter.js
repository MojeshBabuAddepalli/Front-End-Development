import React, { Component } from "react";
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Count: 0 };
    }
    render() {
        return ( <
            div >
            <
            button onClick = { this.handleCout } > Count - { this.state.Count } < /button> <
            /div>
        );
    }
    handleCout = () => { this.setState({ Count: this.state.Count + 1 }); }
}
export default Counter;