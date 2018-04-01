import React, { Component } from 'react';

import './Two.css';


class Two extends Component {
  constructor(props){
    super(props);
    this.state = {
      userInput: ''
    }

    this.updateUserInput = this.updateUserInput.bind(this);
  }

  updateUserInput(val){
    this.setState({
      userInput: val
    })
  }

  render() {
    return (
      <div className="two">

        <div className='inner'>
          <input className='input' onChange={(e) => this.setState({userInput: e})} placeholder='enter something here' />
          <p className='input'>Your input: {this.state.userInput}</p>
        </div>

      </div>
    );
  }
}


export default Two;