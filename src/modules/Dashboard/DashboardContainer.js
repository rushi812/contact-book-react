import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Dashboard from './Dashboard';

class DashboardContainer extends Component {



  render() {
    if (!this.props.isLoggedIn) return <Redirect to="/login" />

    return (
      <Dashboard />
    );
  }
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
})

export default connect(mapStateToProps)(DashboardContainer);