import React, { Component } from 'react';


class Message extends Component {

    constructor(props){
        super(props);
        this.state = {
            
        }

    }

    componentDidMount(){
        
    }

    render() {
        return (
            <section className='message'>
                {this.props.data.message}
            </section>
        );
    }
}


export default Message;