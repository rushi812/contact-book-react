import * as actionTypes from './actionTypes';


const initialState = {
  isLoggedIn: false,
}

const authReducer = (state = initialState, action) => {

  const { type } = action;

  switch (type) {
    case actionTypes.IS_LOGGEDIN:
      return {
        ...state,
        isLoggedIn: !state.isLoggedIn,
      }
    default:
      return state;
  }

}

export default authReducer;

