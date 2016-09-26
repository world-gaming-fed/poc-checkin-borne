import React, { Component } from 'react';
import { Link } from 'react-router';
import but from './button.css'

class Btn extends Component {
  render() {
    return (
      <span className={but.button}>
        {this.props.children}
      </span>
    );
  }
}
export default Btn;
