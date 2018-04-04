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
        let {data, threadIndex, messageIndex} = this.props;
        return (
            <section className='message'>

                {data.user}: {data.message}

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