import {
  TOGGLE_BUTTON 
} from '../actions/types';

//import future actions above

const initialState = {
  toggleButton: true
};

//add new cases into swith with actions and what state to pass to props below

export default (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_BUTTON:
      return {
        ...state,
        toggleButton: !state.toggleButton
      }
      default:
        return state
  }
};