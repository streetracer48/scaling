import axios from 'axios';
import {
    TOGGLE_BUTTON,
    FETCH_BREEDS_SUCCESS,
    FETCH_BREEDS_INIT,
    FETCH_FAIL,
    FETCH_BREED
} from '../actions/types';


const initialState = {
  breed: {},
  breeds: [],
  loading: false
};

export default function(state = initialState, action) {
    const { payload, type } = action;

    switch(type) {
      case FETCH_BREEDS_INIT:
        return {
          ...state,
          breed: null,
          breeds: null,
          loading: true
        };
      case FETCH_BREEDS_SUCCESS:
        return {
          ...state,
          breeds: payload,
          loading: false
        };
      case FETCH_FAIL:
        return {
          ...state,
          breed: null,
          breeds: null,
          loading: false
        };

        case FETCH_BREED:
          return {
            ...state,
            breed: payload,
            loading: false
          };
      default:
        return state;
    }
  }