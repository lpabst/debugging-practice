import React, { Component } from 'react';

import './Three.css';

class Three extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            input: '',
        }

        this.addItemToList = this.addItemToList.bind(this);
    }

    addItemToList() {
        let newList = [...this.state.list];
        newList.push(this.state.input);
        this.setState({
            list: newList,
            input: '',
        })
    }

    render() {
        return (
            <div>
                <div className="controls">
                    <input onChange={(e) => this.setState({ input: e.target.value })} />
                    <button onClick={() => this.addItemToList()}>Add item</button>
                </div>
                <div className='data'>
                        {
                            this.state.list.map( (item, i) => {
                                return <p>item</p>
                            })
                        }
                </div>
            </div>
        );
    }
}


export default Three;