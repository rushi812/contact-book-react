import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';


import Navbar from './Navbar';
import { authUser } from '../redux/contactActions';

class NavbarContainer extends Component {

    logoutButtonHandler = () => {
        this.props.authUser();
        this.props.isLoggedIn ?
            this.props.history.push('/login') :
            this.props.history.push('/')
        localStorage.removeItem('loggedInUser');
    }

    render() {
        return (
            <Navbar
                isLoggedIn={this.props.isLoggedIn}
                logoutButtonHandler={this.logoutButtonHandler} />
        );
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    authUser,
}, dispatch);

const mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)(withRouter(NavbarContainer));