import React, { Component } from 'react';
import './Five.css';

import Message from './Message.js';

class Five extends Component {

  constructor(props){
    super(props);

    this.state = {
        threads: [{
            threadName: 'cats',
            open: true,
            messages: [{
                messageNum: 1,
                user: 'jack jackson',
                message: 'I love cats!',
                replies: []
            }]
        }]
    }

    this.toggleOpenThread = this.toggleOpenThread.bind(this);
    this.showThread = this.showThread.bind(this);
  }

  toggleOpenThread(i){
      let threads = [...this.state.threads];
      threads[i].open = !threads[i].open;
      this.setState({threads});
  }

  showThread(item){
    if (!item.open){
        return null;
    }else{
        return <div>
            hello
            {
                item.messages.map( (messageObj, i) => {
                    <Message data={messageObj} />
                })
            }
        </div>
    }
  }

  render() {
    return (
      <section className='routeWrapper'>
        <section className='threads'>
            {
                this.state.threads.map( (item, i) => {
                    return <div className='thread' key={i}>
                        <div className='threadPlus' onClick={(e) => this.toggleOpenThread(i)} >{item.open ? '-' : '+'}</div>
                        <div className='threadName'>{item.threadName}</div>
                        {this.showThread(item)}
                    </div>
                })
            }
        </section>
      </section>
    );
  }
}


export default Five;