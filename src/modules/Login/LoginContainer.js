import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';


import firebase from '../../firebase/firebase';
import { authUser } from '../../redux/contactActions';


import FormikLoginApp from './Login';

const db = firebase.firestore();
class LoginContainer extends Component {

  state = {
    email: '',
    password: '',
  }

  loginInputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  loginButtonHandler = () => {
    let query = db.collection('users');
    query = query.where('email', '==', this.state.email)
    query.where('password', '==', this.state.password)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          localStorage.setItem('loggedInUser', JSON.stringify(doc.data()));
          this.props.authUser();
          this.props.history.push('/');
        });
      })
      .catch(err => (
        console.log("username password doesn't match!", err)
      ));
  }


  render() {
    return (
      <FormikLoginApp
        loginInputHandler={this.loginInputHandler}
        loginButtonHandler={(event) => this.loginButtonHandler(event)}
        isLoggedIn={this.props.isLoggedIn}
        loggedInUser={this.state}
      />
    );
  }
}

const matchStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

const matchDispatchToProps = (dispatch) => bindActionCreators({
  authUser,
}, dispatch);

export default connect(
  matchStateToProps,
  matchDispatchToProps)(withRouter(LoginContainer));