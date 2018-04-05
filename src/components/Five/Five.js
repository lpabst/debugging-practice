import React, { Component } from 'react';
import './Five.css';

import Message from './Message.js';

class Five extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            threads: [
                {
                    threadName: 'cats',
                    open: false,
                    messages: [
                        {
                            messageNum: 1,
                            user: 'jack jackson',
                            message: 'I love cats!',
                            repliesOpen: false,
                            replies: [{username: 'sallyQ', message: 'me too!'}]
                        }
                    ]
                },
                {
                    threadName: 'My elbow',
                    open: false,
                    messages: []
                }
            ],
            showNewThreadArea: false,
            newThreadName: '',
            commentInput: '',
        }

        this.openNewThreadArea = this.openNewThreadArea.bind(this);
        this.createNewThread = this.createNewThread.bind(this);
        this.toggleOpenThread = this.toggleOpenThread.bind(this);
        this.toggleOpenReplies = this.toggleOpenReplies.bind(this);
        this.showThread = this.showThread.bind(this);
        this.postComment = this.postComment.bind(this);
        this.postReply = this.postReply.bind(this);
    }

    openNewThreadArea(){
        this.setState({showNewThreadArea: !this.state.showNewThreadArea})
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
            showNewThreadArea: false,
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
            return <div style={{paddingLeft: '20px'}}>
                <p>Comments:</p>
                {
                    item.messages.map((messageObj, i) => {
                        return <Message key={i} data={messageObj} threadIndex={threadIndex} messageIndex={i} toggleOpenReplies={this.toggleOpenReplies} postReply={this.postReply} />
                    })
                }
            </div>
        }
    }

    postComment(i){
        if (!this.state.username) return alert('Please enter a username before posting');
        let threads = this.state.threads;
        let messageNum = threads[i].messages.length > 0 ? threads[i].messages[threads[i].messages.length-1].messageNum + 1 : 1;
        let newMessage = {
            messageNum: messageNum,
            user: this.state.username,
            message: this.state.commentInput,
            repliesOpen: false,
            replies: []
        };
        threads[i].messages.push(newMessage);
        threads[i].open = true;
        this.setState({
            threads: threads,
            commentInput: ''
        });
    }

    postReply(threadIndex, messageIndex, replyInput){
        if (!this.state.username) return alert('Please enter a username before posting');
        let threads = this.state.threads;
        let newReply = {
            username: this.state.username,
            message: replyInput
        }
        threads[threadIndex].messages[messageIndex].replies.push(newReply);
        threads[threadIndex].messages[messageIndex].repliesOpen = true;
        this.setState({
            threads: threads,
            replyInput: '',
        })
    }

    render() {
        return (
            <section className='routeWrapper'>

                <input placeholder='Type Your Username Here...' className='usernameInput' />

                

                <section className='threads'>

                    <div className='newThread'>
                        <p><span onClick={this.openNewThreadArea}>{this.state.showNewThreadArea ? '-' : '+'}</span> New Thread</p>
                        { this.state.showNewThreadArea ? 
                            <div className='newThreadArea'>
                                <input placeholder='New Thread Name' value={this.state.newThreadName} onChange={(e) => this.setState({newThreadName: e.target.value})} />
                                <button onClick={this.createNewThread} >Create</button>
                            </div>
                        : null
                        }
                    </div>

                    {
                        this.state.threads.map((item, i) => {
                            return <div className='thread' key={i}>
                                <div className='threadPlus' onClick={(e) => this.toggleOpenThread(i)} >{item.open ? '-' : '+'}</div>
                                <div className='threadName'>{item.threadName}</div>
                                {this.showThread(item, i)}
                                <input value={this.state.commentInput} onChange={(e) => this.setState({commentInput: e.target.value})} placeholder='your comment...' className='commentInput' />
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