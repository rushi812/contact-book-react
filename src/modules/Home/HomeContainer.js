import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Home from './Home';

class HomeContainer extends Component {

  state = {
    user: {},
  }

  componentDidMount() {
    this.setState({
      user: JSON.parse(localStorage.getItem('loggedInUser'))
    });
  }

  render() {
    if (!this.props.isLoggedIn) return <Redirect to="/login" />
    return (
      <Home user={this.state.user} />
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn
})

export default connect(mapStateToProps)(HomeContainer);