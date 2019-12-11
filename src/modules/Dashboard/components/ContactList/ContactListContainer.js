import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import ContactList from './ContactList';
import ContactInfoContainer from './ContactInfo/ContactInfoContainer';
import firebase from '../../../../firebase/firebase';
import { getListItemData } from '../../../../redux/contactActions';


const db = firebase.firestore();

class ContactListContainer extends Component {

  state = {
    contacts: [],
    open: false,
    setOpen: false,
  }

  handleClickOpen = () => {
    console.log("dialogue open button");
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  // FETCHING DATA FROM DATABASE
  componentDidMount() {
    db.collection('contacts').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.setState({
          contacts: [
            ...this.state.contacts,
            {
              ...doc.data(),
              id: doc.id,
            }
          ]
        });
      });
    }).catch(err =>
      console.log("Error while fetching collection from database", err));
  }

  // REMOVE DATA ITEM
  removeButtonHandler = (event, id) => {
    db.collection('contacts').doc(id).delete().then(() => {
      this.setState({
        contacts: this.state.contacts.filter(contact => {
          return id !== contact.id;
        })
      });
    }).catch(err =>
      console.log("Error deleting the document", err));
  };

  // DETAILS OF DATA ITEM
  infoButtonHandler = (event, id) => {
    this.props.getListItemData(id);
    // this.props.history.push('/contact-info');
    this.handleClickOpen();
  }

  render() {
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Contact Info"}</DialogTitle>
          <DialogContent>
            <ContactInfoContainer />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
          </Button>
          </DialogActions>
        </Dialog>
        <ContactList
          removeButtonHandler={this.removeButtonHandler}
          infoButtonHandler={this.infoButtonHandler}
          contactList={this.state.contacts} />
      </div>
    );
  }
}

const matchStateToProps = (state) => ({
  contacts: state.contact.contacts
});

const matchDispatchToProps = (dispatch) => bindActionCreators({
  getListItemData,
}, dispatch);

export default connect(
  matchStateToProps,
  matchDispatchToProps)(withRouter(ContactListContainer));