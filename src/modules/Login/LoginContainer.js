import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';


import firebase from '../../firebase/firebase';
import { authUser } from '../../redux/contactActions';


import Login from './Login';

const db = firebase.firestore();
class LoginContainer extends Component {

  state = {
    username: '',
    password: '',
  }

  loginInputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  loginButtonHandler = (event) => {
    event.preventDefault();
    let query = db.collection('users');
    query = query.where('username', '==', this.state.username)
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
      <Login
        loginInputHandler={this.loginInputHandler}
        loginButtonHandler={this.loginButtonHandler}
        isLoggedIn={this.props.isLoggedIn}
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