import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import HomeContainer from './modules/Home/HomeContainer';
import ContactInfoContainer from './modules/Dashboard/components/ContactList/ContactInfo/ContactInfoContainer';
import ContactListContainer from './modules/Dashboard/components/ContactList/ContactListContainer';
import DashboardContainer from './modules/Dashboard/DashboardContainer';
import AddContactContainer from './modules/ContactPage/components/AddContact/AddContactContainer';
import LoginContainer from './modules/Login/LoginContainer';
import SignupContainer from './modules/Signup/SignupContainer';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={HomeContainer} exact />
      <Route path="/contact-info" component={ContactInfoContainer} />
      <Route path="/contact-list" component={ContactListContainer} />
      <Route path="/dashboard" component={DashboardContainer} />
      <Route path="/add-contact" component={AddContactContainer} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/signup" component={SignupContainer} />
      <Route path="*" component={LoginContainer} />
    </Switch>
  );
}

export default Routes;