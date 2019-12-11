import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import firebase from '../../firebase/firebase';
import Signup from './Signup';

const db = firebase.firestore();
class SignupContainer extends Component {

  state = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
  }

  signupInputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  signupButtonHandler = (event) => {
    event.preventDefault();
    db.collection('users').add(this.state)
      .then(() => {
        console.log("User", this.state);
      }).catch(err =>
        console.log("Error while signing up", err));
    this.props.history.push('/login');
  }
  render() {
    return (
      <Signup signupInputHandler={this.signupInputHandler} signupButtonHandler={this.signupButtonHandler} />
    );
  }
}

const matchStateToProps = (state) => ({
});

const matchDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);



export default connect(
  matchStateToProps,
  matchDispatchToProps)(withRouter(SignupContainer));