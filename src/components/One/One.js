import React, { Component } from 'react';

import './One.css';


class One extends Component {
  constructor(props){
    super(props);
    this.state = {
      total: 1
    }

    this.updateTotal = this.updateTotal.bind(this);
  }

  updateTotal(num){
    this.setState({
      total: this.state.total + num
    })
  }

  render() {
    return (
      <div className="one">

        <div className='inner'>
          <p className='total'>{this.state.total}</p>
          <button onClick={(e) => this.updateTotal(e.target.value)}>+1</button>
          <button onClick={(e) => this.updateTotal(e.target.value)}>+5</button>
          <button onClick={(e) => this.updateTotal(e.target.value)}>-2</button>
        </div>

      </div>
    );
  }
}


export default One;