import * as actionTypes from './actionTypes';
import firebase from '../firebase/firebase';

const db = firebase.firestore();
export const addContact = (contact) => {

  return (dispatch) => {
    db.collection('contacts').add(contact)
      .then(() => {
        dispatch({
          type: actionTypes.ADD_CONTACT,
          contact,
        });
      }).catch(err =>
        console.log("Error adding contact", err));
  }
}

export const getListItemData = (id) => {
  return (dispatch) => {
    db.collection('contacts').doc(id).get()
      .then((data) => {
        (data.exists) ?
          dispatch({
            type: actionTypes.GET_LIST_ITEM,
            payload: {
              id,
              data: data.data()
            }
          }) :
          console.log("No such document exists!");

      }).catch(err =>
        console.log("Error fetching document from database", err));
  }
}

export const UpdateContact = (isEdit) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.UPDATE_CONTACT,
      isEdit,
    });
  }
}

export const authUser = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.IS_LOGGEDIN,
    });
  }
}
