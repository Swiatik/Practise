import React from 'react';
import RegistrationForm from './components/registration/registration-form';
import LoginForm from './components/login/login-form';
import AccountContainer from './components/account/accountContainer'
import Profiles from './components/profiles/profiles'
import PostsContainer from './components/posts/postsContainer'
import withLayout from './hoc/withLayout'
import PostsInfoContainer from './components/posts/postInfo/postInfo'
import MyPosts from './components/posts/my-posts/my-posts'
import MyAccount from './components/account/my-account/my-account';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginForm} exact />
          <Route path="/create-account" component={RegistrationForm} />
          <Route path="/account" component={MyAccount} />
          <Route path="/posts/:post_id/comments" component={PostsInfoContainer} />
          <Route path="/posts" component={withLayout(PostsContainer)} />
          <Route path="/profiles/:username/posts" component={withLayout(MyPosts)} />
          <Route path="/profiles/:username" component={AccountContainer} />
          <Route path="/profiles" component={Profiles} />
        </Switch>
      </BrowserRouter>
    );
  }
}