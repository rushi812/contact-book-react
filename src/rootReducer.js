import { combineReducers } from 'redux';

import contactReducer from './redux/contactReducers';
import authReducer from './redux/authReducer';

const rootReducer = combineReducers({
  contact: contactReducer,
  auth: authReducer
})


export default rootReducer;