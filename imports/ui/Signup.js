import React from "react";
import { Link } from 'react-router-dom';


export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
    }
    increment(){
        this.setState({
            count: this.state.count + 1
        });
    }
    decrement(){
        this.setState({
           count: this.state.count -1
        });
    }

    render(){
        return (
            <div>
                <h1>Join Short Link</h1>
                <div>
                    <p> {this.state.count}</p>
                    <span>
                        <button onClick={this.increment.bind(this)}>+1</button>
                        <button onClick={this.decrement.bind(this)}>-1</button>
                    </span>
                </div>
                <Link to='/'>Already have an account?</Link>
            </div>
        );
    }

}