import React, { Component } from 'react';
import { Link } from 'react-router';
import but from './button.css'

class ButtonDisabled extends Component {
  render() {
    return (
      <span className={but.buttonDisabled}>
        {this.props.children}
      </span>
    );
  }
}
export default ButtonDisabled;
