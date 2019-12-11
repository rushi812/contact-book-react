import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, Redirect } from 'react-router-dom';

import AddContact from './AddContact';
import { addContact } from '../../../../redux/contactActions';
import firebase from '../../../../firebase/firebase';

const db = firebase.firestore();

class AddContactContainer extends Component {

  state = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    address: '',
  }

  componentDidMount() {
    const { id, firstname, lastname, email, phone, address } = this.props.contacts;
    if (this.props.isEdit) {
      this.setState({
        id,
        firstname,
        lastname,
        email,
        phone,
        address,
      });
    }
  }

  addContactInputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  addContactButtonHandler = (event) => {
    event.preventDefault();
    this.props.addContact(this.state);
    this.setState({
      [event.target.name]: '',
    });
    this.props.history.push('/dashboard');
  }

  updateContactButtonHandler = (event) => {
    const { firstname, lastname, email, phone, address } = this.state;
    event.preventDefault();
    this.props.addContact(this.state);
    db.collection('contacts').doc(this.state.id).update({
      firstname,
      lastname,
      email,
      phone,
      address,
    });
    this.setState({
      [event.target.name]: '',
    });
    this.props.history.push('/dashboard');
  }

  render() {
    if (!this.props.isLoggedIn) return <Redirect to="/login" />
    return (
      <AddContact
        addContactInputHandler={this.addContactInputHandler}
        addContactButtonHandler={this.addContactButtonHandler}
        updateContactButtonHandler={this.updateContactButtonHandler}
        contacts={this.state}
        isEdit={this.props.isEdit} />
    );
  }
}

const matchStateToProps = (state) => ({
  contacts: state.contact.contacts,
  isEdit: state.contact.isEdit,
  isLoggedIn: state.auth.isLoggedIn,
});

const matchDispatchToProps = (dispatch) => bindActionCreators({
  addContact,
}, dispatch);

export default connect(
  matchStateToProps,
  matchDispatchToProps)(withRouter(AddContactContainer));