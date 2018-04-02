import React, { Component } from 'react';
import './Four.css'

import Buttons from './Buttons.js';
import List from './List.js';

class Four extends Component {

    constructor(props){
        super(props);
        this.state = {
            input: '',
        }

        this.updateInput = this.updateInput.bind(this);
    }

    updateInput(letter){
        let input = this.state.input;
        if (input && letter === -1){
            input = input.substring(0, input.length-1);
        }else{
            input += letter;
        }
        this.setState({input});
    }

    render() {
        return (
            <section className='routeWrapper'>
                <List input={this.state.list} />
                <Buttons updateInput={this.updateInput} />
            </section>
        );
    }
}


export default Four;