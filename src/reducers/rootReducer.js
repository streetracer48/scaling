import { combineReducers } from 'redux';
import AppReducer from './appReducer';
import breedsCat from './reducer';
import alert from './alert'

//import any future reducers created and pass down as a key value into combineReducers below

export default combineReducers({
  app: AppReducer,
  breedsCat,
  alert
});