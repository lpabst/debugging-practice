import React, { Component } from 'react';


class Buttons extends Component {
    render() {
        return (
            <section className='buttons'>
                <p onClick={(e) => this.props.updateInput('a')}>a</p>
                <p onClick={(e) => this.props.updateInput('b')}>b</p>
                <p onClick={(e) => this.props.updateInput('c')}>c</p>
                <p onClick={(e) => this.props.updateInput('d')}>d</p>
                <p onClick={(e) => this.props.updateInput('e')}>e</p>
                <p onClick={(e) => this.props.updateInput('f')}>f</p>
                <p onClick={(e) => this.props.updateInput('g')}>g</p>
                <p onClick={(e) => this.props.updateInput('h')}>h</p>
                <p onClick={(e) => this.props.updateInput('i')}>i</p>
                <p onClick={(e) => this.props.updateInput('j')}>j</p>
                <p onClick={(e) => this.props.updateInput('k')}>k</p>
                <p onClick={(e) => this.props.updateInput('l')}>l</p>
                <p onClick={(e) => this.props.updateInput('m')}>m</p>
                <p onClick={(e) => this.props.updateInput('n')}>n</p>
                <p onClick={(e) => this.props.updateInput('o')}>o</p>
                <p onClick={(e) => this.props.updateInput('p')}>p</p>
                <p onClick={(e) => this.props.updateInput('q')}>q</p>
                <p onClick={(e) => this.props.updateInput('r')}>r</p>
                <p onClick={(e) => this.props.updateInput('s')}>s</p>
                <p onClick={(e) => this.props.updateInput('t')}>t</p>
                <p onClick={(e) => this.props.updateInput('u')}>u</p>
                <p onClick={(e) => this.props.updateInput('v')}>v</p>
                <p onClick={(e) => this.props.updateInput('w')}>w</p>
                <p onClick={(e) => this.props.updateInput('x')}>x</p>
                <p onClick={(e) => this.props.updateInput('y')}>y</p>
                <p onClick={(e) => this.props.updateInput('z')}>z</p>
                <p onClick={(e) => this.props.updateInput(' ')}>Space</p>
                <p onClick={(e) => this.props.updateInput('\n')}>Enter</p>
                <p onClick={(e) => this.props.updateInput(-1)}>Backspace</p>
            </section>
        );
    }
}


export default Buttons;