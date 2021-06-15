import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RegistrationForm from './components/registration/registration-form';
import LoginForm from './components/login/login-form';

export default class App extends React.Component {
    render() {
      return (
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={LoginForm} exact/>            
            <Route path="/create-account" component={RegistrationForm}/>
          </Switch>
      </BrowserRouter>
      );
    }
  }