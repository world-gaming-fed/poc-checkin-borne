import React, {Component} from 'react'

class Example from Component {
  componentWillMount() {
    console.log('componentWillMount')
    setInterval(function() {

    }.bind(this), 1000)

    setInterval(() => {

    }, 1000)
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    return (<div />)
  }
}
