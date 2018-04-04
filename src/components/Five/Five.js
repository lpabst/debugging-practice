import React, { Component } from 'react';
import './Five.css';

import Message from './Message.js';

class Five extends Component {

    constructor(props) {
        super(props);

        this.state = {
            threads: [{
                threadName: 'cats',
                open: true,
                messages: [
                    {
                        messageNum: 1,
                        user: 'jack jackson',
                        message: 'I love cats!',
                        repliesOpen: false,
                        replies: [{username: 'sallyQ', message: 'me too!'}]
                    }
                ]
            }],
            showNewThreadModal: false,
            newThreadName: '',
            commentInput: '',
        }

        this.openNewThreadModal = this.openNewThreadModal.bind(this);
        this.createNewThread = this.createNewThread.bind(this);
        this.toggleOpenThread = this.toggleOpenThread.bind(this);
        this.toggleOpenReplies = this.toggleOpenReplies.bind(this);
        this.showThread = this.showThread.bind(this);
        this.postComment = this.postComment.bind(this);
    }

    openNewThreadModal(){
        this.setState({showNewThreadModal: !this.state.showNewThreadModal})
    }

    createNewThread(){
        let threads = [...this.state.threads];
        threads.push({
            threadName: this.state.newThreadName,
            open: false,
            messages: []
        })
        this.setState({
            threads: threads,
            showNewThreadModal: false,
            newThreadName: '',
        })
    }

    toggleOpenThread(i) {
        let threads = [...this.state.threads];
        threads[i].open = !threads[i].open;
        this.setState({ threads });
    }

    toggleOpenReplies(threadIndex, messageIndex) {
        let threads = [...this.state.threads];
        threads[threadIndex].messages[messageIndex].repliesOpen = !threads[threadIndex].messages[messageIndex].repliesOpen;
        this.setState({threads});
    }

    showThread(item, threadIndex) {
        if (!item.open) {
            return null;
        }else if (item.messages.length === 0){
            return <div className='reply'>This thread has no comments yet</div>
        } else {
            return <div>
                {
                    item.messages.map((messageObj, i) => {
                        return <Message key={i} data={messageObj} threadIndex={threadIndex} messageIndex={i} toggleOpenReplies={this.toggleOpenReplies} />
                    })
                }
            </div>
        }
    }

    postComment(i){
        // post the user comment here...
    }

    render() {
        return (
            <section className='routeWrapper'>

                { this.state.showNewThreadModal ? 
                    <div className='newThreadModal'>
                        <input placeholder='New Thread Name' value={this.state.newThreadName} onChange={(e) => this.setState({newThreadName: e.target.value})} />
                        <button onClick={this.createNewThread} >Create</button>
                    </div>
                 : null
                }

                <section className='threads'>
                    <div className='threadName' onClick={this.openNewThreadModal} >New Thread +</div>
                    {
                        this.state.threads.map((item, i) => {
                            return <div className='thread' key={i}>
                                <div className='threadPlus' onClick={(e) => this.toggleOpenThread(i)} >{item.open ? '-' : '+'}</div>
                                <div className='threadName'>{item.threadName}</div>
                                <div className='postCommentBtn' onClick={() => this.setState({showNewCommentModal: !this.state.showNewCommentModal})} >post a comment</div>
                                {this.showThread(item, i)}
                                <input value={this.state.commentInput} onChange={(e) => this.setState({commentInput: e.target.value})} placeholder='your comment...' />
                                <button onClick={() => this.postComment(i)}>Post</button>
                            </div>
                        })
                    }
                </section>

            </section>
        );
    }
}


export default Five;