import { combineReducers, createStore } from '@reduxjs/toolkit'
import { profileReducer} from '../redux/profiles-reducer';

let reducers = combineReducers({
  profile: profileReducer
});

let store = createStore(reducers);

export default store;