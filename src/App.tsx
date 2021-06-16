import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RegistrationForm from './components/registration/registration-form';
import LoginForm from './components/login/login-form';
import Profile from './components/profile/profile'
import Profiles from './components/profiles/profiles';

export default class App extends React.Component {
    render() {
      return (
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={LoginForm} exact/>            
            <Route path="/create-account" component={RegistrationForm}/>
            <Route path="/profiles/:username" component={Profile}/>
            <Route path="/profiles" component={Profiles}/>
          </Switch>
      </BrowserRouter>
      );
    }
  }