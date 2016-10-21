import React, { Component } from 'react';
import styles from './Counter.css';
import forme from './circle.css';
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
        <a>Scannez votre Qr Code sur la borne</a>
      </div>
    )
    console.log(this.state.result)
    if (this.state.result) {
      if (this.isValid(this.state.result)) {
        var playerUUID = this.getPlayerFromUUID(this.state.result)
        console.log(playerUUID)
        this.props.router.push('/validation/' + playerUUID);
      }
      else {
        result = (
          <div className={styles.container}>
            <a>Qr Code invalide</a>
          </div>
        )
      }
    }
    return result
  }

  componentDidMount (){
      this._input.focus();
      this.timer = setTimeout( function() {
        this.props.router.push('/checkin')
      }.bind(this), 15000);
    }

  componentWillUnmount () {
    clearTimeout(this.timer)
  }

  myfunc(e) {
    if (e.currentTarget.value.length === 73)
      {
        this.setState({
          result: e.currentTarget.value,
        })
      }
  }

  render() {
    return (
        <div>
        {this.props.children}
        <div className={styles.cam}>
          <form >
            <input type="text" pattern=".{73}|.{73,}" maxLength="73" onChange={(e) => this.myfunc(e)} ref={(c) => this._input = c}/>
          </form>
        </div>
        <div className={forme.circYellow}>
          <img src="./components/asset/q-r.svg" alt="qrcode" height="133px" width="133px"/>
        </div>
          <br/><br/>
          {this.renderResult()}
      </div>
    );
  }
}
export default withRouter (QrCode);
