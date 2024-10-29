import React, { Component } from "react";
export default class ComponentLifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    render() {
        return ( <
            div >
            <
            h1 > ComponentLifeCycle < /h1> <
            button onClick = { this.handleCount } > Count - { this.state.count } < /button> <
            /div>
        );
    }
    handleCount = () => {
        this.setState({ count: this.state.count + 1 });
    }
    componentDidMount() {
        console.log('Component Mounted');
    }
    shouldComponentUpdate(prevState, newState) {
        console.log("Component is going to update");
        return true;
    }
    componentDidUpdate() {
        console.log("Component is updated");
    }
    componentWillUnmount() {
        console.log("Component is going to be destroyed");
    }
}