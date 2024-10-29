import React, {Component} from 'react';
class Details extends Component
{
    constructor(props){
        super(props);
        this.state={name:" ",subject:"React"}
    }
    render(){
        return(<from onSubmit={this.handleSubmit}>
            <div>
                <label>name:</label>
                <input type="text" value={this.state.name} onChange={this.handleName} />
            </div><div>
                <label>subject:</label>
                    <select value={this.state.subject} onChange={this.handleSubject}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="View">View</option>
                    </select>
                </div><div>
                    <button type="Submit">Submit</button>
                </div>
            </from>)}
            handleName=(e)=>{this.setState({name:e.target.value})};
            handleSubject=(e)=>{this.setState({subject:e.target.value})}; 
            handleSubmit=()=>{alert(`my name is ${this.state.name} and my intrested subject is ${this.state.subject}`)};
        }
        
export default Details;
