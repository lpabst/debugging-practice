import React, { Component } from 'react';


class Message extends Component {

    constructor(props){
        super(props);
        this.state = {
            showReplyInput: false,
            replyInput: '',
        }

        this.toggleReplyInput = this.toggleReplyInput.bind(this);
    }

    toggleReplyInput(){
        this.setState({
            showReplyInput: !this.state.showReplyInput
        })
    }

    postReply(threadIndex, messageIndex){
        this.props.postReply(threadIndex, messageIndex, this.state.replyInput);
        this.setState({
            showReplyInput: false,
            replyInput: '',
        })
    }

    render() {
        let {data, threadIndex, messageIndex} = this.props;
        return (
            <section className='message'>

                <div>
                    {data.user}: {data.message} 
                    <span className='replyBtn' onClick={this.toggleReplyInput} >reply</span> 
                    { this.state.showReplyInput ? 
                        <span>
                            <input placeholder='type reply here...' value={this.state.replyInput} onChange={(e) => this.setState({replyInput: e.target.value})} />
                            <button onClick={() => this.postReply(threadIndex, messageIndex)} >Post</button>
                        </span> 
                     : null
                    }
                </div>

                { data.replies.length > 0 ? 
                    <div className='repliesPlus' onClick={() => this.props.toggleOpenReplies(threadIndex, messageIndex)} >{data.repliesOpen ? '-' : '+'} view replies</div>
                 : null
                }

                { data.repliesOpen ? 
                    <div className='replies_wrapper'>
                        {
                            data.replies.map( (reply, i) => {
                                return <div key={i} className='reply' >{reply.username}: {reply.message}</div>
                            })
                        }
                    </div>
                 : null
                }

            </section>
        );
    }
}


export default Message;