import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import firebase from '../../firebase/firebase';
import FormikApp from './Signup';

const db = firebase.firestore();
class SignupContainer extends Component {

  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  }

  signupInputHandler = (event) => {
    event.persist();
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  signupButtonHandler = () => {
    db.collection('users').add(this.state)
      .then(() => {
        console.log("User", this.state);
        this.props.history.push('/login');
      }).catch(err =>
        console.log("Error while signing up", err));
  }
  render() {
    return (
      <FormikApp
        signupInputHandler={this.signupInputHandler}
        signupButtonHandler={this.signupButtonHandler}
      />
    );
  }
}

// const matchStateToProps = (state) => ({
// });

const matchDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);



export default connect(
  // matchStateToProps,
  matchDispatchToProps)(withRouter(SignupContainer));