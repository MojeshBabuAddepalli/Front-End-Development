import React, { Component } from "react";
export default class TitleChange extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    render() {
        return ( <
            div >
            <
            h1 > Title Change < /h1> <
            button onClick = { this.handleCount } > Count - { this.state.count } < /button>

            <
            /div>
        );
    }
    handleCount = () => {
        this.setState({ count: this.state.count + 1 });
    }
    componentDidMount() {
        document.title = "This app changes counter";
    }
    componentDidUpdate() {
        var s = this.state.count;
        document.title = 'The counter is updated to ' + s;
    }
    componentWillUnmount() {
        console.log("Component is going to be destroyed");
    }
}