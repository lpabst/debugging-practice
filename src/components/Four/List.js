import React, { Component } from 'react';


class List extends Component {
    render() {
        return (
            <section className='list_wrapper'>
                <textarea onFocus={() => {document.querySelector('.list').blur()}} className='list' value={this.props.input} />
            </section>
        );
    }
}


export default List;