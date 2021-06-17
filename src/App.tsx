import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RegistrationForm from './components/registration/registration-form';
import LoginForm from './components/login/login-form';
import Account from './components/account/account'
import Profiles from './components/profiles/profiles'
import Posts from './components/posts/posts'

export default class App extends React.Component {
    render() {
      return (
        <BrowserRouter>
          <Switch>
            <Route path="/login" component={LoginForm} exact/>            
            <Route path="/create-account" component={RegistrationForm}/>
            <Route path="/profiles/:username" component={Account}/>
            <Route path="/profiles" component={Profiles}/>
            <Route path="/posts" component={Posts}/>
          </Switch>
      </BrowserRouter>
      );
    }
  }