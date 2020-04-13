import axios from 'axios';
import {
    TOGGLE_BUTTON,
    FETCH_BREEDS_SUCCESS,
    FETCH_BREEDS_FAIL,
    FETCH_CAT_BY_ID_SUCCESS,
    FETCH_BREEDS_INIT,
} from '../actions/types';


const initialState = {
  breed: null,
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
      case FETCH_BREEDS_FAIL:
        return {
          ...state,
          post: null,
          posts: null,
          loading: false
        };
      default:
        return state;
    }
  }