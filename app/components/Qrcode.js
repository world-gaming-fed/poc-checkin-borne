import React, { Component } from 'react';
import styles from './Counter.css';
import QrReader from 'react-qr-reader';
import { Route, IndexRoute, browserHistory,  Redirect,  Link, withRouter } from 'react-router';
import  Validation from './Validation';


class QrCode extends Component {
  constructor(props){
    super(props)
    this.state = {
      result: null,
    }
  }

  handleScan(data){
    console.log(data)
    this.setState({
      result: data,
    })
  }

  handleError(err){
    console.error(err)
  }

  isValid(val) {
    let value = false;

    if (val && val.length == 73) {
      value = true
    }
    return value
  }

  my_func(val) {
    let value = null;

    if (val && val.length == 73) {
      value = val
      return value
    }
    return (null)
  }

  getPlayerFromUUID(uuids) {
    return uuids.split('|')[1]
  }

  renderResult() {
    let result = null

    result = (
      <div className={styles.container}>
        <h2>Scannez votre Qr Code</h2>
      </div>
    )
    console.log(this.state.result)
    if (this.state.result) {
      if (this.isValid(this.state.result)) {
        var playerUUID = this.getPlayerFromUUID(this.state.result)
        this.props.router.push('/validation/' + playerUUID);
      }
      else {
        result = (
          <div className={styles.container}>
            <h2>Qr Code invalide</h2>
          </div>
        )
      }
    }
    return result
  }

  render() {
    return (
      <div>
        {this.props.children}
        <div className={styles.cam}>
          <QrReader
            handleError={this.handleError}
            handleScan={this.handleScan.bind(this)}/>
          {this.renderResult()}
        </div>
      </div>
    );
  }
}
export default withRouter (QrCode);
