import { combineReducers, createStore } from '@reduxjs/toolkit'
import  profilesReducer from '../redux/profiles-reducer';
import accountReducer from './account-reducer';
import postsReducer from './posts-reducer';

let reducers = combineReducers({
  profiles: profilesReducer,
  posts: postsReducer,
  account: accountReducer
});

let store = createStore(reducers);

export default store;