import * as actionTypes from './actionTypes';

const initialState = {
  contacts: {},
  isEdit: false,
}

const contactReducer = (state = initialState, action) => {

  const { type, contact, payload } = action;

  switch (type) {
    case actionTypes.ADD_CONTACT:
      return {
        ...state,
        contacts: contact,
        isEdit: false,
      }
    case actionTypes.GET_LIST_ITEM:
      return {
        ...state,
        contacts:
        {
          id: payload.id,
          ...payload.data,
        }
      }
    case actionTypes.UPDATE_CONTACT:
      return {
        ...state,
        isEdit: !state.isEdit,
      }
    default:
      return state;
  }
}

export default contactReducer;