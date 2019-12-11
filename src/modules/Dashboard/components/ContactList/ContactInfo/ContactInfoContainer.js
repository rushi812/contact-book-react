import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter, useHistory } from 'react-router-dom';

import ContactInfo from './ContactInfo';
import { updateContact } from '../../../../../redux/contactActions';

const ContactInfoContainer = ({ contacts, isEdit, updateContact }) => {
  const history = useHistory();

  const editbuttonHandler = (event, id) => {
    event.preventDefault();
    updateContact(isEdit);
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
  updateContact,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactInfoContainer));