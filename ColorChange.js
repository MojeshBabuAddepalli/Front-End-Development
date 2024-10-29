import React, { Component } from "react";
class ColorChange extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: "blue" };
    }
    render() {
        return ( <
            div >
            <
            h2 onMouseOver = { this.handleColor }
            onMouseOut = { this.handleColor1 }
            style = { this.state } > Hello < /h2> <
            /div>
        );
    }
    handleColor = () => { this.setState({ color: "red" }); }
    handleColor1 = () => { this.setState({ color: "green" }); }
}
export default ColorChange;