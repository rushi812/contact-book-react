import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, useHistory } from 'react-router-dom';

// import firebase from '../../../../../firebase/firebase';
import ContactInfo from './ContactInfo';
import { UpdateContact } from '../../../../../redux/contactActions';

const ContactInfoContainer = ({ contacts, isEdit, UpdateContact }) => {
  // const db = firebase.firestore();
  const history = useHistory();

  const editbuttonHandler = (event, id) => {
    event.preventDefault();
    UpdateContact(isEdit);
    history.push('/add-contact');
  }

  return (
    <ContactInfo
      contacts={contacts}
      editbuttonHandler={editbuttonHandler} />
  );
}

const mapStateToProps = (state) => ({
  contacts: state.contact.contacts,
  isEdit: state.contact.isEdit,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  UpdateContact,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactInfoContainer));