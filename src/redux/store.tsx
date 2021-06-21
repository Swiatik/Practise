import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit'
import  profilesReducer from '../redux/profiles-reducer';
import postsReducer from './posts-reducer';
// import { reducer as formReducer } from 'redux-form'
import authReducer from './auth-reducer';
import thunkMiddleware from "redux-thunk";

let Reducers = combineReducers({
  profiles: profilesReducer,
  posts: postsReducer,
  auth: authReducer,
  // form: formReducer 
});

type ReducersType = typeof Reducers;
export type AppStateType = ReturnType<ReducersType>;

let store = createStore(Reducers, applyMiddleware(thunkMiddleware));

export default store;